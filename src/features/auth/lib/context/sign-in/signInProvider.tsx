'use client'

import { ReactNode, useMemo, useState } from "react";
import { SignInContext } from "./signInContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SignInApi } from "../../api";
import { SignInDto, signInSchema } from "../../schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { INPUT_MODE, toast, TOAST_TIMEOUT } from "@/shared";

const signInApi = new SignInApi()

export function SignInProvider({ children }: { children: ReactNode }) {
    const queryClient = useQueryClient()
    const [signInOpenDialog, setSignInOpenDialog] = useState<boolean>(false)
    const router = useRouter()

    const signInform = useForm<SignInDto>({
        resolver: zodResolver(signInSchema),
        mode: INPUT_MODE,
        defaultValues: { 
        email: "",
        password: ""
        }
    })

    const signInMutate = useMutation<unknown, AxiosError, SignInDto>({
        mutationFn: (dto: SignInDto) => signInApi.signIn(dto),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['me'] })
            toast.add({
                title: "Sign-In",
                description: "Login was successfully",
                type: "success",
                timeout: TOAST_TIMEOUT
            });
            closeDialog()
        },
        onError: (error) => {
            console.log("status", error.response?.status)
            switch(error.response?.status) {
                case 409:
                    signInform.setError("email", {
                    type: "server",
                    message: "Email already exist"
                    })
                    break
                case 429:
                    signInform.setError("form", {
                    type: "server",
                    message: "Too many request"
                    })
                    break
                case 401: 
                    signInform.setError("email", {
                    type: "server",
                    message: "Invalid email or password"
                    })
                    break
                default:
                    signInform.setError("form", {
                    type: "server",
                    message: "Something went wrong..."
                    })
            }
            }
        })

    const closeDialog = () => {
        setSignInOpenDialog(false)
        signInform.reset()
        router.push('/')
    }

    const value = useMemo(() => ({ 
        mutation: signInMutate,
        form: signInform,
        hooks: {
            signInOpenDialog,
            setSignInOpenDialog
        }
     }), [signInMutate, signInform, signInOpenDialog, setSignInOpenDialog])

    return <SignInContext.Provider value={value}>{children}</SignInContext.Provider>
}
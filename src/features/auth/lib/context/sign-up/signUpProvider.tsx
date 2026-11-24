'use client'

import { ReactNode, useMemo, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SignUpDto, signUpSchema } from "@/features/auth";
import { SignUpApi } from "@/features/auth";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpContext } from "./signUpContext";
import { useRouter } from "next/navigation";
import { INPUT_MODE } from "@/shared";

const signUpApi = new SignUpApi()

export function SignUpProvider({ children }: { children: ReactNode }) {
    const queryClient = useQueryClient()
    const [signUpOpenDialog, setSignUpOpenDialog] = useState<boolean>(false)
    const router = useRouter()

    const signUpForm = useForm<SignUpDto>({
        resolver: zodResolver(signUpSchema),
        mode: INPUT_MODE,
        defaultValues: { 
        email: "",
        password: "",
        confirm: ""
        }
    })

    const signUpMutate = useMutation<unknown, AxiosError, Omit<SignUpDto, "confirm">>({
        mutationFn: (dto: Omit<SignUpDto, "confirm">) => signUpApi.signUp(dto),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['me'] })
            closeDialog()
        },
        onError: (error) => {
                switch(error.response?.status) {
                case 409:
                    signUpForm.setError("email", {
                    type: "server",
                    message: "Email already exist"
                    })
                    break
                case 429:
                    signUpForm.setError("form", {
                    type: "server",
                    message: "Too many request"
                    })
                    break
                default:
                    signUpForm.setError("form", {
                    type: "server",
                    message: "Something went wrong..."
                    })
                }
            }
        })

  const closeDialog = () => {
    setSignUpOpenDialog(false)
    signUpForm.reset()
    router.push('/')
  }

    const value = useMemo(() => ({
        mutation: {...signUpMutate},
        form: {...signUpForm},
        hooks: {
            signUpOpenDialog,
            setSignUpOpenDialog
        }
    }), [signUpMutate, signUpForm, signUpOpenDialog, setSignUpOpenDialog])

    return <SignUpContext.Provider value={value}>{children}</SignUpContext.Provider>
}
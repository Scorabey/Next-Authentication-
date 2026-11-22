'use client'

import { ReactNode, useMemo, useState } from "react";
import { AuthContext } from "./authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SignUpDto, signUpSchema } from "../schemas";
import { SignUpApi } from "../api";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface AuthProviderProps {
    children: ReactNode
}

const signUpApi = new SignUpApi()

export function AuthProvider({ children }: AuthProviderProps) {
    const queryClient = useQueryClient()
    const [signUpOpenDialog, setSignUpOpenDialog] = useState<boolean>(false)

    const signUpForm = useForm<SignUpDto>({
        resolver: zodResolver(signUpSchema),
        mode: "onTouched",
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
  }

    const value = useMemo(() => ({
        mutation: {
            signUp: {...signUpMutate}
        },
        form: {
            signUp: {...signUpForm}
        },
        hooks: {
            signUp: {
                signUpOpenDialog,
                setSignUpOpenDialog
            }
        }
    }), [signUpMutate, signUpForm, signUpOpenDialog, setSignUpOpenDialog])

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
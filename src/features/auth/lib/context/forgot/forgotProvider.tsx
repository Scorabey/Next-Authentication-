'use client'

import { ReactNode, useMemo } from "react";
import { ForgotContext } from "./forgotContext";
import { useMutation } from "@tanstack/react-query";
import { ForgotApi } from "../../api";
import { ForgotDto, forgotSchema } from "../../schemas";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { INPUT_MODE, toast } from "@/shared";

const forgotApi = new ForgotApi()

export function ForgotProvider({ children }: { children: ReactNode }) {
    const router = useRouter()

    const forgotForm = useForm<ForgotDto>({
        resolver: zodResolver(forgotSchema),
        mode: INPUT_MODE,
        defaultValues: { 
        email: ""
        }
    })

    const mutation = useMutation<unknown, AxiosError, ForgotDto>({
        mutationFn: (dto: ForgotDto) => forgotApi.forgot(dto),
        onSuccess: () => {
            forgotForm.reset()
            toast.add({
                description: "Check your link.",
                type: "info",
            })
            router.push('/auth/sign-in')
        },
        onError: (error) => {
            switch(error.response?.status) {
                case 429:
                    forgotForm.setError("form", {
                        type: "server",
                        message: "Too many request"
                    })
                    break
                default:
                    forgotForm.setError("form", {
                        type: "server",
                        message: "Something went wrong..."
                    })
                    break
                }
            }
        })

    const value = useMemo(() => ({
        mutation: mutation,
        form: forgotForm
    }), [mutation, forgotForm])

    return <ForgotContext.Provider value={value}>{children}</ForgotContext.Provider>
}
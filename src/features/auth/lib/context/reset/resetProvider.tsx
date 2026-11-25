'use client'

import { ReactNode, useMemo } from "react";
import { ResetContext } from "./resetContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ResetDto, resetSchema } from "../../schemas/reset";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ResetApi } from "../../api";
import { INPUT_MODE, toast } from "@/shared";

const resetApi = new ResetApi()

export function ResetProvider({ children }: { children: ReactNode }) {
    const router = useRouter()

    const resetForm = useForm<ResetDto>({
        resolver: zodResolver(resetSchema),
        mode: INPUT_MODE,
        defaultValues: {
            password: "",
            token: "",
            confirm: ""
        }
    })

    const resetMutation = useMutation<unknown, AxiosError, Omit<ResetDto, "confirm">>({
        mutationFn: (dto: Omit<ResetDto, "confirm">) => resetApi.reset(dto),
        onSuccess: () => {
            resetForm.reset()
            toast.add({
                description: "Password reset was successfully",
                type: "success"
            })
            router.push("/auth/sign-in")
        },
        onError: (error) => {
            switch(error.response?.status) {
                case 429:
                    resetForm.setError("form", {
                        type: "server",
                        message: "Too many request"
                    })
                    break
                default:
                    resetForm.setError("form", {
                        type: "server",
                        message: "Something went wrong..."
                    })
                    break
                }
            }
        })

    const value = useMemo(() => ({ 
        mutation: resetMutation,
        form: resetForm
     }), [resetMutation, resetMutation])

    return <ResetContext.Provider value={value}>{children}</ResetContext.Provider>
}
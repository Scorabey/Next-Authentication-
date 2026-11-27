'use client'

import { ReactNode, useMemo } from "react";
import { MailContext } from "./mailContext";
import { MailApi } from "../../api/mail";
import { useMutation } from "@tanstack/react-query";
import { MailDto } from "../../schemas";
import { AxiosError } from "axios";
import { toast } from "@/shared";

const mailApi = new MailApi();

export function MailProvider({ children }: { children: ReactNode }) {
    const verifyMutation = useMutation<unknown, AxiosError, MailDto>({
        mutationKey: ['me'],
        mutationFn: (dto: MailDto) => mailApi.verify(dto),
        onSuccess: () => {
            toast.add({
                description: "Mail verified was successfully",
                type: "success"
            })
        },
        onError: (error) => {
            switch(error.response?.status) {
                case 429:
                    toast.add({
                        description: "Too many request...",
                        type: "error"
                    })
                    break
                default:
                    toast.add({
                        description: "Something went wrong...",
                        type: "error"
                    })
                    break
                }
            }
        }
    )

    const verificationMutation = useMutation<unknown, AxiosError, void>({
        mutationFn: () => mailApi.verification(),
        onSuccess: () => {
            toast.add({
                description: "Check your mail",
                type: "success"
            })
        },
        onError: (error) => {
            switch(error.response?.status) {
                case 429:
                    toast.add({
                        description: "Too many request...",
                        type: "error"
                    })
                    break
                default:
                    toast.add({
                        description: "Something went wrong...",
                        type: "error"
                    })
                    break
                }
            }
        }
    )

    const value = useMemo(() => ({
        mutation: {
            verify: verifyMutation,
            verification: verificationMutation,
        },
    }), [verifyMutation, verificationMutation])
    
    return <MailContext.Provider value={value}>{children}</MailContext.Provider>
}
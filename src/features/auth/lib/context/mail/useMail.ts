'use client'

import { MailContext } from "@/features/auth"
import { useContext } from "react"

export const useMail = () => {
    const context = useContext(MailContext)

    if(!context) {
        throw new Error("useMail must be using into MailProvider")
    } 

    return context
}
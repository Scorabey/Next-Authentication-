'use client'

import { useContext } from "react"
import { ForgotContext } from "./forgotContext"

export const useForgot = () => {
    const context = useContext(ForgotContext)

    if(!context) {
        throw new Error('useForgot must be using into ForgotProvider')
    }

    return context
}
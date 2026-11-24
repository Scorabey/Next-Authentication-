'use client'

import { useContext } from "react"
import { ResetContext } from "./resetContext"

export const useReset = () => {
    const context = useContext(ResetContext)

    if(!context) {
        throw new Error("useReset must be using into ResetProvider")
    } 

    return context
}
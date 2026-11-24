'use client'

import { useContext } from "react";
import { SignInContext } from "./signInContext";

export function useSignIn() {
    const context = useContext(SignInContext);

    if(!context) {
        throw new Error('useSignIn must be using on SignInProvider')
    }

    return context
}
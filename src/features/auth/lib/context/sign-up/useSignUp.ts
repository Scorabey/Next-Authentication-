import { useContext } from "react";
import { SignUpContext } from "./signUpContext";

export function useSignUp() {
    const context = useContext(SignUpContext);

    if(!context) {
        throw new Error('useAuth must be using on AuthProvider')
    }

    return context
}
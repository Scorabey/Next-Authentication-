import { useContext } from "react";
import { SignUpContext } from "./signUpContext";

export function useSignUp() {
    const context = useContext(SignUpContext);

    if(!context) {
        throw new Error('useSignUn must be using on SignUnProvider')
    }

    return context
}
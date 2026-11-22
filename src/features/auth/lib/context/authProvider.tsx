import { ReactNode } from "react"
import { SignUpProvider } from "./sign-up"

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    return (
        <SignUpProvider>
            {children}
        </SignUpProvider>
    )
}
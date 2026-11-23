import { ReactNode } from "react"
import { SignUpProvider, SignInProvider } from "@/features/auth"

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    return (
        <SignUpProvider>
            <SignInProvider>
                {children}
            </SignInProvider>
        </SignUpProvider>
    )
}
import { ReactNode } from "react"
import { SignUpProvider, SignInProvider, ForgotProvider } from "@/features/auth"

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    return (
        <SignUpProvider>
            <SignInProvider>
                <ForgotProvider>
                    {children}
                </ForgotProvider>
            </SignInProvider>
        </SignUpProvider>
    )
}
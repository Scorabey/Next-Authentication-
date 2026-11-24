import { ReactNode } from "react"
import { SignUpProvider, SignInProvider, ForgotProvider, ResetProvider } from "@/features/auth"

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    return (
        <SignUpProvider>
            <SignInProvider>
                <ForgotProvider>
                    <ResetProvider>
                        {children}
                    </ResetProvider>
                </ForgotProvider>
            </SignInProvider>
        </SignUpProvider>
    )
}
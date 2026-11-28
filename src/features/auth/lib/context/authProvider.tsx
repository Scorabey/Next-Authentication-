import { ReactNode } from "react"
import { SignUpProvider, SignInProvider, ForgotProvider, ResetProvider, MailProvider } from "@/features/auth"

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    return (
        <SignUpProvider>
            <SignInProvider>
                <ForgotProvider>
                    <ResetProvider>
                        <MailProvider>
                            {children}
                        </MailProvider>
                    </ResetProvider>
                </ForgotProvider>
            </SignInProvider>
        </SignUpProvider>
    )
}
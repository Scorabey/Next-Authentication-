import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <main
            className="flex min-h-full min-w-full justify-center items-center"
        >
            {children}
        </main>
    )
}
import { Button } from '@/shared'
import { Children, HTMLAttributes, ReactNode } from 'react'

interface buttonProps extends HTMLAttributes<HTMLButtonElement> {
    variant: "default" | "destructive" | "ghost" | "link" | "outline" | "secondary"
    children: ReactNode
}

export const SignIn = ({ className = "", children, variant = "default" }: buttonProps) => {
    return (
        <Button
            variant={variant}
            className={className}
        >
            {children}
        </Button>
    )
}
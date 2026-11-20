import { Button } from '@/shared'
import { Children, HTMLAttributes, ReactNode } from 'react'

interface buttonProps extends HTMLAttributes<HTMLButtonElement> {
    variant: "default" | "destructive" | "ghost" | "link" | "outline" | "secondary"
    children: ReactNode
}

export const SignUp = ({ className = "", children, variant = "default" }: buttonProps) => {
    return (
        <Button
            variant={variant}
            className={className}
        >
            {children}
        </Button>
    )
}
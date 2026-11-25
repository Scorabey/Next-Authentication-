import Link from "next/link"
import { Button, ButtonProps } from "./button"

interface link {
    href: string
    content: string
}

const links: link[] = [
    { href: '/', content: 'Home' },
    { href: '/community', content: 'Community' },
    { href: '/profile', content: 'Profile' },
    { href: '/auth/sign-in', content: 'Sign-In' },
    { href: '/auth/sign-up', content: 'Sign-Up' },
    { href: '/auth/mail', content: 'Mail' },
]

export const NavPanel = ({ className, variant = "link", ...props }: ButtonProps) => {

    return (
        <nav
            className="hidden md:flex flex-row"
        >
            {links.map((link, index) => (
                <Link
                    href={link.href}
                    key={index}
                >
                    <Button
                        variant={variant}
                        className={className}
                        {...props}
                    >
                        {link.content}
                    </Button>
                </Link>
            ))}
        </nav>
    )
}
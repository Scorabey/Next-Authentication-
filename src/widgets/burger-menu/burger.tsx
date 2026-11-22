'use client'

import { SignIn } from "@/features/auth"
import { SignUp } from "@/features/auth"
import { Button, buttonVariants, cn, ThemeToggle, useBurgerToggle, XMark } from "@/shared"
import Link from "next/link"
import { useEffect } from "react"

const links = [
    { href: "/", label: "Home" },
    { href: "/community", label: "Community" },
    { href: "/profile", label: "Profile" },
]

export const BurgerMenu = () => {
    const open = useBurgerToggle((s) => s.open)
    const onClose = useBurgerToggle((s) => s.close)

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <div
            className={cn(
                "flex flex-col",
                "fixed inset-x-0 bottom-0 top-0 z-40 bg-background md:hidden",
                "transition-all duration-300",
                open
                    ? "visible opacity-100"
                    : "invisible opacity-0"
            )}
        >
            <div
                className="flex flex-row justify-between items-center h-fit w-full px-2 py-2"
            >
            <div
                className="flex flex-row gap-1"
            >
                <SignIn
                    variant={"secondary"}
                >
                    <span className="text-sm">Sign-In</span>
                </SignIn>
                <SignUp
                    variant={"default"}
                >
                    <span className="text-sm">Sign-Up</span>
                </SignUp>
            </div>
            <div
                className="flex flex-row gap-1"
            >
                <ThemeToggle
                    variant={"ghost"}
                />
                <Button
                    variant={"ghost"}
                    onClick={onClose}
                >
                    <XMark/>
                </Button>
            </div>
            </div>
            <nav className="flex h-fit flex-col items-center justify-center">
                {links.map((l) => (
                    <Button
                        key={l.href}
                        variant="ghost"
                        size="lg"
                        className="text-2xl uppercase py-6 rounded-none w-full"
                    >
                        <Link href={l.href} onClick={onClose}>
                            {l.label}
                        </Link>
                    </Button>
                ))}
            </nav>
        </div>
    );
};
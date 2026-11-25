import Link from "next/link"
import { BurgerButton, cn, CustomTooltip, ListIcon, Logo, ThemeToggle } from "@/shared"
import { cva } from "class-variance-authority"
import { SignIn } from '@/features/auth'
import { SignUp } from '@/features/auth'
import { NavPanel } from "@/shared/ui/nav-panel"

const buttonRootStyle = "cursor-pointer";

const buttonVariants = cva(
    buttonRootStyle,
    {
        variants: {
            variant: {
                default: "",
                link: "h-full px-4 py-6 font-medium text-md"
            }
        }
    }
)

export const Header = () => {
    return (
        <header
            className="fixed top-0 left-0 right-0 border-b border-b-border shadow-md shadow-foreground/20 backdrop-blur-lg bg-background/20"
        >
            <div
                className="container mx-auto h-fit flex flex-row justify-between items-center px-4"
            >
                <div
                    className="py-4"
                >
                    <CustomTooltip content={<p>Logo</p>} side="top">
                        <Link
                            href={"/"}
                        >
                            <Logo className="fill-foreground"/>
                        </Link>
                    </CustomTooltip>
                </div> {/* Logo */}
                <NavPanel className={cn(buttonVariants({ variant: "link" }))}/>
                <div
                    className="hidden md:flex flex-row gap-2"
                >
                    <CustomTooltip content={<p>Open sign-in dialog menu</p>} side="top">
                        <SignIn
                            variant={"secondary"}
                            className={cn(buttonVariants({ variant: "default" }))}
                        >
                            Sign-In
                        </SignIn>
                    </CustomTooltip>
                    <CustomTooltip content={<p>Open sign-up dialog menu</p>} side="top">
                        <SignUp
                            variant={"default"}
                            className={cn(buttonVariants({ variant: "default" }))}
                        >
                            Sign-Up
                        </SignUp>
                    </CustomTooltip>
                    <CustomTooltip content={<p>Switch theme</p>} side="top">
                        <ThemeToggle
                            className={cn(buttonVariants({ variant: "default" }))}
                            variant={"secondary"}
                        />
                    </CustomTooltip>
                </div> {/* Butttons Group */}

                <BurgerButton
                    variant={"outline"}
                >
                    <ListIcon className="stroke-foreground" />
                </BurgerButton>
            </div>
        </header>
    )
}
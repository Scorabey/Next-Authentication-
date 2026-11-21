import Link from "next/link"
import { BurgerButton, Button, cn, ListIcon, ThemeToggle, useBurgerToggle } from "@/shared"
import { cva } from "class-variance-authority"
import { SignIn } from '@/features/sign-in'
import { SignUp } from '@/features/sign-up'

const buttonVariants = cva(
    "cursor-pointer",
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
            className="w-full h-fit fixed border-b border-b-border shadow-md shadow-foreground/20 backdrop-blur-lg bg-background/20"
        >
            <div
                className="container mx-auto h-fit flex flex-row justify-between items-center px-4"
            >
                <div
                    className="py-4"
                >
                    <Link
                        href={"/"}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-foreground" width="123" height="40" viewBox="0 0 123 40" fill="none" id="Logo">
                            <g id="logotype">
                                <path d="M115.737 11.8284L107.152 0H123L115.737 11.8284Z"/><path d="M96.7638 0.00153177H102.446L113.673 15.4694L98.6121 39.9985L82.9109 39.9992L78.2611 33.5911L74.3266 40L53.926 39.9992L49.2762 33.5911L45.3425 39.9985L11.6236 39.9992L0 23.9822L14.7243 0.00153177H27.5979L13.1866 23.4722L17.2121 29.0195L39.2109 29.0187L47.216 15.9795L43.5891 10.9813H38.8735L31.2042 23.4706L32.9546 25.8824H19.3985L18.0184 23.9807L32.7411 0.00153177H49.1767L53.4287 5.8598L57.025 0.00306355L84.6146 0.000765887L77.8725 10.9813L63.1574 10.9821L60.4026 15.4686L60.4034 15.4694L55.4889 23.4722L59.5144 29.0195H68.195L70.6033 25.0981H60.9848L60.0859 23.6345L65.9291 14.1184H90.2168L84.4738 23.4714L88.4993 29.0187H92.4805L100.486 15.9795L96.8586 10.9813H82.5727L89.3148 0H96.7638V0.00153177Z"/>
                            </g>
                        </svg>
                    </Link>
                </div> {/* Logo */}
                <nav
                    className="hidden md:flex flex-row"
                >
                    <Link
                        href={"/"}
                    >
                        <Button
                            variant={"link"}
                            className={cn(buttonVariants({ variant: "link" }))}
                        >
                            Home
                        </Button>
                    </Link>
                    <Link
                        href={"/community"}
                    >
                        <Button
                            variant={"link"}
                            className={cn(buttonVariants({ variant: "link" }))}
                        >
                            Community
                        </Button>
                    </Link>
                    <Link
                        href={"/profile"}
                    >
                        <Button
                            variant={"link"}
                            className={cn(buttonVariants({ variant: "link" }))}
                        >
                            Profile
                        </Button>
                    </Link>
                </nav>{/* Nav Panel */}
                <div
                    className="hidden md:flex flex-row gap-2"
                >
                    <SignIn
                        variant={"secondary"}
                        className={cn(buttonVariants({ variant: "default" }))}
                    >
                        Sign-In
                    </SignIn>
                    <SignUp
                        variant={"default"}
                        className={cn(buttonVariants({ variant: "default" }))}
                    >
                        Sign-Up
                    </SignUp>
                    <ThemeToggle
                        className={cn(buttonVariants({ variant: "default" }))}
                        variant={"secondary"}
                    />
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
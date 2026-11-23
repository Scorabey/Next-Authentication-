import Link from "next/link"
import { Button } from "./button"

interface NavPanelProps {
    className: string
}

export const NavPanel = ({ className }: NavPanelProps) => {

    return (
        <nav
            className="hidden md:flex flex-row"
        >
            <Link
                href={"/"}
            >
                <Button
                    variant={"link"}
                    className={className}
                >
                    Home
                </Button>
            </Link>
            <Link
                href={"/community"}
            >
                <Button
                    variant={"link"}
                    className={className}
                >
                    Community
                </Button>
            </Link>
            <Link
                href={"/profile"}
            >
                <Button
                    variant={"link"}
                    className={className}
                >
                    Profile
                </Button>
            </Link>
            <Link
                href={"/auth/sign-in"}
            >
                <Button
                    variant={"link"}
                    className={className}
                >
                    Sign-In
                </Button>
            </Link>
            <Link
                href={"/auth/sign-up"}
            >
                <Button
                    variant={"link"}
                    className={className}
                >
                    Sign-Up
                </Button>
            </Link>
        </nav>
    )
}
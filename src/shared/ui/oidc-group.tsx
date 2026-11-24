import Link from "next/link"
import { BASE_URL } from "../lib"
import { Button } from "./button"
import { Google } from "./icons"

const API_LINK_OIDC = `${BASE_URL}/auth/oidc/google/login?redirectTo=http://localhost:3000/ `

export const OIDCGroup = ({ className }: { className?: string }) => {
    return (
        <div
            className={className}
        >
            <Link
                href={API_LINK_OIDC}
                title="Login with Google"
            >
                <Button
                className={'rounded-full cursor-pointer'}
                id="google-auth"
                variant={"outline"}
                >
                    <Google className="stroke-foreground fill-foreground" />
                </Button>
            </Link>
        </div>
    )
}
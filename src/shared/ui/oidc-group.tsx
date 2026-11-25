import Link from "next/link"
import { BASE_URL } from "../lib"
import { Button } from "./button"
import { Google } from "./icons"
import CustomTooltip from "./tooltip"

const API_LINK_OIDC = `${BASE_URL}/auth/oidc/google/login?redirectTo=http://localhost:3000/ `

export const OIDCGroup = ({ className }: { className?: string }) => {
    return (
        <div
            className={className}
        >
            <CustomTooltip content={<p>Login with Google</p>}>
                <Link
                    href={API_LINK_OIDC}
                >
                    <Button
                    className={'rounded-full cursor-pointer'}
                    id="google-auth"
                    variant={"outline"}
                    >
                        <Google className="stroke-foreground fill-foreground" />
                    </Button>
                </Link>
            </CustomTooltip>
        </div>
    )
}
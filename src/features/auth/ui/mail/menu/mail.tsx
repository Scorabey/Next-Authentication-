'use client'

import { useMail } from "@/features/auth/lib"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CheckBadge, XBadge } from "@/shared"
import { useEffect, useRef } from "react"

export const MailMenu = ({
  token
}: {
  token: string
}) => {
    const { mutation: { verify } } = useMail()
    const { mutate, isSuccess } = verify
    const called = useRef(false)

    useEffect(() => {
        if(called.current) return
        called.current = true
        mutate({ token })
    }, [mutate, token])

    return (
        <>
        { isSuccess
            ? (
                <Card
                    className="min-w-96 min-h-fit"
                >
                    <CardHeader className="flex flex-col gap-4 justify-center items-center">
                        <CheckBadge className="fill-green-600" width={128} height={128}/>
                    </CardHeader>
                    <CardContent
                        className="flex flex-col gap-2 justify-center items-center"
                    >
                        <CardTitle className="text-4xl">Email confirmed</CardTitle>
                        <CardDescription className="text-xl text-center">Your email address has been successfully verified.<br/>You'll receive notifications and can recover your account access using this address.</CardDescription>
                    </CardContent>
                </Card>
            )
            : (
                <Card
                    className="min-w-96 min-h-fit"
                >
                    <CardHeader className="flex flex-col gap-4 justify-center items-center">
                        <XBadge className="fill-red-600" width={128} height={128}/>
                    </CardHeader>
                    <CardContent
                        className="flex flex-col gap-2 justify-center items-center"
                    >
                        <CardTitle className="text-4xl">Email not confirmed</CardTitle>
                        <CardDescription className="text-xl text-center">Your email address hasn't been verified yet.<br/>Check your inbox for the confirmation link, or request a new one below.</CardDescription>
                    </CardContent>
                </Card>
            )}
        </>
    )
}
'use client'

import { Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Spinner } from "@/shared"
import Link from "next/link"
import { ResetField } from "../field"
import { ResetDto, useReset } from "@/features/auth/lib"
import { SubmitHandler } from "react-hook-form"

export const ResetMenu = ({ token }: { token: string }) => {
    const { form, mutation } = useReset()
    const { handleSubmit } = form;
    const { mutate, isPending } = mutation;

    const onSubmit: SubmitHandler<Omit<ResetDto, "confirm">> = (data) => {
        mutate({
            password: data.password,
            token: token
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <Card
            className="min-w-96 min-h-fit"
        >
            <CardHeader>
                <CardTitle className="text-lg">Create a New Password</CardTitle>
                <CardDescription>
                    Your new password must be different from your previous one.
                </CardDescription>
                <CardAction>
                    <Link
                        href={'/auth/sign-in'}
                        title="Go to sign-in"
                    >
                        <Button variant={"ghost"}>Sign-In</Button>
                    </Link>
                </CardAction>
            </CardHeader>
            <CardContent>
                <ResetField form={form} />
            </CardContent>
            <CardFooter
                className="flex flex-row gap-1 w-full justify-end"
            >
                <Button
                    type="submit"
                    variant={"default"}
                    title="Submit and find email"
                    disabled={isPending}
                    className={isPending ? "cursor-progress" : ""}
                >
                    {isPending ? <Spinner/> : "Reset"}
              </Button>
            </CardFooter>
        </Card>
        </form>
    )
}
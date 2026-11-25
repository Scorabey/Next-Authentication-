'use client'

import { Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CustomTooltip, Spinner } from "@/shared"
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
                    <CustomTooltip content={<p>Go to sign-in</p>}>
                        <Link
                            href={'/auth/sign-in'}
                        >
                            <Button variant={"ghost"}>Sign-In</Button>
                        </Link>
                    </CustomTooltip>
                </CardAction>
            </CardHeader>
            <CardContent>
                <ResetField form={form} />
            </CardContent>
            <CardFooter
                className="flex flex-row gap-1 w-full justify-end"
            >
                <CustomTooltip content={<p>Submit and find email</p>}>
                    <Button
                        type="submit"
                        variant={"default"}
                        disabled={isPending}
                        className={isPending ? "cursor-progress" : ""}
                    >
                        {isPending ? <Spinner/> : "Reset"}
                    </Button>
                </CustomTooltip>
            </CardFooter>
        </Card>
        </form>
    )
}
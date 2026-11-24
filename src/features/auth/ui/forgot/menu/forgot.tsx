'use client'

import { Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Spinner } from "@/shared"
import { ForgotField } from "../field"
import Link from "next/link"
import { ForgotDto, useForgot } from "@/features/auth/lib"
import { SubmitHandler } from "react-hook-form"

export const ForgotMenu = () => {
    const { form, mutation } = useForgot()
    const { handleSubmit } = form;
    const { mutate, isPending } = mutation;
        
    const onSubmit: SubmitHandler<ForgotDto> = (data) => {
        mutate({
            email: data.email
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <Card
            className="min-w-96 min-h-fit"
        >
            <CardHeader>
                <CardTitle className="text-lg">Forgot your password?</CardTitle>
                <CardDescription>
                    No worries! 
                    <br/>Enter the email address linked to your account 
                    <br/>and we'll send you a link to reset your password.
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
                <ForgotField form={form} />
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
                {isPending ? <Spinner/> : 'Submiit'}
              </Button>
            </CardFooter>
        </Card>
        </form>
    )
}
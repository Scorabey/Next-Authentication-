'use client'

import { SignInDto, useSignIn } from "@/features/auth/lib"
import { FieldLegend, FieldSet, FieldDescription, FieldSeparator, FieldGroup, Button, Spinner, FieldTitle, Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from "@/shared"
import Link from "next/link"
import { SignInField } from "../field"
import { SubmitHandler } from "react-hook-form"

export const SignInMenu = () => {
    const { mutation, form } = useSignIn()
    const { isPending, mutate } = mutation;
    const { handleSubmit } = form;

    const onSubmit: SubmitHandler<SignInDto> = (data) => {
    mutate({
        email: data.email,
        password: data.password
    })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <Card
            className="min-w-96 min-h-fit"
        >
            <CardHeader>
                <CardTitle className="text-lg">Welcome back</CardTitle>
                <CardDescription>Enter your email and password to access your dashboard.</CardDescription>
                <CardAction>
                    <Link
                        href={'/auth/sign-up'}
                        title="Go to sign-up"
                    >
                        <Button variant={"ghost"}>Sign-Up</Button>
                    </Link>
                </CardAction>
            </CardHeader>
            <CardContent>
                <SignInField form={form}/>
            </CardContent>
            <CardFooter className="flex-col gap-2"  >
                <Button
                    type="submit"
                    variant={"default"}
                    title="Sign-in application"
                    disabled={isPending}
                    className={`${isPending ? "cursor-progress" : ""} w-full`}
                >
                {isPending ? <Spinner/> : 'Sign-In'}
              </Button>
            </CardFooter>
        </Card>
        </form>
    )
}
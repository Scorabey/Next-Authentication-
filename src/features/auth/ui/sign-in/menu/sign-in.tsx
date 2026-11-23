'use client'

import { SignInDto, useSignIn } from "@/features/auth/lib"
import { FieldLegend, FieldSet, FieldDescription, FieldSeparator, FieldGroup, Button, Spinner, FieldTitle } from "@/shared"
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
        <FieldSet
            className="border border-border rounded-sm p-4 min-w-96 min-h-fit"
        >
            <FieldLegend>Sign-In</FieldLegend>
            <div
                className="flex flex-col gap-2"
            >
                <FieldTitle className="text-lg">Welcome back</FieldTitle>
                <FieldDescription>Enter your email and password to access your dashboard.</FieldDescription>
            </div>
            <FieldSeparator/>
            <SignInField form={form}/>
            <FieldSeparator/>
            <div
                className="flex flex-row gap-1 w-full justify-end"
            >
                <Link
                    href={'/auth/sign-up'}
                    title="Go to sign-up"
                >
                    <Button variant={"ghost"}>Sign-Up</Button>
                </Link>
                <Button
                    type="submit"
                    variant={"default"}
                    title="Sign-in application"
                    disabled={isPending}
                    className={isPending ? "cursor-progress" : ""}
                >
                {isPending ? <Spinner/> : 'Sign-In'}
              </Button>
            </div>
        </FieldSet>
        </form>
    )
}
'use client'

import { SignUpDto, useSignUp } from "@/features/auth/lib"
import { FieldLegend, FieldSet, FieldDescription, FieldSeparator, Button, Spinner, FieldTitle, Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter, CustomTooltip } from "@/shared"
import Link from "next/link"
import { SignUpField } from "../field"
import { SubmitHandler } from "react-hook-form"

export const SignUpMenu = () => {
    const { mutation, form } = useSignUp()
    const { isPending, mutate } = mutation;
    const { handleSubmit } = form;

      const onSubmit: SubmitHandler<SignUpDto> = (data) => {
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
                <CardTitle className="text-lg">Create your account</CardTitle>
                <CardDescription>Enter your details below to create your account and get started.</CardDescription>
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
                <SignUpField form={form}/>
            </CardContent>
            <CardFooter
                className="flex-col gap-2"
            >
                <CustomTooltip content={<p>Sign-up application</p>}>
                    <Button
                        type="submit"
                        variant={"default"}
                        disabled={isPending}
                        className={`${isPending ? "cursor-progress" : ""} w-full`}
                    >
                    {isPending ? <Spinner/> : 'Sign-Up'}
                </Button>
                </CustomTooltip>
            </CardFooter>
        </Card>
        </form>
    )
}
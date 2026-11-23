'use client'

import { SignUpDto, useSignUp } from "@/features/auth/lib"
import { FieldLegend, FieldSet, FieldDescription, FieldSeparator, Button, Spinner, FieldTitle } from "@/shared"
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
        <FieldSet
            className="border border-border rounded-sm p-4 min-w-96 min-h-fit"
        >
            <FieldLegend>Sign-Up</FieldLegend>
            <div
                className="flex flex-col gap-2"
            >
                <FieldTitle className="text-lg">Create your account</FieldTitle>
                <FieldDescription>Enter your details below to create your account and get started.</FieldDescription>
            </div>
            <FieldSeparator/>
            <SignUpField form={form}/>
            <FieldSeparator/>
            <div
                className="flex flex-row gap-1 w-full justify-end"
            >
                <Link
                    href={'/auth/sign-in'}
                >
                    <Button variant={"ghost"}>Sign-In</Button>
                </Link>
                <Button
                    type="submit"
                    variant={"default"}
                    disabled={isPending}
                    className={isPending ? "cursor-progress" : ""}
                >
                {isPending ? <Spinner/> : 'Sign-Up'}
              </Button>
            </div>
        </FieldSet>
        </form>
    )
}
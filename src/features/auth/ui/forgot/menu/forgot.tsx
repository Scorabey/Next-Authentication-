'use client'

import { Button, FieldDescription, FieldLegend, FieldSeparator, FieldSet, FieldTitle, Spinner } from "@/shared"
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
        <FieldSet
            className="border border-border rounded-sm p-4 min-w-96 min-h-fit"
        >
            <FieldLegend>Account recovery</FieldLegend>
            <div
                className="flex flex-col gap-2"
            >
                <FieldTitle className="text-lg">Forgot your password?</FieldTitle>
                <FieldDescription>
                    No worries! 
                    <br/>Enter the email address linked to your account 
                    <br/>and we'll send you a link to reset your password.
                </FieldDescription>
            </div>
            <FieldSeparator/>
            <ForgotField form={form} />
            <FieldSeparator/>
            <div
                className="flex flex-row gap-1 w-full justify-end"
            >
                <Link
                    href={'/auth/sign-in'}
                    title="Back to sign-in"
                >
                    <Button variant={"ghost"}>Back</Button>
                </Link>
                <Button
                    type="submit"
                    variant={"default"}
                    title="Submit and find email"
                    disabled={isPending}
                    className={isPending ? "cursor-progress" : ""}
                >
                {isPending ? <Spinner/> : 'Submiit'}
              </Button>
            </div>
        </FieldSet>
        </form>
    )
}
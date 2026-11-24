'use client'

import { SignInDto } from "@/features/auth"
import { BASE_URL, Button, Eye, EyeSlash, Field, FieldGroup, Input, Label, OIDCGroup } from "@/shared"
import Link from "next/link"
import { Dispatch, SetStateAction, useState } from "react"
import { UseFormReturn } from "react-hook-form"

interface ISignInField {
    form: UseFormReturn<SignInDto>
    setSignInOpenDialog: Dispatch<SetStateAction<boolean>>
}

export const SignInField = ({ form, setSignInOpenDialog }: ISignInField) => {
    const [eye, setEye] = useState({
        passwordEye: false,
        confirmEye: false,
    })

    const { register, formState: { errors } } = form

    return (
        <FieldGroup
            className="flex flex-col gap-3"
        >
        <Field>
            <Label htmlFor="email">
            Email{errors.email?.type === "required" ? <span className="text-base text-red-400">*</span> : ""}
            </Label>
            <Input
            id="email"
            placeholder="example@gmail.com"
            title="Enter your email"
            {...register("email", { required: "Email is required" })}
            />
        </Field>
        <Field>
            <Label htmlFor="password">
            Password{errors.password?.type === "required" ? <span className="text-base text-red-400">*</span> : ""}
            </Label>
            <div
            className="flex flex-row gap-1"
            >
            <Input
                id="password"
                type={eye.passwordEye ? "text" : "password"}
                placeholder="Enter password..."
                title="Enter your password"
                {...register("password", { required: "Password is required" })}
            />
            <Button
                variant={"ghost"}
                onClick={() => setEye(prev => ({
                confirmEye: prev.confirmEye,
                passwordEye: !prev.passwordEye
                }))}
            >
                {eye.passwordEye ? <Eye className="stroke-foreground size-4"/> : <EyeSlash className="stroke-foreground size-4"/>}
            </Button>
            </div>
            <Link
                href={'/auth/forgot'}
                className="!w-fit"
            >
                <Button 
                    variant={"link"} 
                    className={"cursor-pointer"} 
                    onClick={() => setSignInOpenDialog(false)}
                >
                    Forgout password?
                </Button>
            </Link>
        </Field>
        <OIDCGroup className="w-full flex justify-center items-center gap-2"/>
        </FieldGroup>
    )
}
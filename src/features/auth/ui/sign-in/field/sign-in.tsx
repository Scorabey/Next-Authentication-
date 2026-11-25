'use client'

import { SignInDto } from "@/features/auth"
import { BASE_URL, Button, CustomTooltip, Eye, EyeButton, EyeSlash, Field, FieldGroup, Input, Label, OIDCGroup } from "@/shared"
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
            Email<span className="text-base text-red-400">*</span>
            </Label>
            <CustomTooltip content={<p>Enter your email</p>}>
                <Input
                id="email"
                placeholder="example@gmail.com"
                {...register("email", { required: "Email is required" })}
                />
            </CustomTooltip>
            <p className="text-base text-red-400" style={{ display: errors.email ? "block" : "none" }}>{errors.email ? errors.email.message : ""}</p>
        </Field>
        <Field>
            <Label htmlFor="password">
            Password<span className="text-base text-red-400">*</span>
            </Label>
            <div
            className="flex flex-row gap-1"
            >
            <CustomTooltip content={<p>Enter your password</p>}>
                <Input
                    id="password"
                    type={eye.passwordEye ? "text" : "password"}
                    placeholder="Enter password..."
                    {...register("password", { required: "Password is required" })}
                />
            </CustomTooltip>
            <EyeButton
                variant={"ghost"}
                toolTipContent={<p>See password</p>}
                onClick={() => setEye(prev => ({
                    confirmEye: prev.confirmEye,
                    passwordEye: !prev.passwordEye
                    }))}
                >
                {eye.passwordEye ? <Eye className="stroke-foreground size-4"/> : <EyeSlash className="stroke-foreground size-4"/>}
            </EyeButton>
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
        <p className="text-base text-red-400" style={{ display: errors.form ? "block" : "none" }}>{errors.form ? errors.form.message : ""}</p>
        <OIDCGroup className="w-full flex justify-center items-center gap-2"/>
        </FieldGroup>
    )
}
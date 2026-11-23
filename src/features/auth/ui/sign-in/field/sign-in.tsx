'use client'

import { SignInDto } from "@/features/auth"
import { BASE_URL, Button, Eye, EyeSlash, Field, FieldGroup, Input, Label, OIDCGroup } from "@/shared"
import Link from "next/link"
import { useState } from "react"
import { UseFormReturn } from "react-hook-form"

interface ISignInField {
    form: UseFormReturn<SignInDto>
}

export const SignInField = ({ form }: ISignInField) => {
    const [eye, setEye] = useState({
        passwordEye: false,
        confirmEye: false,
    })

    const { register, formState: { errors } } = form

    return (
        <FieldGroup>
        <Field>
            <Label htmlFor="email">
            Email{errors.email?.type === "required" ? <span className="text-base text-red-400">*</span> : ""}
            </Label>
            <Input
            id="email"
            placeholder="example@gmail.com"
            aria-invalid={errors.email ? "true" : "false"}
            title="Enter your email"
            {...register("email", { required: "Email is required" })}
            />
            <p className="text-base text-red-400" style={{ display: errors.email ? "block" : "none" }}>{errors.email ? errors.email.message : ""}</p>
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
                aria-invalid={errors.password ? "true" : "false"}
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
            <p className="text-base text-red-400" style={{ display: errors.password ? "block" : "none" }}>{errors.password ? errors.password.message : ""}</p>
            <p className="text-base text-red-400" style={{ display: errors.form ? "block" : "none" }}>{errors.form ? errors.form.message : ""}</p>
        </Field>
        <OIDCGroup className="w-full flex justify-center items-center gap-2"/>
        </FieldGroup>
    )
}
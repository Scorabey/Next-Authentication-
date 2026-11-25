'use client'

import { SignUpDto } from "@/features/auth/lib"
import { Button, CustomTooltip, Eye, EyeButton, EyeSlash, Field, FieldGroup, Input, Label, OIDCGroup } from "@/shared"
import { Dispatch, HTMLAttributes, ReactNode, SetStateAction, useState } from "react"
import { UseFormReturn } from "react-hook-form"

interface ISignUpField {
    form: UseFormReturn<SignUpDto>
}

export const SignUpField = ({ form }: ISignUpField) => {
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
                aria-invalid={errors.email ? "true" : "false"}
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
                    aria-invalid={errors.password ? "true" : "false"}
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
                {eye.confirmEye ? <Eye className="stroke-foreground size-4"/> : <EyeSlash className="stroke-foreground size-4"/>}
            </EyeButton>
            </div>
            <p className="text-base text-red-400" style={{ display: errors.password ? "block" : "none" }}>{errors.password ? errors.password.message : ""}</p>
        </Field>
        <Field>
            <Label htmlFor="confirm">
                Confirm<span className="text-base text-red-400">*</span>
            </Label>
            <div
            className="flex flex-row gap-1"
            >
            <CustomTooltip content={<p>Confirm the password</p>}>
                <Input
                    id="confirm"
                    type={eye.confirmEye ? "text" : "password"}
                    placeholder="Confirm password..."
                    aria-invalid={errors.password ? "true" : "false"}
                    {...register("confirm", { required: "Password is required" })}
                />
            </CustomTooltip>
            <EyeButton
                variant={"ghost"}
                toolTipContent={<p>See confirm</p>}
                onClick={() => setEye(prev => ({
                confirmEye: !prev.confirmEye,
                passwordEye: prev.passwordEye
                }))}
            >
                {eye.confirmEye ? <Eye className="stroke-foreground size-4"/> : <EyeSlash className="stroke-foreground size-4"/>}
            </EyeButton>
            </div>
            <p className="text-base text-red-400" style={{ display: errors.confirm ? "block" : "none" }}>{errors.confirm ? errors.confirm.message : ""}</p>
            <p className="text-base text-red-400" style={{ display: errors.form ? "block" : "none" }}>{errors.form ? errors.form.message : ""}</p>
        </Field>
        <OIDCGroup className="w-full flex justify-center items-center gap-2"/>
        </FieldGroup>
    )
}
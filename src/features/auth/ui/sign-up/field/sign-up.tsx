'use client'

import { SignUpDto } from "@/features/auth/lib"
import { CustomTooltip, Eye, EyeButton, EyeSlash, Field, FieldGroup, Input, Label, OIDCGroup } from "@/shared"
import { useState } from "react"
import { Controller, UseFormReturn } from "react-hook-form"

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
                <Controller
                    name="email"
                    control={form.control}
                    rules={{ required: "Email is required" }}
                    render={({ field }) => (
                        <Input
                        id="email"
                        type="email"
                        placeholder="example@gmail.com"
                        aria-invalid={errors.email ? "true" : "false"}
                        {...field}
                        />
                    )}
                />
            </CustomTooltip>
            {errors.email && <p className="text-base text-red-400">{errors.email.message}</p>}
        </Field>
        <Field>
            <Label htmlFor="password">
            Password<span className="text-base text-red-400">*</span>
            </Label>
            <div
            className="flex flex-row gap-1"
            >
            <CustomTooltip content={<p>Enter your password</p>}> 
                <Controller
                    name="password"
                    control={form.control}
                    rules={{ required: "Password is required" }}
                    render={({ field }) => (
                        <Input
                            id="password"
                            type={eye.passwordEye ? "text" : "password"}
                            placeholder="Enter password..."
                            aria-invalid={errors.password ? "true" : "false"}
                            {...field}
                        />
                    )}
                />
            </CustomTooltip>
            <EyeButton
                variant={"ghost"}
                toolTipContent={<p>See password</p>}
                onClick={() => setEye(prev => ({
                    ...prev,
                    passwordEye: !prev.passwordEye
                }))}
            >
                {eye.passwordEye ? <Eye className="stroke-foreground size-4"/> : <EyeSlash className="stroke-foreground size-4"/>}
            </EyeButton>
            </div>
            {errors.password && <p className="text-base text-red-400">{errors.password.message}</p>}
        </Field>
        <Field>
            <Label htmlFor="confirm">
                Confirm<span className="text-base text-red-400">*</span>
            </Label>
            <div
            className="flex flex-row gap-1"
            >
            <CustomTooltip content={<p>Confirm the password</p>}>
                <Controller
                    name="confirm"
                    control={form.control}
                    rules={{ required: "Confirm is required" }}
                    render={({ field }) => (
                        <Input
                            id="password"
                            type={eye.confirmEye ? "text" : "password"}
                            placeholder="Enter confirm..."
                            aria-invalid={errors.confirm ? "true" : "false"}
                            {...field}
                        />
                    )}
                />
            </CustomTooltip>
            <EyeButton
                variant={"ghost"}
                toolTipContent={<p>See confirm</p>}
                onClick={() => setEye(prev => ({
                    ...prev,
                    confirmEye: !prev.confirmEye,
                }))}
            >
                {eye.confirmEye ? <Eye className="stroke-foreground size-4"/> : <EyeSlash className="stroke-foreground size-4"/>}
            </EyeButton>
            </div>
            {errors.confirm && <p className="text-base text-red-400">{errors.confirm.message}</p>}
            {errors.form && <p className="text-base text-red-400">{errors.form.message}</p>}
        </Field>
        <OIDCGroup className="w-full flex justify-center items-center gap-2"/>
        </FieldGroup>
    )
}
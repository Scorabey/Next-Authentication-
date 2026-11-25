'use client'

import { ResetDto } from "@/features/auth/lib"
import { Button, CustomTooltip, Eye, EyeButton, EyeSlash, Field, FieldGroup, Input, Label } from "@/shared"
import { useState } from "react"
import { UseFormReturn } from "react-hook-form"

export const ResetField = ({ form }: { form:UseFormReturn<ResetDto> }) => {
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
                toolTipContent={<p>See password</p>}
                variant={"ghost"}
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
                toolTipContent={<p>See confirm</p>}
                variant={"ghost"}
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
        <p className="text-base text-red-400" style={{ display: errors.form ? "block" : "none" }}>{errors.form ? errors.form.message : ""}</p>
        </FieldGroup>
    )
}
import { SignUpDto } from "@/features/auth/lib"
import { BASE_URL, Button, Eye, EyeSlash, Field, FieldGroup, Input, Label } from "@/shared"
import { UseMutationResult } from "@tanstack/react-query"
import Link from "next/link"
import { useState } from "react"
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
        <FieldGroup>
        <Field>
            <Label htmlFor="email">
            Email{errors.email?.type === "required" ? <span className="text-base text-red-400">*</span> : ""}
            </Label>
            <Input
            id="email"
            placeholder="example@gmail.com"
            aria-invalid={errors.email ? "true" : "false"}
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
        </Field>
        <Field>
            <Label htmlFor="confirm">
                Confirm{errors.email?.type === "required" ? <span className="text-base text-red-400">*</span> : ""}
            </Label>
            <div
            className="flex flex-row gap-1"
            >
            <Input
                id="confirm"
                type={eye.confirmEye ? "text" : "password"}
                placeholder="Confirm password..."
                aria-invalid={errors.password ? "true" : "false"}
                {...register("confirm", { required: "Password is required" })}
            />
            <Button
                variant={"ghost"}
                onClick={() => setEye(prev => ({
                confirmEye: !prev.confirmEye,
                passwordEye: prev.passwordEye
                }))}
            >
                {eye.confirmEye ? <Eye className="stroke-foreground size-4"/> : <EyeSlash className="stroke-foreground size-4"/>}
            </Button>
            </div>
            <p className="text-base text-red-400" style={{ display: errors.confirm ? "block" : "none" }}>{errors.confirm ? errors.confirm.message : ""}</p>
            <p className="text-base text-red-400" style={{ display: errors.form ? "block" : "none" }}>{errors.form ? errors.form.message : ""}</p>
        </Field>
        <Link
            href={`${BASE_URL}/auth/oidc/google/login?redirectTo=http://localhost:3000/ `}
        >
            <Button
            className={"w-full"}
            id="google-auth"
            variant={"default"}
            >
            Sign-up with Google
            </Button>
        </Link>
        </FieldGroup>
    )
}
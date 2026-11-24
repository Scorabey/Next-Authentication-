import { ForgotDto } from "@/features/auth/lib"
import { Field, FieldGroup, Input, Label } from "@/shared"
import { UseFormReturn } from "react-hook-form"

export const ForgotField = ({ form }: { form:UseFormReturn<ForgotDto> }) => {
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
        </FieldGroup>
    )
}
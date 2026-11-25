import { ForgotDto } from "@/features/auth/lib"
import { CustomTooltip, Field, FieldGroup, Input, Label } from "@/shared"
import { UseFormReturn } from "react-hook-form"

export const ForgotField = ({ form }: { form:UseFormReturn<ForgotDto> }) => {
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
        </FieldGroup>
    )
}
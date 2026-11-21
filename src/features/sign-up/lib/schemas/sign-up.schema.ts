import { z } from 'zod';

const signUpSchema = z.object({
    email: z.email(),
    password: z.string().min(12).max(128),
    confirm: z.string().min(12).max(128)
}).refine((d) => d.password === d.confirm, {
    path: ["confirm"],
    message: "Passwords do not match"
})

export type SignUpDto = z.infer<typeof signUpSchema>

export {
    signUpSchema
}
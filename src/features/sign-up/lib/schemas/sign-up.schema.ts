import { z } from 'zod';

const signUpSchema = z.object({
    email: z.email(),
    password: z.string().min(12).max(128)
})

export type SignUpSchema = z.input<typeof signUpSchema>

export {
    signUpSchema
}
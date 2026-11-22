import { z } from 'zod';

const signInSchema = z.object({
    email: z.email(),
    password: z.string().min(12).max(128)
})

export type SignInDto = z.infer<typeof signInSchema>

export {
    signInSchema
}
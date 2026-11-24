import { z } from 'zod';

const resetSchema = z.object({
    password: z.string().min(12).max(128),
    confirm: z.string().min(12).max(128),
    token: z.string()
}).refine((data) => data.password === data.confirm, {
    path: ["confirm"],
    message: "Passwords do not match"
})

export type ResetDto = z.infer<typeof resetSchema>

export {
    resetSchema
}
import { z } from 'zod'

const roleSchema = z.enum(["USER", "ADMIN"])

const userSchema = z.object({
    id: z.string(),
    email: z.email(),
    emailVerified: z.boolean(),
    role: roleSchema,
    updatedAt: z.any(),
    createdAt: z.any()
})

export type Role = z.infer<typeof roleSchema>

export type IUser = z.infer<typeof userSchema>

export {
    roleSchema,
    userSchema
}
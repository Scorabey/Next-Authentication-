import { z } from 'zod';

const forgotSchema = z.object({
    email: z.email(),
})

export type ForgotDto = z.infer<typeof forgotSchema>

export {
    forgotSchema
}
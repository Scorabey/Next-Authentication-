import { z } from 'zod';

const mailSchema = z.object({
    token: z.string(),
})

export type MailDto = z.infer<typeof mailSchema>

export {
    mailSchema
}
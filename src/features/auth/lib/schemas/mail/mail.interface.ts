import { MailDto } from "./mail.schema";

export interface IMailApi {
    verify({ token }: MailDto): Promise<unknown>
    verification(): Promise<unknown>
}
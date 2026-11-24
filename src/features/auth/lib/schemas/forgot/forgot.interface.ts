import { ForgotDto } from "./forgot.schema";

export interface IForgotApi {
    forgot({ email }: ForgotDto): void
}
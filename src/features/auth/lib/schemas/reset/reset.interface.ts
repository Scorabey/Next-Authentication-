import { ResetDto } from "./reset.schema";

export interface IResetApi {
    reset({ password, token }: Omit<ResetDto, "confirm">): void
}
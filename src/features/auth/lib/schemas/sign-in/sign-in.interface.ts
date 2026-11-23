import { IUser } from "@/entities/user";
import { SignInDto } from "./sign-in.schema";

export interface ISignInApi {
    signIn({ email, password }: SignInDto): Promise<IUser>
}
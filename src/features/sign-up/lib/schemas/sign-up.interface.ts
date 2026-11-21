import { IUser } from "@/entities/user";
import { SignUpDto } from "./sign-up.schema";

export interface ISignUpApi {
    signUp({ email, password }: Omit<SignUpDto, "confirm">): Promise<IUser>
}
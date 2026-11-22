import { IUser } from "@/entities/user";
import { SignUpDto } from "@/features/auth";

export interface ISignUpApi {
    signUp({ email, password }: Omit<SignUpDto, "confirm">): Promise<IUser>
}
import axios from "axios"
import { AxiosInstance, AxiosRequestConfig } from "axios"
import { ISignUpApi, SignUpDto } from "@/features/sign-up"
import { IUser } from "@/entities/user"
import { BASE_URL } from "@/shared"

export class SignUpApi
    implements ISignUpApi
{
    private readonly http: AxiosInstance
    private readonly url: string

    constructor(
        config?: AxiosRequestConfig
    ) {
        this.url = "/auth/sign-up"
        this.http = axios.create({ 
            baseURL: BASE_URL, 
            withCredentials: true, 
            ...config 
        })
    }

    signUp({ email, password }: Omit<SignUpDto, "confirm">): Promise<IUser> {
        return this.http.post(this.url, { email, password })
    }
}
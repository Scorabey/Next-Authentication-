import axios from "axios"
import { AxiosInstance, AxiosRequestConfig } from "axios"
import { ISignInApi, SignInDto, SignUpDto } from "@/features/auth"
import { IUser } from "@/entities/user"
import { BASE_URL } from "@/shared"

export class SignInApi
    implements ISignInApi
{
    private readonly http: AxiosInstance
    private readonly url: string

    constructor(
        config?: AxiosRequestConfig
    ) {
        this.url = "/auth/sign-in"
        this.http = axios.create({ 
            baseURL: BASE_URL, 
            withCredentials: true, 
            ...config 
        })
    }

    signIn({ email, password }: SignInDto): Promise<IUser> {
        return this.http.post(this.url, { email, password })
    }
}
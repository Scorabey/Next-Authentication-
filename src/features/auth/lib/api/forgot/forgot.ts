import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import { ForgotDto, IForgotApi } from "../../schemas"
import { BASE_URL } from "@/shared"

export class ForgotApi
    implements IForgotApi
{
    private readonly http: AxiosInstance
    private readonly url: string

    constructor(
        config?: AxiosRequestConfig
    ) {
        this.url = "/auth/password/forgot"
        this.http = axios.create({ 
            baseURL: BASE_URL, 
            withCredentials: true, 
            ...config 
        })
    }

    forgot({ email }: ForgotDto) {
        return this.http.post(this.url, { email })
    }
}
import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import { BASE_URL } from "@/shared"
import { IResetApi, ResetDto } from "../../schemas/reset"

export class ResetApi
    implements IResetApi
{
    private readonly http: AxiosInstance
    private readonly url: string

    constructor(
        config?: AxiosRequestConfig
    ) {
        this.url = "/auth/password/reset"
        this.http = axios.create({ 
            baseURL: BASE_URL, 
            withCredentials: true,
            ...config 
        })
    }

    reset({ password, token }: Omit<ResetDto, "confirm">) {
        return this.http.post(this.url, { password, token })
    }
}
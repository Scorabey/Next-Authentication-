import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import { BASE_URL } from "@/shared"
import { IMailApi, MailDto } from "../../schemas/mail"

export class MailApi
    implements IMailApi
{
    private readonly http: AxiosInstance
    private readonly url: string

    constructor(
        config?: AxiosRequestConfig
    ) {
        this.url = "/auth/email"
        this.http = axios.create({ 
            baseURL: BASE_URL, 
            withCredentials: true, 
            ...config 
        })
    }

    verify({ token }: MailDto): Promise<unknown> {
        return this.http.post(`${this.url}/verify`, { token })
    }
    verification(): Promise<unknown> {
        return this.http.post(`${this.url}/verification`)
    }
}
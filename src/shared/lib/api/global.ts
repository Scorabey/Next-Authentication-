import { type IApi, ISchemas } from "@/shared";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { z } from "zod"

const BASE_URL = `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API_DOMAIN}:${process.env.NEXT_PUBLIC_API_PORT}`

export class GlobalApi<T, TCreate, TUpdate> 
    implements IApi<T, TCreate, TUpdate> 
{
    private readonly http: AxiosInstance

    constructor(
        private readonly url: string,
        private readonly schemas: ISchemas<T, TCreate, TUpdate>,
        config?: AxiosRequestConfig
    ) {
        this.http = axios.create({ baseURL: BASE_URL, ...config })
    }

    async getAll(): Promise<T[]> {
        const { data } = await this.http.get(`${this.url}`)
        return z.array(this.schemas.object).parse(data)
    }

    async getById(id: string): Promise<T> {
        const { data } = await this.http.get(`${this.url}/${id}`)
        return this.schemas.object.parse(data)
    }

    async create(dto: TCreate): Promise<T> {
        const body = this.schemas.create.parse(dto)
        const { data } = await this.http.post(`${this.url}`, body)
        return this.schemas.object.parse(data)
    }

    async update(id: string, dto: TUpdate): Promise<T> {
        const body = this.schemas.update.parse(dto)
        const { data } = await this.http.patch(`${this.url}/${id}`, body)
        return this.schemas.object.parse(data)
    }

    async delete(id: string): Promise<void> {
        await this.http.delete(`${this.url}/${id}`)
    }
}
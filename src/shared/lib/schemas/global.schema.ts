import { ZodType } from 'zod'

export interface IApi<T, TCreate, TUpdate> {
    getAll(): Promise<T[]>
    getById(id: string): Promise<T>
    create(dto: TCreate): Promise<T>
    update(id: string, dto: TUpdate): Promise<T>
    delete(id: string): Promise<void>
}

export interface ISchemas<T, TCreate, TUpdate> {
    object: ZodType<T>
    create: ZodType<TCreate>
    update: ZodType<TUpdate>
}
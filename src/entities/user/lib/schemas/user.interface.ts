export interface IUser {
    id: string
    email: string
    emailVerified: boolean
    role: "USER" | "ADMIN"
    updatedAt: any
    createdAt: any
}
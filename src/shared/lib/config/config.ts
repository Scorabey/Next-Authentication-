type IMode = "onTouched" | "all" | "onBlur" | "onSubmit" | "onChange"

export const BASE_URL = `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API_DOMAIN}:${process.env.NEXT_PUBLIC_API_PORT}`
export const INPUT_MODE: IMode = "onSubmit"
export const TOAST_TIMEOUT = 5 * 1000
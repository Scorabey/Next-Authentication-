import { create } from 'zustand'

interface ITheme {
    theme: "dark" | "light"
    setTheme: () => void 
}

export const useTheme = create<ITheme>((set) => ({
    theme: 'light',
    setTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" }))
}))
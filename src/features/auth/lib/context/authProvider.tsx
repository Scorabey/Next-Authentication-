import { ReactNode, useMemo } from "react";
import { AuthContext } from "./authContext";

interface AuthProviderProps {
    children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
    const value = useMemo(() => ({  }), [])

    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
}
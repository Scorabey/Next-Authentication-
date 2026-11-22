import { useContext } from "react";
import { AuthContext } from "./authContext";

export function useAuth() {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error('useAuth must be using on AuthProvider')
    }

    return context
}
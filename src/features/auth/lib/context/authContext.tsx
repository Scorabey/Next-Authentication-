'use client'

import { createContext } from "react";
import { IAuthContext } from "@/features/auth";

export const AuthContext = createContext<IAuthContext | null>(null)
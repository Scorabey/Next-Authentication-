'use client'

import { createContext } from "react";
import { IAuthContext } from "@/features/auth";

export const SignUpContext = createContext<IAuthContext | null>(null)
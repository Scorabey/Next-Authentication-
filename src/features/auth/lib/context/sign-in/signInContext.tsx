'use client'

import { createContext } from "react";
import { ISignInContext } from "@/features/auth";

export const SignInContext = createContext<ISignInContext | null>(null)
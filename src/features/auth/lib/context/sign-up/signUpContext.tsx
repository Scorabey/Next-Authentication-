'use client'

import { createContext } from "react";
import { ISignUpContext } from "@/features/auth";

export const SignUpContext = createContext<ISignUpContext | null>(null)
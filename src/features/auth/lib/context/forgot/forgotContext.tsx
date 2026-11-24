'use client'

import { createContext } from "react";
import { IForgotContext } from "../../schemas";

export const ForgotContext = createContext<IForgotContext | null>(null)
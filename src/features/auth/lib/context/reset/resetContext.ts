'use client'

import { createContext } from "react";
import { IResetContext } from "../../schemas";

export const ResetContext = createContext<IResetContext | null>(null)
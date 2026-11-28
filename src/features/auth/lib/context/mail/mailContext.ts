'use client'

import { createContext } from "react";
import { IMailContext } from "@/features/auth";

export const MailContext = createContext<IMailContext | null>(null)
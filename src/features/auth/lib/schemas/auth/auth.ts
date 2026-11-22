import { HTMLAttributes, ReactNode } from "react";

export interface buttonProps extends HTMLAttributes<HTMLButtonElement> {
  variant:
    | "default"
    | "destructive"
    | "ghost"
    | "link"
    | "outline"
    | "secondary";
  children: ReactNode;
}
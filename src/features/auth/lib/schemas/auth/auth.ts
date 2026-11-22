import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from "react";
import { SignUpDto } from "../sign-up";
import { UseFormReturn } from "react-hook-form";

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

export interface IAuthContext {
  mutation: UseMutationResult<unknown, AxiosError, Omit<SignUpDto, "confirm">>;
  form: UseFormReturn<SignUpDto>,
  hooks: {
    signUpOpenDialog: boolean,
    setSignUpOpenDialog: Dispatch<SetStateAction<boolean>>
  }
}
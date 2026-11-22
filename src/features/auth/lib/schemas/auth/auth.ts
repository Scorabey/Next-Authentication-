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
  mutation: {
    signUp: UseMutationResult<unknown, AxiosError, Omit<SignUpDto, "confirm">>;
  }
  form: {
    signUp: UseFormReturn<SignUpDto>
  },
  hooks: {
    signUp: {
      signUpOpenDialog: boolean,
      setSignUpOpenDialog: Dispatch<SetStateAction<boolean>>
    }
  }
}
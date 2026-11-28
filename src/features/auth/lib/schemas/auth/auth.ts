import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from "react";
import { SignUpDto } from "../sign-up";
import { UseFormReturn } from "react-hook-form";
import { SignInDto } from "../sign-in";
import { ForgotDto } from "../forgot";
import { ResetDto } from "../reset";
import { MailDto } from "../mail";

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

export interface ISignUpContext {
  mutation: UseMutationResult<unknown, AxiosError, Omit<SignUpDto, "confirm">>;
  form: UseFormReturn<SignUpDto>,
  hooks: {
    signUpOpenDialog: boolean,
    setSignUpOpenDialog: Dispatch<SetStateAction<boolean>>
  }
}

export interface ISignInContext {
  mutation: UseMutationResult<unknown, AxiosError, SignInDto>;
  form: UseFormReturn<SignInDto>,
  hooks: {
    signInOpenDialog: boolean,
    setSignInOpenDialog: Dispatch<SetStateAction<boolean>>
  }
}

export interface IForgotContext {
  mutation: UseMutationResult<unknown, AxiosError, ForgotDto>;
  form: UseFormReturn<ForgotDto>
}

export interface IResetContext {
  mutation: UseMutationResult<unknown, AxiosError, Omit<ResetDto, "confirm">>;
  form: UseFormReturn<ResetDto>
}

export interface IMailContext {
  mutation: {
    verify: UseMutationResult<unknown, AxiosError, MailDto>;
    verification: UseMutationResult<unknown, AxiosError, void>;
  }
}
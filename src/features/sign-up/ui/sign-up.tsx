'use client'

import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  FieldGroup,
  Field,
  Label,
  DialogFooter,
  DialogClose,
  Input,
  Separator,
} from "@/shared";
import { HTMLAttributes, ReactNode } from "react";
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpDto, signUpSchema } from "../lib";

interface buttonProps extends HTMLAttributes<HTMLButtonElement> {
  variant:
    | "default"
    | "destructive"
    | "ghost"
    | "link"
    | "outline"
    | "secondary";
  children: ReactNode;
}

export const SignUp = ({
  className = "",
  children,
  variant = "default",
}: buttonProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpDto>({
    resolver: zodResolver(signUpSchema),
    mode: "onTouched",
    defaultValues: { 
      email: "",
      password: "",
      confirm: ""
     }
  })

  const onSubmit: SubmitHandler<SignUpDto> = (data) => {
    console.log(data)
  }

  return (
    <Dialog>
        <DialogTrigger
          render={
            <Button
              variant={variant}
              className={className}
            >
              {children}
            </Button>
          }
        />
        <DialogContent>
          <form 
            onSubmit={handleSubmit(onSubmit)} 
            className={"flex flex-col gap-4"}
          >
          <DialogHeader className="flex flex-col gap-1">
            <DialogTitle className={"text-xl font-bold"}>
              Create your account
            </DialogTitle>
            <DialogDescription className={"text-sm font-light"}>
              Sign up in less than a minute and get full access to all features.
              No credit card required.
            </DialogDescription>
          </DialogHeader>
          <Separator />
          <FieldGroup>
            <Field>
              <Label htmlFor="email">
                Email{errors.email?.type === "required" ? <span className="text-base text-red-400">*</span> : ""}
              </Label>
              <Input
                id="email"
                placeholder="example@gmail.com"
                aria-invalid={errors.email ? "true" : "false"}
                {...register("email", { required: "Email is required" })}
              />
              <p className="text-base text-red-400" style={{ display: errors.email ? "block" : "none" }}>{errors.email ? errors.email.message : ""}</p>
            </Field>
            <Field>
              <Label htmlFor="password">
                Password{errors.password?.type === "required" ? <span className="text-base text-red-400">*</span> : ""}
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password..."
                aria-invalid={errors.password ? "true" : "false"}
                {...register("password", { required: "Password is required" })}
              />
              <p className="text-base text-red-400" style={{ display: errors.password ? "block" : "none" }}>{errors.password ? errors.password.message : ""}</p>
            </Field>
            <Field>
              <Label htmlFor="confirm">
                Confirm{errors.email?.type === "required" ? <span className="text-base text-red-400">*</span> : ""}
              </Label>
              <Input
                id="confirm"
                type="password"
                placeholder="Confirm password..."
                aria-invalid={errors.password ? "true" : "false"}
                {...register("confirm", { required: "Password is required" })}
              />
              <p className="text-base text-red-400" style={{ display: errors.confirm ? "block" : "none" }}>{errors.confirm ? errors.confirm.message : ""}</p>
            </Field>
            <p className="text-base text-red-400" style={{ display: errors.form ? "block" : "none" }}>{errors.form ? errors.form.message : ""}</p>
            <Button
              id="google-auth"
              variant={"default"}
            >
              Sign-up with Google
            </Button>
          </FieldGroup>
          <Separator />
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Close</Button>} />
            <Button type="submit">Sign-up</Button>
          </DialogFooter>
          </form>
        </DialogContent>
    </Dialog>
  );
};

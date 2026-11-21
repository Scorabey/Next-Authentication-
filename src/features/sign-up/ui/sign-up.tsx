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
  Spinner,
  Eye,
  EyeSlash,
} from "@/shared";
import { HTMLAttributes, ReactNode, useState } from "react";
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpApi, SignUpDto, signUpSchema } from "@/features/sign-up";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

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

const signUpApi = new SignUpApi()

export const SignUp = ({
  className = "",
  children,
  variant = "default",
}: buttonProps) => {
  const queryClient = useQueryClient()
  const [open, setOpen] = useState<boolean>(false)
  const [eye, setEye] = useState({
    passwordEye: false,
    confirmEye: false,
  })

  const {
    register,
    handleSubmit,
    reset,
    setError,
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

  const { mutate, isPending } = useMutation<unknown, AxiosError, Omit<SignUpDto, "confirm">>({
    mutationFn: (dto: Omit<SignUpDto, "confirm">) => signUpApi.signUp(dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
      closeDialog()
    },
    onError: (error) => {
      switch(error.response?.status) {
        case 409:
          setError("email", {
            type: "server",
            message: "Email already exist"
          })
          break
        case 429:
          setError("form", {
            type: "server",
            message: "Too many request"
          })
          break
        default:
          setError("form", {
            type: "server",
            message: "Something went wrong..."
          })
      }
    }
  })

  const onSubmit: SubmitHandler<SignUpDto> = (data) => {
    mutate({
      email: data.email,
      password: data.password
    })
  }

  const closeDialog = () => {
    setOpen(false)
    reset()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
              <div
                className="flex flex-row gap-1"
              >
                <Input
                  id="password"
                  type={eye.passwordEye ? "text" : "password"}
                  placeholder="Enter password..."
                  aria-invalid={errors.password ? "true" : "false"}
                  {...register("password", { required: "Password is required" })}
                />
                <Button
                  variant={"ghost"}
                  onClick={() => setEye(prev => ({
                    confirmEye: prev.confirmEye,
                    passwordEye: !prev.passwordEye
                  }))}
                >
                  {eye.passwordEye ? <Eye className="stroke-foreground size-4"/> : <EyeSlash className="stroke-foreground size-4"/>}
                </Button>
              </div>
              <p className="text-base text-red-400" style={{ display: errors.password ? "block" : "none" }}>{errors.password ? errors.password.message : ""}</p>
            </Field>
            <Field>
              <Label htmlFor="confirm">
                Confirm{errors.email?.type === "required" ? <span className="text-base text-red-400">*</span> : ""}
              </Label>
              <div
                className="flex flex-row gap-1"
              >
                <Input
                  id="confirm"
                  type={eye.confirmEye ? "text" : "password"}
                  placeholder="Confirm password..."
                  aria-invalid={errors.password ? "true" : "false"}
                  {...register("confirm", { required: "Password is required" })}
                />
                <Button
                  variant={"ghost"}
                  onClick={() => setEye(prev => ({
                    confirmEye: !prev.confirmEye,
                    passwordEye: prev.passwordEye
                  }))}
                >
                  {eye.confirmEye ? <Eye className="stroke-foreground size-4"/> : <EyeSlash className="stroke-foreground size-4"/>}
                </Button>
              </div>
              <p className="text-base text-red-400" style={{ display: errors.confirm ? "block" : "none" }}>{errors.confirm ? errors.confirm.message : ""}</p>
              <p className="text-base text-red-400" style={{ display: errors.form ? "block" : "none" }}>{errors.form ? errors.form.message : ""}</p>
            </Field>
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
            <Button 
              type="submit"
              variant={"default"}
              disabled={isPending}
              className={isPending ? "cursor-progress" : ""}
            >
              {isPending ? <Spinner/> : 'Sign-Up'}
            </Button>
          </DialogFooter>
          </form>
        </DialogContent>
    </Dialog>
  );
};

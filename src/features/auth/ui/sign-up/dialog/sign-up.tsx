'use client'

import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Separator,
  Spinner,
} from "@/shared";
import { type SubmitHandler } from 'react-hook-form'
import { SignUpDto, useSignUp } from "@/features/auth";
import { buttonProps } from "@/features/auth";
import { SignUpField } from "../field";

export const SignUp = ({
  className = "",
  children,
  variant = "default",
}: buttonProps) => {
  const {
    mutation,
    form,
    hooks
  } = useSignUp()

  const { handleSubmit } = form
  const { mutate, isPending } = mutation
  const { setSignUpOpenDialog, signUpOpenDialog } = hooks

  const onSubmit: SubmitHandler<SignUpDto> = (data) => {
    mutate({
      email: data.email,
      password: data.password
    })
  }

  return (
    <Dialog open={signUpOpenDialog} onOpenChange={setSignUpOpenDialog}>
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
            <SignUpField form={form}/>
          <Separator />
          <DialogFooter>
            <DialogClose render={<Button variant="ghost" title="Close dialog window">Close</Button>} />
            <Button 
              type="submit"
              variant={"default"}
              title="Sign-up application"
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

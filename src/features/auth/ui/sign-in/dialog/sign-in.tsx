'use client'

import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Spinner } from "@/shared";
import { buttonProps, SignInDto, useSignIn } from "@/features/auth";
import { Separator } from "@/shared";
import { SignInField } from "../field";
import { SubmitHandler } from "react-hook-form";

export const SignIn = ({
  className = "",
  children,
  variant = "default",
  title,
}: buttonProps) => {
  const { form, hooks, mutation } = useSignIn()
  const { signInOpenDialog, setSignInOpenDialog } = hooks
  const { isPending, mutate } = mutation
  const { handleSubmit } = form

  const onSubmit: SubmitHandler<SignInDto> = (data) => {
    mutate({
      email: data.email,
      password: data.password
    })
  }
  
  return (
    <Dialog open={signInOpenDialog} onOpenChange={setSignInOpenDialog}>
        <DialogTrigger
          render={
            <Button
              variant={variant}
              className={className}
              title={title}
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
            <DialogHeader>
              <DialogTitle className={"text-xl font-bold"}>
                Welcome back
              </DialogTitle>
              <DialogDescription className={"text-sm font-light"}>
                Sign in to pick up where you left off. Enter your email and password to access your account.
              </DialogDescription>
            </DialogHeader>
            <Separator/>
            <SignInField form={form} setSignInOpenDialog={setSignInOpenDialog}/>
            <Separator/>
            <DialogFooter>
              <Button variant={"ghost"} onClick={() => setSignInOpenDialog(false)} title="Close dialog window">Close</Button>
              <Button
                type="submit"
                variant={"default"}
                title="Sign-in application"
                disabled={isPending}
                className={isPending ? "cursor-progress" : ""}
              >
                {isPending ? <Spinner/> : 'Sign-In'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
    </Dialog>
  );
}
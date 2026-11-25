'use client'

import { Button, CustomTooltip, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Spinner } from "@/shared";
import { buttonProps, SignInDto, useSignIn } from "@/features/auth";
import { Separator } from "@/shared";
import { SignInField } from "../field";
import { SubmitHandler } from "react-hook-form";

export const SignIn = ({
  className = "",
  children,
  variant = "default",
  ...props
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
              {...props}
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
              <CustomTooltip content={<p>Close dialog window</p>}>
                <Button variant={"ghost"} onClick={() => setSignInOpenDialog(false)}>Close</Button>
              </CustomTooltip>
              <CustomTooltip content={<p>Sign-in application</p>}>
                <Button
                  type="submit"
                  variant={"default"}
                  disabled={isPending}
                  className={isPending ? "cursor-progress" : ""}
                >
                  {isPending ? <Spinner/> : 'Sign-In'}
                </Button>
              </CustomTooltip>
            </DialogFooter>
          </form>
        </DialogContent>
    </Dialog>
  );
}
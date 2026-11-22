'use client'

import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger, FieldGroup } from "@/shared";
import { buttonProps } from "@/features/auth";
import { useState } from "react";

export const SignIn = ({
  className = "",
  children,
  variant = "default",
}: buttonProps) => {
  const [open, setOpen] = useState<boolean>(false)
  
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
          <DialogHeader></DialogHeader>
          <FieldGroup></FieldGroup>
          <DialogFooter>
            <Button variant={"ghost"} onClick={() => setOpen(false)}>Close</Button>
            <Button variant={"default"}>Sign-In</Button>
          </DialogFooter>
        </DialogContent>
    </Dialog>
  );
}
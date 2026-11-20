import { Button, Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription, FieldGroup, Field, Label, DialogFooter, DialogClose, Input, Separator } from '@/shared'
import { HTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'

interface buttonProps extends HTMLAttributes<HTMLButtonElement> {
    variant: "default" | "destructive" | "ghost" | "link" | "outline" | "secondary"
    children: ReactNode
}

export const SignUp = ({ className = "", children, variant = "default" }: buttonProps) => {
    return (
        <Dialog>
            <form>
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
                <DialogContent
                    className={"flex flex-col gap-4"}
                >
                    <DialogHeader
                        className='flex flex-col gap-1'
                    >
                        <DialogTitle
                            className={"text-xl font-bold"}
                        >
                            Create your account
                        </DialogTitle>
                        <DialogDescription
                            className={"text-sm font-light"}
                        >
                            Sign up in less than a minute and get full access to all features. No credit card required.
                        </DialogDescription>
                    </DialogHeader>
                    <Separator/>
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" placeholder='example@gmail.com' defaultValue="" />
                        </Field>
                        <Field>
                        <Label htmlFor="password">Password</Label>
                            <Input id="password" name="password" placeholder='Enter password...' defaultValue="" />
                            </Field>
                        <Field>
                            <Label htmlFor="confirm">Confirm</Label>
                            <Input id="confirm" name="confirm" placeholder='Confirm password...' defaultValue="" />
                        </Field>
                        <Button>
                            Sign-up with Google
                        </Button>
                    </FieldGroup>
                    <Separator/>
                    <DialogFooter>
                        <DialogClose render={<Button variant="outline">Close</Button>} />
                        <Button type="submit">Sign-up</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
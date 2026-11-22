'use client'

import { Button, Separator } from "@/shared"
import { cn } from "@/shared/lib/utils";

interface IGlobalErrorProps {
    error: Error
    retry: () => void
}

export default function GlobalError({ error, retry }: IGlobalErrorProps) {
    return (
        <html
            className={cn("h-full", "antialiased", "font-sans")}
        >
            <body
                className="min-h-full min-w-full flex flex-col items-center justify-center"
            >
                <main
                    className="flex flex-col gap-8"
                >
                    <span
                        className="flex flex-row justify-center items-center gap-4"
                    >
                        <h2
                            className="text-3xl"
                        >
                            {error.name.toUpperCase()}
                        </h2>
                        <Separator
                            orientation="vertical"
                        />
                        <h2
                            className="text-4xl"
                        >
                            {error.message}
                        </h2>
                    </span>
                    <Button
                        variant={"default"}
                        onClick={() => retry()}
                    >
                        Try again
                    </Button>
                </main>
            </body>
        </html>
    )
}
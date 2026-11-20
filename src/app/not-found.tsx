import Link from "next/link"
import { Button, Separator } from "@/shared"

export default function NotFound() {
    return (
        <div
            className="table h-screen w-full"
        >
            <main
                className="flex flex-col gap-4 min-w-full min-h-screen items-center justify-center"
            >
                <span
                    className="flex flex-row gap-4 justify-center"
                >
                    <h1
                        className="text-4xl font-normal"
                    >
                        404
                    </h1>
                    <Separator
                        orientation="vertical"
                    />
                    <h2
                        className="text-3xl font-normal"
                    >
                        Could not found page!
                    </h2>
                </span>
                <div
                    className="flex justify-center"
                >
                    <Link
                        href={'/'}
                    >
                        <Button
                            variant={"default"}
                            className="cursor-pointer"
                        >
                            <h1
                                className="text-2xl font-medium"
                            >
                                Home
                            </h1>
                        </Button>
                    </Link>
                </div>
            </main>
        </div>
    )
}
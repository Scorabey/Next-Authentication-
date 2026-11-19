import Link from "next/link"
import { Button, Separator } from "@/shared"

export default function NotFound() {
    return (
        <div
            className="table h-screen w-full"
        >
            <main
                className="table-cell align-middle text-center mx-auto"
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
                            variant={"link"}
                            className="cursor-pointer py-8"
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
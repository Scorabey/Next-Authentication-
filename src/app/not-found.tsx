import Link from "next/link"
import { Button, Separator } from "@/shared"

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center gap-4">
      <div className="flex flex-row items-center gap-4">
        <h1 className="text-4xl font-normal">404</h1>
        <Separator orientation="vertical" className="h-10" />
        <h2 className="text-3xl font-normal">Page not found</h2>
      </div>
      <Button className="cursor-pointer">
        <Link href="/" className="text-2xl font-medium">
          Home
        </Link>
      </Button>
    </main>
  )
}
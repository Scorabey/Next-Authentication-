import { Suspense } from "react"
import ResetContent from "./reset-content"
export default function ResetPage({ searchParams }: { searchParams: Promise<{ token?: string }> }) {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <ResetContent searchParams={searchParams}/>
        </Suspense>
    )
}
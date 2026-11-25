import { Suspense } from "react";
import MailContent from "./mail-content";

export default function MailPage({ searchParams }: { searchParams: Promise<{ token?: string }> }) {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <MailContent searchParams={searchParams}/>
        </Suspense>
    )
}
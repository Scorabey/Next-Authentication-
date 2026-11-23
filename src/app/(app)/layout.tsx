import { BurgerMenu, Header } from "@/widgets";
import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
    return (
        <>
        <Header/>
        <BurgerMenu/>
        <main className="pt-20">
            {children}
        </main>
        </>
    )
}
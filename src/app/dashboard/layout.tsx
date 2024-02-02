import { PropsWithChildren } from "react";
import { LeftIconNav } from "./_component/_navigation/left.icon.nav";

export default function Layout({ children }: PropsWithChildren){
    return(
        <main className="flex flex-row">
            <aside>
                <LeftIconNav/>
            </aside>
            <section>
                {children}
            </section>
        </main>
    )
}
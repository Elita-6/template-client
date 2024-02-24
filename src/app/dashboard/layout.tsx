import { PropsWithChildren } from "react";
import { LeftIconNav } from "./_components/_navigation/left.icon.nav";
import TopBar from "./_components/_navigation/top.bar";

export default function DashLayout({ children }: PropsWithChildren){
    return(
        <main className="flex flex-row max-h-screen overflow-y-hidden">
            <aside>
                <LeftIconNav/>
            </aside>
            <section className="flex flex-col w-full">
                <div className="flex flex-col w-full justify-end">
                    <TopBar/>
                </div>
                <div className="">
                    {children}
                </div>
            </section>
        </main>
    )
}

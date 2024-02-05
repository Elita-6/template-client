import { PropsWithChildren } from "react";
import LeftNav from './_components/_navigation/left.nav';
import {TabList} from "@/app/dashboard/workspace/_components/tabs/tab-list";
import WorkspaceTitle from "@/app/dashboard/workspace/_components/title/workspace.title";


export default function Layout({children}:PropsWithChildren){
    return(
        <main className="flex flex-row">
            <aside>
                <LeftNav/>
            </aside>
            <section className='w-full'>
                {children}
            </section>
        </main>
    )
}
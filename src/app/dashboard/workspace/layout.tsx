import { PropsWithChildren } from "react";
import LeftNav from './_components/_navigation/left.nav';

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
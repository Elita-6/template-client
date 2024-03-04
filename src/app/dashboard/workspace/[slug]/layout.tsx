import {Fragment } from "react";
import WorkspaceTitle from "@/app/dashboard/workspace/_components/title/workspace.title";
import BottomTabList from "@/app/dashboard/workspace/_components/tabs/bottom.tab-list";



export default function Layout({children, params}:{children:React.ReactNode, params: {slug: string}}){
    return (
        <Fragment>
            <div className="px-12">
                <WorkspaceTitle workspaceId={params.slug} />
                <BottomTabList />
            </div>

            <section className='w-full h-full  bg-input px-5'>
                {children}
            </section >
        </Fragment>
    )
}

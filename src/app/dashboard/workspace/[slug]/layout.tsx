import {Fragment , PropsWithChildren} from "react";
import WorkspaceTitle from "@/app/dashboard/workspace/_components/title/workspace.title";
import {TabList} from "@/app/dashboard/workspace/_components/tabs/tab-list";
import FilterBtn from "@/app/dashboard/workspace/_components/button/filter.btn";
import BottomTabList from "@/app/dashboard/workspace/_components/tabs/bottom.tab-list";

export default function Layout({children, params}:{children:React.ReactNode, params: {slug: string}}){
    return (
        <Fragment>
            <div className="px-12">
                <WorkspaceTitle workspaceId={params.slug} />
                <BottomTabList />
            </div>

            <section className='w-full h-full bg-input px-12'>
                <div className=" w-full  flex justify-between py-4">
                    <TabList />
                    <FilterBtn />
                </div>
                {children}
            </section >
        </Fragment>
    )
}
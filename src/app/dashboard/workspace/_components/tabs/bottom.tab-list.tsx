"use client"
import BottomTab from "@/app/dashboard/workspace/_components/tabs/bottom.tab";
import {usePathname , useRouter , useSearchParams} from "next/navigation";

export default  function BottomTabList() {
    const {replace} = useRouter()
    const searchParams = useSearchParams();
    const selectedTab = new URLSearchParams(searchParams).get('section')
    const pathname = usePathname()
    const handleCLick = (section: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('section',section);
        replace(`${pathname}?${params.toString()}`)
    };

    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
                <BottomTab isActive={true} label="Tasks"  onClick={() => handleCLick("tasks")} />
                <BottomTab isActive={false} label="Files" onClick={() => handleCLick("files")} />
                <BottomTab isActive={false} label="Overview" onClick={() => handleCLick("overview")} />
            </ul>
        </div>

    )
}

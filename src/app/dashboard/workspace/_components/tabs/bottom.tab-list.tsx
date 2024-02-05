import BottomTab from "@/app/dashboard/workspace/_components/tabs/bottom.tab";

export default  function BottomTabList() {
    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
                <BottomTab isActive={true} label="Tasks" />
                <BottomTab isActive={false} label="Files" />
                <BottomTab isActive={false} label="Overview" />
            </ul>
        </div>

    )
}
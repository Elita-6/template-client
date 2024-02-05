"use client"
import {HistoryIcon , KanbanIcon} from "lucide-react";
import {TabItem} from "@/app/dashboard/workspace/_components/tabs/tabs";

export function TabList(){
    return (
        <div className="flex justify-between  gap-3">
            <TabItem label="Kanban" icon={<KanbanIcon />} onClick={() => {}} />
            <TabItem label="History" icon={<HistoryIcon />} onClick={() => {}} />
        </div>
    )
}
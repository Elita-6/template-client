"use client"
import KanbanContainer from "@/app/dashboard/workspace/_components/kanban/kanban_container";
import {useSearchParams} from "next/navigation";
import Overview from "@/app/dashboard/workspace/(task_overview)/components/view/overview";


export default function WorkspaceDetails({params}:{params:{slug:string}}){
    const searchParams = useSearchParams();
    const section = new URLSearchParams(searchParams).get('section')
    const currentPage = () =>{
        switch(section) {
            case "tasks":
                return <KanbanContainer />
            case "files":
                break
            case "overview":
                return <Overview />
            default:
                return <KanbanContainer />
        }
    }
    return(
        <div className="h-full">
            {currentPage()}
        </div>
    )
}

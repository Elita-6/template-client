import KanbanContainer from "@/app/dashboard/workspace/_components/kanban/kanban_container";


export default function WorkspaceDetails({params}:{params:{slug:string}}){

    return(
        <div className="">
            <KanbanContainer/>
        </div>
    )
}
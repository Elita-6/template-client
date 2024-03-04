"use client"
import React from 'react';
import KanbanContainer from "@/app/dashboard/workspace/_components/kanban/kanban_container";
import Overview from "@/app/dashboard/workspace/(task_overview)/components/view/overview";

interface Props{
    section:String
}
const SlugContainer = (props:Props) => {
    const currentPage = () =>{
        switch(props.section) {
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
};

export default SlugContainer;
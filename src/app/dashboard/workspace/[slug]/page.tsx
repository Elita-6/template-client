'use client'
import {TaskCard} from "@/app/dashboard/workspace/_components/kanban/task_card";
import {ButtonAdd} from "@/app/dashboard/workspace/_components/button/button_add";
import {allTasks} from "@/app/dashboard/_constant/data.example";
import {ITaskGroup} from "@/app/managment/_lib/_type/task.types";
import {useState} from "react";
import CreateTaskModal from "@/app/dashboard/workspace/_components/modal/create_task_modal";
import RoundedIndicator from "@/app/dashboard/workspace/_components/kanban/rounded_indicator";
import Card from "@/app/dashboard/workspace/(task_overview)/components/card/card";



export default function WorkspaceDetails({params}:{params:{slug:string}}){
    const HandleClick = ()=>{
        setIsOPen(oldValue=>!oldValue)
    }
    const [isOpen,setIsOPen] = useState<boolean>(false)
    return(
        <div className="">
            <div className="grid grid-cols-6">
                <Card />
            </div>
        </div>
    )
}
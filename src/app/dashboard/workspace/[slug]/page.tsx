'use client'
import {TaskCard} from "@/app/dashboard/workspace/_components/kanban/task_card";
import {ButtonAdd} from "@/app/dashboard/workspace/_components/button/button_add";
import {allTasks} from "@/app/dashboard/_constant/data.example";
import {ITaskGroup} from "@/app/managment/_lib/_type/task.types";
import {useState} from "react";
import CreateTaskModal from "@/app/dashboard/workspace/_components/modal/create_task_modal";


export default function WorkspaceDetails({params}:{params:{slug:string}}){
    const HandleClick = ()=>{
        setIsOPen(oldValue=>!oldValue)
    }
    const [isOpen,setIsOPen] = useState<boolean>(false)
    return(
        <div className="">
            {
                isOpen && (
                    <CreateTaskModal HandleClick={HandleClick}/>
                )
            }
            <div className="space-y-5 w-full">
                <div className='bg-[#e6eaf042] w-full py-5 space-y-5 '>
                    <div className='flex w-full flex-wrap justify-between '>
                        {
                            allTasks.map((value:ITaskGroup,key)=>(
                                    <div className='w-[30%] flex flex-col space-y-10' key={key}>
                                        <div className='flex flex-col space-y-3'>
                                            <div className='flex  space-x-2 items-center'>
                                                <div className={`bg-[#${value.color}]`}/>
                                                <span className='text-sm opacity-75'>{value.status} </span>
                                            </div>
                                            <ButtonAdd HandleClick={HandleClick}/>
                                        </div>
                                        {
                                            value.tasks.map((value,key:number)=>
                                                <TaskCard task={value} key={key}/>
                                            )
                                        }
                                    </div>
                                )
                            )
                        }
                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </div>
    )
}
'use client'
import React, {useState} from 'react';
import CreateTaskModal from "@/app/dashboard/workspace/_components/modal/create_task_modal";
import {allTasks} from "@/app/dashboard/_constant/data.example";
import {ITaskGroup} from "@/app/managment/_lib/_type/task.types";
import RoundedIndicator from "@/app/dashboard/workspace/_components/kanban/rounded_indicator";
import {ButtonAdd} from "@/app/dashboard/workspace/_components/button/button_add";
import {TaskCard} from "@/app/dashboard/workspace/_components/kanban/task_card";
import {useWorkspaceDetailsStore} from "@/app/state/global_state";

const KanbanContainer = () => {
    const HandleClick = ()=>{
        setIsOPen(oldValue=>!oldValue)
    }
    const taskDetails = useWorkspaceDetailsStore((state)=>state.taskDetails)
    const [isOpen,setIsOPen] = useState<boolean>(false)
    return (
        <div>
            {
                isOpen && (
                    <CreateTaskModal HandleClick={HandleClick}/>
                )
            }
            <div className="space-y-5 w-full h-full">
                <div className='bg-[#e6eaf042] w-full py-5 space-y-5 '>
                    <div className='flex w-full flex-wrap justify-between '>
                        {
                            taskDetails.map((value:ITaskGroup,key)=>(
                                    <div className='w-[30%] flex flex-col space-y-6' key={key}>
                                        <div className='flex flex-col space-y-3'>
                                            <div className='flex  space-x-2 items-center'>
                                                <RoundedIndicator color={value.color}/>
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
    );
};

export default KanbanContainer;

'use client'
import {TaskCard} from "@/app/dashboard/workspace/_components/kanban/task_card";
import {ButtonAdd} from "@/app/dashboard/workspace/_components/button/button_add";


export default function WorkspaceDetails({params}:{params:{slug:string}}){
    const HandleClick = ()=>{
    }
    return(
        <div className="">
            <div className="space-y-5 w-full">
                <div className='bg-[#e6eaf042] w-full py-5 space-y-5 '>
                    <div className='flex w-full flex-wrap justify-between '>
                        <div className='w-[30%] flex flex-col space-y-10'>
                            <div className='flex flex-col space-y-3'>
                                <div className='flex  space-x-2 items-center'>
                                    <div className='bg-[#f6e549] rounded-full w-2 h-2'/>
                                    <span className='text-sm opacity-75'>Waiting</span>
                                </div>
                                <ButtonAdd HandleClick={HandleClick}/>
                            </div>
                            <TaskCard/>
                        </div>
                        <div className='w-[30%] flex flex-col space-y-10'>
                            <div className='flex flex-col space-y-3'>
                                <div className='flex  space-x-2 items-center'>
                                    <div className='bg-[#f6e549] rounded-full w-2 h-2'/>
                                    <span className='text-sm opacity-75'>Waiting</span>
                                </div>
                                <ButtonAdd HandleClick={HandleClick}/>
                            </div>
                            <TaskCard/>
                        </div>
                        <div className='w-[30%] flex flex-col space-y-10'>
                            <div className='flex flex-col space-y-3'>
                                <div className='flex  space-x-2 items-center'>
                                    <div className='bg-[#f6e549] rounded-full w-2 h-2'/>
                                    <span className='text-sm opacity-75'>Waiting</span>
                                </div>
                                <ButtonAdd HandleClick={HandleClick}/>
                            </div>
                            <TaskCard/>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </div>
    )
}
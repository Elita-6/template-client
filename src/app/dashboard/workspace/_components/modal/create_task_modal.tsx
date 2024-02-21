'use client'
import React from 'react';
import { MdOutlineClose } from "react-icons/md";
import TaskForm from "@/app/dashboard/workspace/_components/form/task_form";
interface Props{
    HandleClick: ()=>void
}

const CreateTaskModal = (props:Props) => {
    return (
        <div className='overlay ' onClick={props.HandleClick}>
            <div className='central flex flex-col px-4 py-2 space-y-3' onClick={(e)=>e.stopPropagation()}>
                <div className='flex justify-end w-full'>
                    <button onClick={props.HandleClick}>
                        <MdOutlineClose className='text-xl'/>
                    </button>
                </div>
                <h3 className='text-xl font-semibold '>Create Task</h3>
                <TaskForm/>
            </div>
        </div>
    );
};

export default CreateTaskModal;
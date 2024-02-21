import React from 'react';
import {MdOutlineClose} from "react-icons/md";
import UserItem from "@/app/dashboard/workspace/_components/drawer/user_item";


interface Props{
    HandleClick: ()=>void
}
const AssignationModal = (props:Props) => {
    return (
        <div className='overlay-a ' onClick={props.HandleClick}>
            <div className='central-a flex flex-col px-4 py-2 space-y-3' onClick={(e)=>e.stopPropagation()}>
                <div className='flex justify-end w-full'>
                    <button onClick={props.HandleClick}>
                        <MdOutlineClose className='text-xl'/>
                    </button>
                </div>
                <div className='space-y-2'>
                    <input type='text'  placeholder='Search by name, email'
                           className='outline-none p-2 input '  />
                    <UserItem  email={''} firstname={''} lastname={''} profile={''} userId={''}/>
                </div>
            </div>
        </div>
    );
};

export default AssignationModal;
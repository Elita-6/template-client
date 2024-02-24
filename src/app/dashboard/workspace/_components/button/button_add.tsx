'use client'
import * as React from 'react';
import { IoAddOutline } from "react-icons/io5";

type Props = {
    HandleClick: ()=> void
};
export const ButtonAdd = (props: Props) => {
    return (
        <button onClick={props.HandleClick} className=' rounded-lg flex justify-center border  border-[#E2E8F0] bg-white w-full p-3'>
            <IoAddOutline/>
        </button>
    );
};
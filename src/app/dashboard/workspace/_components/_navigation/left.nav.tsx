'use client'
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons";
import InputField from "../input/input.field";
import LinkList from './link.list';
import {useState} from "react";
import CreateWorkspaceModal from "@/app/dashboard/workspace/_components/modal/create_workspace_modal";

export default function LeftNav(){
    const HandleClick = ()=>{
        setIsOPen(oldValue=>!oldValue)
    }
    const [isOpen,setIsOPen] = useState<boolean>(false)
    return(
        <>
            {
                isOpen && (
                    <CreateWorkspaceModal HandleClick={HandleClick}/>
                )
            }
            <div className="flex flex-col space-y-1 w-72 px-1 border-r-2 border-gray-300 border-opacity-50 h-screen">
                <div className="flex flex-row justify-between">
                    <h2 className="text-lg">Workspace</h2>
                    <Button size="icon" variant="outline" onClick={HandleClick}>
                        <PlusIcon/>
                    </Button>
                </div>
                <InputField name="search" placeholder="Search" type="search" iconStart={<MagnifyingGlassIcon style={{width:23, height:23, color:"#555a"}}/>} onChanged={()=>console.log("c")} style="bg-gray-300 py-5 bg-opacity-60 text-lg text-opacity-40"/>
                <LinkList/>
            </div>
        </>
    )
}
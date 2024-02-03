'use client'
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon, PlusIcon, ValueIcon, VercelLogoIcon } from "@radix-ui/react-icons";
import InputField from "../input/input.field";
import { workSpaces } from "@/app/dashboard/_constant/data.example";
import LinkNav from "./link.nav";

export default function LeftNav(){
    return(
        <div className="flex flex-col space-y-1 w-64 px-1 border-r-2 border-gray-300 border-opacity-50 h-screen">
            <div className="flex flex-row justify-between">
                <h2 className="text-lg">Workspace</h2>
                <Button size="icon" variant="outline">
                    <PlusIcon/>
                </Button>
            </div>
            <InputField name="search" placeholder="Search" type="search" iconStart={<MagnifyingGlassIcon style={{width:23, height:23, color:"#555a"}}/>} onChanged={()=>console.log("c")} style="bg-gray-300 py-5 bg-opacity-60 text-lg text-opacity-40"/>
            <div className="flex flex-col pt-3 space-y-0.5">
                {
                    workSpaces.map((ws, i) =>(
                        <LinkNav href={`/dashboard/workspace/${ws.workSpaceId}`} linkLabel={ws.workspaceName} key={i} bullet={(i+1)%2!==0?<ValueIcon style={{color:'#7e9', width:18, height:18}}/>:<VercelLogoIcon style={{color:"#d8b", width:18, height:18}}/>}/>
                    ))
                }
            </div>
        </div>
    )
}
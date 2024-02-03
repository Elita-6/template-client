
import {ValueIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";
import {EnvelopeClosedIcon} from "@radix-ui/react-icons";
import {Avatar, AvatarGroup} from "@nextui-org/react";
import { CiFilter } from "react-icons/ci";



export default function WorkspaceDetails({params}:{params:{slug:string}}){
    return(
        <div className="space-y-5 px-6 w-full">
                <div className='flex px-5 items-center space-x-2  font-[600em] text-2xl'>
                    <ValueIcon style={{width:18, height:18}} color="#00BFA5"/>
                    <h3>Team Dashboard App {params.slug}</h3>
                </div>
                <div className='px-5 flex justify-between w-full '>
                    <div className='flex space-x-5'>
                        <Button >
                            Chat
                        </Button>
                        <Button  >
                            Files
                        </Button>
                    </div>
                    <div>
                        <AvatarGroup isBordered max={3} total={10}>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                        </AvatarGroup>
                    </div>
                </div>
            <div className='bg-[#e6eaf042] w-full p-5 space-y-5 '>
                <div className='flex justify-between w-full'>
                    <div className='flex space-x-5'>
                        <Button >
                            <EnvelopeClosedIcon/>
                            <span className='pl-2'>Kanban</span>
                        </Button>
                        <Button>
                            <EnvelopeClosedIcon/>
                            <span className='pl-2'>History</span>
                        </Button>
                    </div>
                    <div className='flex   space-x-2'>
                        <CiFilter size={25}/>
                        <span>Filter</span>
                    </div>
                </div>
                <div className='flex '>
                    <div className=''>
                        <div className='flex space-x-2 items-center'>
                            <div className='bg-[#f6e549] rounded-full w-2 h-2'/>
                            <span className='text-sm opacity-75'>Waiting</span>
                        </div>
                        <button>

                        </button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
'use client'
import {StarIcon , ValueIcon , VercelLogoIcon} from "@radix-ui/react-icons";
import {useFetchTaskList} from "@/app/managment/_hooks/use_fetch_task";
import {useWorkspaceDetailsStore} from "@/app/state/global_state";


export default function WorkspaceTitle({workspaceId}: { workspaceId: string}) {
    const {isLoading,data} = useFetchTaskList(workspaceId)
    const workspaceTitle = useWorkspaceDetailsStore((state)=>state.workspaceTitle)
    const updateWorkspaceTitle = useWorkspaceDetailsStore((state)=>state.updateWorkspaceTitle)
    const updateTaskDetails = useWorkspaceDetailsStore((state)=>state.updateTaskDetails)
    if(data){
        updateWorkspaceTitle(data.data.workspaceTitle)
        updateTaskDetails(data.data.data)
    }
    const icon = [<ValueIcon style={{width:25, height:25}} key={"#E91E63"}  color="#00BFA5"/>, <VercelLogoIcon color="#E91E63" key={"#E91E63"} style={{width:25, height:25}}/>, <StarIcon key={'#FFC400'} color="#FFC400" style={{width:25, height:25}}/>]
    return (
        <div className='flex  items-center gap-3'>
            {icon[Math.floor(Math.random()*2)]}
            <span className="text-4xl font-semibold">{workspaceTitle}</span>
        </div>
    )
}
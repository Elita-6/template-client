import {useQuery} from "react-query";
import {workspaceService} from "@/app/managment/_services/workspace.service";


export const useFetchTaskList= (workspaceId:string) =>{
    return useQuery({
        queryKey:['workspace','details'],
        queryFn:()=> workspaceService.getTaskListByWorkspaceId(workspaceId)
    })
}
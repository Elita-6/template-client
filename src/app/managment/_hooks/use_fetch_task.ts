import {useQuery} from "react-query";
import {workspaceService} from "@/app/managment/_services/workspace.service";


export const useFetchStatus= (workspaceId:string) =>{
    return useQuery({
        queryKey:['status'],
        queryFn:()=> workspaceService.getTaskListByWorkspaceId(workspaceId)
    })
}
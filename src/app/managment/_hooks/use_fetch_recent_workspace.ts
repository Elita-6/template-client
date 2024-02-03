import {useQuery} from "react-query";
import {workspaceService} from "@/app/managment/_services/workspace.service";


export const useFetchRecentWorkspace= (userId:string) =>{
    return useQuery({
        queryKey:['workspace','recent'],
        queryFn:()=> workspaceService.getRecentWorkspace(userId)
    })
}
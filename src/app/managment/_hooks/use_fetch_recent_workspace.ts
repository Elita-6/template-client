import {useQuery} from "react-query";
import {workspaceService} from "@/app/managment/_services/workspace.service";


export const useFetchRecentWorkspace= () =>{
    return useQuery({
        queryKey:['workspace','recent'],
        queryFn:()=> workspaceService.getRecentWorkspace()
    })
}

export const useFetchAllWorkspace= () =>{
    return useQuery({
        queryKey:['workspace','all'],
        queryFn:()=> workspaceService.getAllWorkspace()
    })
}
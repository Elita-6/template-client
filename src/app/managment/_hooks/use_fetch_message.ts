import {useQuery} from "react-query";
import {workspaceService} from "@/app/managment/_services/workspace.service";
import {messageService} from "@/app/managment/_services/message.service";


export const useFetchMessage= (workspaceId:string) =>{
    return useQuery({
        queryKey:['message'],
        queryFn:()=> messageService.getMessageByWorkspaceId(workspaceId)
    })
}
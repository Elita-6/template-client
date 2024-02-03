import {useMutation, useQueryClient} from "react-query";
import {IWorkspaceToCreate} from "@/app/managment/_lib/_type/types";
import {workspaceService} from "@/app/managment/_services/workspace.service";


export  const useCreateWorkspace= ()=>{
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationFn: (workspace:IWorkspaceToCreate)=> workspaceService.createWorkspace(workspace),
            mutationKey:['workspace','create'],
            // onSuccess: async ()=>{
            //     await queryClient.resetQueries(['workspace'])
            //     await queryClient.invalidateQueries(['workspace'])
            // }
        }
    )
}
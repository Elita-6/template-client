import {useMutation, useQueryClient} from "react-query";
import {IWorkspaceToCreate} from "@/app/managment/_lib/_type/types";
import {workspaceService} from "@/app/managment/_services/workspace.service";
import {taskService} from "@/app/managment/_services/task.service";
import {ITaskToCreate} from "@/app/managment/_lib/_type/task.types";


export  const useCreateWorkspace= ()=>{
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationFn: (task:ITaskToCreate)=> taskService.createTask(task),
            mutationKey:['workspace','create'],
            // onSuccess: async ()=>{
            //     await queryClient.resetQueries(['workspace'])
            //     await queryClient.invalidateQueries(['workspace'])
            // }
        }
    )
}
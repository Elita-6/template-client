import {useMutation, useQueryClient} from "react-query";
import {ITaskToCreate} from "@/app/managment/_lib/_type/task.types";
import {messageService} from "@/app/managment/_services/message.service";
import {IMessageToCreate} from "@/app/managment/_lib/_type/message.types";


export  const useCreateMessage= ()=>{
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationFn: (messageToCreate:IMessageToCreate)=> messageService.createMessage(messageToCreate),
            mutationKey:['message','create'],
            // onSuccess: async ()=>{
            //     await queryClient.resetQueries(['workspace'])
            //     await queryClient.invalidateQueries(['workspace'])
            // }
        }
    )
}
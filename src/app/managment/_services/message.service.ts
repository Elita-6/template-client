import {httpClient} from "@/lib/axios";
import {MESSAGE_ENDPOINTS} from "@/app/managment/_constants/endpoints";
import {IMessage, IMessageToCreate} from "@/app/managment/_lib/_type/message.type";

class MessageService{
    public getMessageByWorkspaceId(workspaceId:string){
        return httpClient.get(`/message/${MESSAGE_ENDPOINTS.LIST}/list`)
    }
    public createMessage(message:IMessageToCreate){
        return httpClient.post(`${MESSAGE_ENDPOINTS.CREATE}`,message)
    }

}

export const messageService = new MessageService()
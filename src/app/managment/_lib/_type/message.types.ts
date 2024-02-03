export interface IMessage{
    messageId:string
    date:string
    filepath:string
    text:string,
    userId:string
    workspaceId:string
}
export interface IMessageToCreate{
    userId:string,
    text:string
}

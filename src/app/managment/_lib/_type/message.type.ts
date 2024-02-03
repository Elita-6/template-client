export interface IMessage{
    messageId:string
    date:string
    text:string,
    userId:string
}
export interface IMessageToCreate{
    userId:string,
    text:string
}

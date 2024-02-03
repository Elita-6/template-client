import { ITask } from "./task.type";

export interface IWorkspace{
    workspaceId: string
    workspaceTitle: string
    userId:string
    taskList:ITask[]
}

export interface IWorkspaceToCreate{
    workspaceId: string
    workspaceTitle: string
    userId:string
}

export interface IHistory{
    historyId:string
    workspaceId:string
    description:string
}


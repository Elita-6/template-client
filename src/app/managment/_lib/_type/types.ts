import { string } from "zod";
import { ITask } from "./task.types";

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
    date:string
    element:string
    elementId:string
    authorId:string
    action:string
}

export interface IRoleWorkspace{
    droitId:string
    typt:string
}

export interface IMember{
    useId:string
    workspaceId:string
    droitId:string
}

export interface IAssign{
    userId:string
    taskId:string
}
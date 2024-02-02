import { ITask } from "./task.type";

export interface IWorkspace{
    workspaceId: string,
    workspaceTitle: string,
    userId:string,
    taskList:ITask[]
}


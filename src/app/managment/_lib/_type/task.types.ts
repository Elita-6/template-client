import {color} from "framer-motion";

export interface ITask{
    taskId:string
    descriptionTask:string
    taskTitle:string
    dateStart:string
    dateEnd:string
    statusId:string
    color:string
    tags:ITag[]
    users:IUser
}
export interface ITag{
    tabId:string
    description:string
}

export interface ILink{
    taskId:string
    tagId:string
}

export interface ITaskToCreate{
    descriptionTask:string
    taskTitle:string
    workspaceId:string
    statusId:string
}

export interface ITag{
    tagId:string
    description:string
}

export interface IStatus{
    statusId:string
    designation:string
    taskId:string
}

export interface IFile{
    fileId:string
    fileUrl:string
    descriptionFile:string
    taskId:string
}
export interface ITaskGroup {
    tasks: ITask[];
    status: string;
    color: string;
}

export interface IWorkspaceDetails{
    workspaceTitle:string,
    taskDetails: ITaskGroup
}
export interface IUser{
    userId: string
    username: string
    profileURL: string
}


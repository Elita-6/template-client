export interface ITask{
    taskId:string,
    descriptionTask:string,
    taskTitle:string
}

export interface IHistory{
    historyId:string,
    workspaceId:string,
    description:string
}

export interface ILink{
    taskId:string,
    tagId:string
}

export interface IWorkspaceToCreate{
    workspaceId: string,
    workspaceTitle: string,
    userId:string
}

export interface ITaskToCreate{
    descriptionTask:string,
    taskTitle:string,
    workspaceId:string
}

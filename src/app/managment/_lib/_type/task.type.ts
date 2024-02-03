export interface ITask{
    taskId:string
    descriptionTask:string
    taskTitle:string
}

export interface ILink{
    taskId:string
    tagId:string
}

export interface ITaskToCreate{
    descriptionTask:string
    taskTitle:string
    workspaceId:string
}

export interface ITag{
    tagId:string
    description:string
}

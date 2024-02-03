export interface ITask{
    taskId:string
    descriptionTask:string
    taskTitle:string
    dateStart:string
    dateEnd:string
    statusId:string
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


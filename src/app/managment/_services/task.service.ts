import {httpClient} from "@/lib/axios";
import {TASK_ENDPOINTS} from "@/app/managment/_constants/endpoints";
import {ITaskToCreate} from "@/app/managment/_lib/_type/task.types";


class TaskService{
    public createTask(taskToCreate: ITaskToCreate){
        return httpClient.post(TASK_ENDPOINTS.CREATE,taskToCreate)
    }

    public changeTaskStatus(taskNewStatus: string,taskId:string){
        return httpClient.put(`/${TASK_ENDPOINTS.UPDATE_STATUS}/${taskId}/status`,taskNewStatus)
    }

}

export const taskService = new TaskService()
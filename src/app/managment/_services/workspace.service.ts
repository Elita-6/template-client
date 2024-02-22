import {httpClient} from "@/lib/axios";
import {WORKSPACE_ENDPOINTS} from "@/app/managment/_constants/endpoints";
import {IWorkspaceToCreate} from "@/app/managment/_lib/_type/types";

class WorkspaceService{
    public createWorkspace(workspaceToCreate: IWorkspaceToCreate){
        return httpClient.post(WORKSPACE_ENDPOINTS.CREATE,workspaceToCreate)
    }
    public getTaskListByWorkspaceId(workspaceId: string){
        return httpClient.get(`task/${workspaceId}/`)
    }

    public getRecentWorkspace(userId:string){
        return httpClient.get(`workspace\${WORKSPACE_ENDPOINTS.RECENT_LIST}\list`)
    }
    public getAllWorkspace(userId:string){
        return httpClient.get('/workspace')
    }

}

export const workspaceService = new WorkspaceService()
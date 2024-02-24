import {create,  StoreApi, UseBoundStore} from 'zustand'
import {ITask, ITaskGroup, IWorkspaceDetails} from "@/app/managment/_lib/_type/task.types";

type State = {
    workspaceTitle:string
    taskDetails:ITaskGroup[]
}

type Action = {
    updateWorkspaceTitle:(workspaceTitle: State['workspaceTitle'])=>void
    updateTaskDetails:(taskDetails: State['taskDetails'])=>void
}



type WithSelectors<S> = S extends { getState: () => infer T }
    ? S & { use: { [K in keyof T]: () => T[K] } }
    : never
const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
    _store: S,
) => {
    let store = _store as WithSelectors<typeof _store>
    store.use = {}
    for (let k of Object.keys(store.getState())) {
        ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
    }

    return store
}
export const useWorkspaceDetailsStore = createSelectors(create<State & Action>((set) => ({
    workspaceTitle:'',
    taskDetails:[{
        tasks: [],
        status: '',
        color: ''
    }],
    updateWorkspaceTitle:(workspaceTitle)=> set(()=>({workspaceTitle: workspaceTitle})),
    updateTaskDetails:(taskDetails)=> set(()=>({taskDetails: taskDetails}))
})))

export const globalUpdateWorkspaceTitle = (title:string)=>{
    useWorkspaceDetailsStore.setState((workspaceTitle=> ({workspaceTitle: title})))
}
export const globalUpdateTaskDetails = (task:ITaskGroup[])=>{
    useWorkspaceDetailsStore.setState((taskDetails=> ({taskDetails: task})))
}
"use clientcnh"
import Workspace from '../page';
import {DrawerDemo} from "@/app/dashboard/workspace/_components/drawer/drawer";
export default function WorkspaceDetails({params}:{params:{slug:string}}){
    return(
        <div className="">
            Workspace: {params.slug}
            <DrawerDemo />
        </div>
    )
}
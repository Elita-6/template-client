import { workSpaces } from "@/app/dashboard/_constant/data.example";
import LinkNav from "./link.nav";
import { StarIcon, ValueIcon, VercelLogoIcon } from "@radix-ui/react-icons";
import {useFetchAllWorkspace} from "@/app/managment/_hooks/use_fetch_recent_workspace";
import {IWorkspace} from "@/app/managment/_lib/_type/types";

export default function LinkList(){
    const {isLoading,data} = useFetchAllWorkspace()
    const icon = [<ValueIcon style={{width:18, height:18}}  color="#00BFA5"/>, <VercelLogoIcon color="#E91E63" style={{width:18, height:18}}/>, <StarIcon  color="#FFC400" style={{width:18, height:18}}/>]
    return(
        <div className="flex flex-col pt-3 space-y-0.5">
        {
            data?.data.map((item:Partial<IWorkspace>,key:number) =>(
                <LinkNav href={`/dashboard/workspace/[slug]`} as={`/dashboard/workspace/${item.workspaceId}`} linkLabel={item.workspaceTitle!} key={key} bullet={icon[key % icon.length]}/>
            ))
        }
    </div>
    )
}
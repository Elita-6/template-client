import { workSpaces } from "@/app/dashboard/_constant/data.example";
import LinkNav from "./link.nav";
import { StarIcon, ValueIcon, VercelLogoIcon } from "@radix-ui/react-icons";

export default function LinkList(){
    const icon = [<ValueIcon style={{width:18, height:18}}  color="#00BFA5"/>, <VercelLogoIcon color="#E91E63" style={{width:18, height:18}}/>, <StarIcon  color="#FFC400" style={{width:18, height:18}}/>]
    return(
        <div className="flex flex-col pt-3 space-y-0.5">
        {
            workSpaces.map((ws, i) =>(
                <LinkNav href={`/dashboard/workspace/[slug]`} as={`/dashboard/workspace/${ws.workSpaceId}`} linkLabel={ws.workspaceName} key={i} bullet={icon[i % icon.length]}/>
            ))
        }
    </div>
    )
}
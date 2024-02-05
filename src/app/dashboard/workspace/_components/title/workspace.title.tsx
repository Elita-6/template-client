import {StarIcon , ValueIcon , VercelLogoIcon} from "@radix-ui/react-icons";


export default function WorkspaceTitle({workspaceId}: { workspaceId: string}) {
    //Todo: fetch the workspace title using workspace id
    // eslint-disable-next-line react/jsx-key
    const icon = [<ValueIcon style={{width:25, height:25}}  color="#00BFA5"/>, <VercelLogoIcon color="#E91E63" style={{width:25, height:25}}/>, <StarIcon  color="#FFC400" style={{width:25, height:25}}/>]
    return (
        <div className='flex  items-center gap-3'>
            {icon[Math.floor(Math.random()*2)]}
            <span className="text-4xl font-semibold">Team Dashboard App {workspaceId}</span>
        </div>
    )
}
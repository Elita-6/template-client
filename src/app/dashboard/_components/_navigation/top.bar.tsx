import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { userInfo } from '../../_constant/data.example';
import { CaretDownIcon } from "@radix-ui/react-icons";

export default function TopBar(){
    return(
        <div className="flex flex-row w-full justify-end pt-5 pr-16 items-center space-x-4">
            <Avatar style={{width:60, height:60}}>
                <AvatarImage src={userInfo.profileUrl} alt={userInfo.username} />
                <AvatarFallback>{userInfo.username[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
                <h2 className="text-lg">{userInfo.username}</h2>
                <p className="text-gray-400">{userInfo.email}</p>
            </div>
            <div className="">
                <CaretDownIcon style={{width:25, height:25}}/>
            </div>
        </div>
    )
}
import { Links } from "../../_constant/links"
import { LinkedIconBtn } from "../_button/linked.icon.btn"

export const LeftIconNav = ()=>{
    return(
        <div className="flex flex-col items-center w-14 border-r-2 border-gray-300 h-screen border-opacity-50 pt-16 space-y-1.5">
            {
                Links.map((link, index)=>(
                    <LinkedIconBtn href={link.href} icon={link.icon} key={index}/>
                ))
            }
        </div>
    )
}
import { CalendarIcon, CodeIcon, DashboardIcon, GearIcon } from "@radix-ui/react-icons";

export const Links = [
    {
        href:"/dashboard",
        icon:<DashboardIcon style={{fontSize:40}} />
    },
    {
        href:"/when2meet",
        icon:<CalendarIcon style={{fontSize:100}}/>
    },
    {
        href:"/workspace",
        icon:<CodeIcon/>
    },
    {
        href:"/setting",
        icon:<GearIcon/>
    },
]
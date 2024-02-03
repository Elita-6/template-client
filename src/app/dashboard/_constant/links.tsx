import { CalendarIcon, CodeIcon, DashboardIcon, GearIcon } from "@radix-ui/react-icons";

export const Links = [
    {
        href:"/dashboard",
        icon:<DashboardIcon style={{width:22, height:22}} />
    },
    {
        href:"/dashboard/when2meet",
        icon:<CalendarIcon style={{width:22, height:22}}/>
    },
    {
        href:"/dashboard/workspace",
        icon:<CodeIcon style={{width:22, height:22}}/>
    },
    {
        href:"/dashboard/setting",
        icon:<GearIcon style={{width:22, height:22}}/>
    },
]
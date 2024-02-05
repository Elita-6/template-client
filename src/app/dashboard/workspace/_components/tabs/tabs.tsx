"use client"
import { Button } from "@/components/ui/button"
import {usePathname , useSearchParams} from "next/navigation";
import {useRouter} from "next/navigation";

type Itab = {
    label: string
    icon: React.ReactNode,
    onClick: (event: React.MouseEventHandler<HTMLButtonElement>) => void
}
 export function TabItem(props: Itab) {
    const {onClick, icon, label} = props
     const searchParams = useSearchParams();
     const selectedTab = new URLSearchParams(searchParams).get('tab')
     const pathname = usePathname()
     const handleCLick = (tabName: string) => {
         const params = new URLSearchParams(searchParams);
         params.set('tab',tabName);
         replace(`${pathname}?${params.toString()}`)
     };
     const {replace} = useRouter()
    return (
       <Button variant={selectedTab == label.toLowerCase() ? "secondary": "outline"} onClick={(e) => handleCLick(label.toLowerCase())}>
           {icon}
           {label}
       </Button>
    )
}



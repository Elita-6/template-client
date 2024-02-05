'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

type LinkedIconBtnProps = {
    icon:React.ReactNode
    href:string
}
export const LinkedIconBtn = (props:LinkedIconBtnProps)=>{
    const {icon, href} = props
    const pathname = usePathname()
    return(
        <Button variant="link" size="icon" asChild>
            <Link href={href} className={`${pathname == href? "bg-blue-500 text-white":""}`} >{icon}</Link>
        </Button>
    )
}
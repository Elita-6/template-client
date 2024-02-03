'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkProps = {
    href: string
    linkLabel: string
    bullet:React.ReactNode
}
export default function LinkNav(props: LinkProps){
    const pathName = usePathname()
    const { href, linkLabel, bullet } = props
    return(
        <Link href={href} className={`rounded-lg ${pathName == href? "bg-gray-300 bg-opacity-40":""} flex flex-row space-x-2 items-center text-lg text-opacity-60 font-light pl-7 py-2.5`}>
            {bullet}
            <h2>{linkLabel}</h2>
        </Link>
    )
}
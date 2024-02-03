'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkProps = {
    href: string
    as: string
    linkLabel: string
    bullet:React.ReactNode
}
export default function LinkNav(props: LinkProps){
    const pathName = usePathname()
    const { href, linkLabel, bullet, as } = props
    return(
        <Link href={href} as={as} key={linkLabel} className={`rounded-lg ${pathName == as? "bg-gray-300 bg-opacity-40":""} flex flex-row space-x-2 items-center text-lg text-opacity-60 font-light pl-6 py-2.5 pr-1`}>
            {bullet}
            <h2>{linkLabel}</h2>
        </Link>
    )
}
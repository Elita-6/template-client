'use client'
import { Input } from "@/components/ui/input"
import clsx from "clsx"

type inputType = "text" | "number" | "date" | "password" | "email" | "search" | "year"
type InputProps = { 
    type: inputType
    name:string
    iconStart?:React.ReactNode
    iconEnd?:React.ReactNode
    placeholder:string
    label?:string
    style?:string
    onChanged:()=>void
}
export default function InputField(props:InputProps){
    const {name, onChanged, placeholder, type, iconEnd, iconStart, label, style} = props
    return(
        <div className="w-full flex flex-col">
            {
                label && (
                    <label htmlFor={name} className="label">
                        {label}
                    </label>
                )
            }

             <div  className="flex-1 relative">
                 {
                     iconStart &&
                     <span className=" absolute left-0 top-1/2 -translate-y-1/2 px-5 ">
                        {iconStart}
                     </span>
                 }
                 <Input
                    type={type}
                    id={name}
                    placeholder={placeholder}
                    onChange={onChanged}
                    className={clsx(
                        "input",
                        {
                            "px-12": iconStart,
                        },
                        style
                    )

                    }
                 />

                 {
                     iconEnd &&
                     <span className="absolute px-2 top-1/3 right-0">
                    {iconEnd}
                </span>
                 }
             </div>
        </div>
    )
}
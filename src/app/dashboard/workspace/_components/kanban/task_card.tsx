import { addDays, format } from "date-fns"
import { DateRange } from "react-day-picker"
import { AiOutlineLink } from "react-icons/ai";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {className} from "postcss-selector-parser";
import React from "react";
import {HiOutlineDotsVertical} from "react-icons/hi";
import {CalendarIcon} from "@radix-ui/react-icons";
import {ButtonAdd} from "@/app/dashboard/workspace/_components/button/button_add";
import {Avatar, AvatarGroup} from "@nextui-org/react";

type Props = {

};
export const TaskCard = (props: Props) => {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
    })
    return (
        <div className='w-[30%]  flex flex-col space-y-3'>
            <div className='flex space-x-2 items-center'>
                <div className='bg-[#f6e549] rounded-full w-2 h-2'/>
                <span className='text-sm opacity-75'>Waiting</span>
            </div>
            <ButtonAdd HandleClick={()=>{}}/>
            <div className=' fle flex-col bg-white  p-2 space-y-2'>
                <div className='flex justify-between items-start'>
                    <div className='bg-[#506684] h-1 w-14'/>
                    <HiOutlineDotsVertical size={25} className='cursor-pointer'/>
                </div>
                <div className='flex flex-col space-y-3'>
                    <h3>
                        User Interface Design
                    </h3>
                    <p className='opacity-75 text-sm'>
                        Lorem ipsum dolor sit amet consectetur. Porttitor at sed magna convallis.
                    </p>
                </div>
                <p className='text-[#506684] text-[12px] opacity-75'> #design-system #ux #ui</p>
                <div className='w-full h-[1px] bg-[#000] opacity-15 '/>
                <div className={cn("grid gap-2", className)}>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                id="date"
                                variant={"outline"}
                                className={cn(
                                    "w-[95%] justify-center text-left font-normal rounded-full bg-[#8C8C8C29]",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date?.from ? (
                                    date.to ? (
                                        <>
                                            {format(date.from, "LLL dd, y")} -{" "}
                                            {format(date.to, "LLL dd, y")}
                                        </>
                                    ) : (
                                        format(date.from, "LLL dd, y")
                                    )
                                ) : (
                                    <span>Pick a date</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={date?.from}
                                selected={date}
                                onSelect={setDate}
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <AvatarGroup isBordered max={3} total={10}>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                        </AvatarGroup>
                    </div>
                    <div className=' flex items-center space-x-3'>
                        <AiOutlineLink/>
                        <p>3</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
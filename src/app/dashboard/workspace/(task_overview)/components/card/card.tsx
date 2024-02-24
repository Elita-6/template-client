import React from 'react';
import {Progress} from "@/components/ui/progress";

type CardProps = {
    status: string,
    color: string,
    total_task: number,
    number_task: number,
}

const Card = (props: CardProps) => {
    const {status , color, total_task, number_task} = props
    const progressPercentage = Math.floor(number_task * 100 / total_task)
    return (
        <div className=" bg-white  w-full p-4 shadow-md">
            <div className="py-2  flex flex-col gap-5">
                <span
                    className="w-fit py-2 px-4 rounded-full"
                    style={{backgroundColor: color, opacity:0.8}}
                >
                     {status}
                </span>
                    <div>
                        <div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">{progressPercentage}%</span>
                                <span className="text-gray-600">{`${number_task}/${total_task}`}</span>
                            </div>
                            <Progress value={progressPercentage} color="blue"/>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Card;

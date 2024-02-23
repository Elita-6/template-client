import React from 'react';
import {Progress} from "@/components/ui/progress";

const Card = () => {
    return (
        <div className="flex flex-col gap-5 bg-white h-32 w-100 p-4">
            <span className="inline bg-green-300 p-2 px-4 rounded-full text-gray-700">
                Working on
            </span>
            <div>
                <div>
                    <div className="flex justify-between">
                        <span>66%</span>
                        <span>12/24</span>
                    </div>
                    <Progress value={66} />
                </div>
            </div>
        </div>
    );
};

export default Card;
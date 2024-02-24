import React from 'react';
import {overall_performance} from "@/app/dashboard/_constant/data.example";
import Card from "@/app/dashboard/workspace/(task_overview)/components/card/card";

const OverallPerformance = () => {
    return (
        <div className='w-full p-6 bg-white'>
            <div>
                <div>
                    <h3 className="text-xl font-bold text-gray-700">Overall Performance</h3>
                </div>
                <div className="w-full grid grid-cols-3 gap-12">
                    {overall_performance.map((item, index) => {
                        return <Card
                            key={`${item.status}${index}`}
                            color={item.color}
                            number_task={item.number_task}
                            status={item.status}
                            total_task={item.total_task}
                        />
                    })}
                </div>
            </div>
        </div>
    );
};

export default OverallPerformance;

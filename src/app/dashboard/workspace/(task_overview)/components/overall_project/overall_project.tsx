import React from 'react';
import {DonutChartHero} from "@/app/dashboard/workspace/(task_overview)/components/chart/donnut_chart";
const overall_data:  { name: string, value: number, color: string }[] = [
    { name: 'pending', value: 8, color: 'yellow' },
    { name: 'finished', value: 8, color: 'green' },
    { name: 'working on', value: 6, color: 'blue' },
    { name: 'canceled', value: 3, color: 'red' }
]
const OverallProject = () => {
    return (
        <div className="w-full p-5">
            <div className="p-4">
                <h3 className="text-2xl font-bold text-gray-700">Overall Project</h3>
            </div>
            <DonutChartHero title="Overall Project" data={overall_data as [{ name: string, value: number, color: string }]} />
        </div>
    );
};

export default OverallProject;

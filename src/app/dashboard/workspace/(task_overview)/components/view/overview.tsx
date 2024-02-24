import React , {Component} from 'react';
import OverallPerformance
    from "@/app/dashboard/workspace/(task_overview)/components/overall_performance/overall_performance";
import MyTaskTable from "@/app/dashboard/workspace/(task_overview)/components/table/tasks";
import {DonutChartHero} from "@/app/dashboard/workspace/(task_overview)/components/chart/donnut_chart";
import OverallProject from "@/app/dashboard/workspace/(task_overview)/components/overall_project/overall_project";


class Overview extends Component {
    render() {
        return (
            <section className="w-full h-full flex justify-between gap-2 py-2">
                <div className="flex-1 w-full flex flex-col gap-3">
                     <OverallPerformance />
                     <MyTaskTable />
                </div>
                <aside className="min-w-[20rem] bg-white h-full">
                    <OverallProject />
                </aside>
            </section>
        );
    }
}

export default Overview;

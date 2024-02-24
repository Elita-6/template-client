import {columns , Task} from "@/app/dashboard/workspace/(task_overview)/components/table/tasks/column";
import {taskList} from "@/app/dashboard/_constant/data.example";
import {DataTable} from "@/app/dashboard/workspace/(task_overview)/components/table/tasks/data_table";
import React from "react";

async function getData(): Promise<Task[]> {
    // Fetch data from your API here.
    return taskList
}

export default async function MyTaskTable() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10 bg-white">
            <div>
                <h3 className="text-2xl font-bold text-gray-700">My tasks</h3>
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}

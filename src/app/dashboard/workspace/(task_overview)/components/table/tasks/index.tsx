import {columns , Task} from "@/app/dashboard/workspace/(task_overview)/components/table/tasks/column";
import {taskList} from "@/app/dashboard/_constant/data.example";
import {DataTable} from "@/app/dashboard/workspace/(task_overview)/components/table/tasks/data_table";

async function getData(): Promise<Task[]> {
    // Fetch data from your API here.
    return taskList
}

export default async function MyTaskTable() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10 bg-white">

            <DataTable columns={columns} data={data} />
        </div>
    )
}

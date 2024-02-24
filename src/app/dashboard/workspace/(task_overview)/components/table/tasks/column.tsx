"use client"

import { ColumnDef } from "@tanstack/react-table"
import {DateFormatterOptions} from "@react-aria/i18n";
import {ArrowUpDownIcon} from "lucide-react";
import {Button} from "@/components/ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Task = {
    id: string
    title: string,
    status: "pending" | "finished" | "working on" | "canceled",
    color: string,
    start_date: string,
    end_date: string
}

export const columns: ColumnDef<Task>[] = [
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey:'color',
        header: ({table}) => {
            return null
        },
        cell: ({row}) => {
            return null
        }
    },
    {
        accessorKey: "status",
        header: ({table}) => {
            return <div className='text-center font-bold'>Status</div>
        },
        cell: ({row}) => {
            const color: string = row.getValue('color');
            return(
                <div
                    className="p-2 text-center font-medium rounded-full   "
                    style={{backgroundColor: color, opacity:0.7 }}>
                    {row.getValue('status')}
                </div>
            )
        }
    },
    {
        accessorKey: "start_date",
        header: ({column}) => {
            return(
            <div className="flex justify-center items-center">
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="font-bold"
                >
                    Start Date
                    <ArrowUpDownIcon className="ml-2 h-4 w-4" />
                </Button>
            </div>)

        },
        cell: ({row}) => {
            const date = new Date(row.getValue('start_date'));
            const options: DateFormatterOptions = { year: 'numeric', month: 'short', day: '2-digit' };
            const formattedDate = date.toLocaleDateString('en-US', options);
            return <div className="text-center font-medium">{formattedDate}</div>
        }
    },
    {
        accessorKey: "end_date",
        header: ({column}) => {
            return(
                <div className="flex justify-center items-center">
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="font-bold"
                    >
                        End Date
                        <ArrowUpDownIcon className="ml-2 h-4 w-4" />
                    </Button>
                </div>)

        },
        cell: ({row}) => {
            const date = new Date(row.getValue('end_date'));
            const options: DateFormatterOptions = { year: 'numeric', month: 'short', day: '2-digit' };
            const formattedDate = date.toLocaleDateString('en-US', options);
            return <div className="text-center font-medium">{formattedDate}</div>
        }
    },
]

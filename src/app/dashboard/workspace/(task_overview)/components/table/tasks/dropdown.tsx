import React , {useState} from 'react';
import {
    DropdownMenu ,
    DropdownMenuContent ,
    DropdownMenuItem ,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {ChevronDownIcon} from "lucide-react";
import {Table} from "@tanstack/table-core";

const DropdownStatus = ({table}: {table: Table<Table<any>>}) => {
    const [selectedStatus, setSelectedStatus] = useState<string>("all");
    const handleSelectStatus= (status: string) => {
        setSelectedStatus(status)
        if(status == "all") {
            table.getColumn('status')?.setFilterValue("");
            return
        }
        table.getColumn("status")?.setFilterValue(status);

    }
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto">
                        {selectedStatus} <ChevronDownIcon className="ml-2 h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {   ["all","pending","finished","working on","canceled"]
                        .map((status) => {
                            return (
                                <DropdownMenuItem
                                    key={status}
                                    onClick={(_) => {
                                        handleSelectStatus(status)
                                    }


                                    }
                                >
                                    {status}
                                </DropdownMenuItem>
                            )
                        })}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default DropdownStatus;

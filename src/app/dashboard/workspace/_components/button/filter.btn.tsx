import {Button} from "@/components/ui/button";
import {FilterIcon} from "lucide-react";

export default function FilterBtn(){
    return(
        <Button variant={"outline"}>
            <FilterIcon />
            Filter
        </Button>
    )
}
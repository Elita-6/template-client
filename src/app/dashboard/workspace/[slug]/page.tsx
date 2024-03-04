import {useSearchParams} from "next/navigation";
import SlugContainer from "@/app/dashboard/workspace/_component/slug_container";


export default function WorkspaceDetails({params}:{params:{slug:string}}){
    const searchParams = useSearchParams();
    const section = new URLSearchParams(searchParams).get('section')
    return(
        <SlugContainer section={section!}/>
    )
}

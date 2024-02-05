export default function WorkspaceDetails({params}:{params:{slug:string}}){
    return(
        <div className="">
            Workspace: {params.slug}

        </div>
    )
}
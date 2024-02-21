import {ITask} from "@/app/managment/_lib/_type/task.types";

export const userInfo = {
    username:"Emiii",
    email:"emiii@gmail.com",
    profileUrl:"/home/niriantsoa/Pictures/100790.png"
}
export const workSpaces = [
    {
        workspaceName:"Team Dashboard App",
        workSpaceId:'1'
    },
    {
        workspaceName:"Team Dashboard App",
        workSpaceId:'2'
    },
    {
        workspaceName:"Team Dashboard App",
        workSpaceId:'3'
    },
    {
        workspaceName:"Team Dashboard App",
        workSpaceId:'4'
    },
]

export const allTasks = [
{
    status:"waiting",
    tasks: [
        {
            taskId: "5",
            descriptionTask: "Suivre une formation en ligne sur les technologies de développement web",
            taskTitle: "Formation en ligne",
            dateStart: "2024-02-01",
            dateEnd: "2024-03-15",
            statusId: "waiting",
            color:'#BCF079'
        }
    ],
    color:"#BCF079"
},
{
    status:"finished",
    tasks: [
            {
                taskId: "2",
                descriptionTask: "Organiser une réunion d'équipe pour discuter de la planification du projet",
                taskTitle: "Réunion de planification",
                dateStart: "2024-02-15",
                dateEnd: "2024-02-15",
                statusId: "finished",
                color: '#D449F6'
            },
            {
                taskId: "4",
                descriptionTask: "Effectuer une mise à jour de sécurité sur les serveurs",
                taskTitle: "Maintenance des serveurs",
                dateStart: "2024-02-18",
                dateEnd: "2024-02-18",
                statusId: "finished",
                color:"#BCF079"
            }
        ],
    color:"#f6e549"
    },
    {
        status: "working on",
        tasks: [
            {
                taskId: "1",
                descriptionTask: "Développer une nouvelle fonctionnalité pour l'application de messagerie",
                taskTitle: "Développement de fonctionnalité",
                dateStart: "2024-02-10",
                dateEnd: "2024-02-20",
                statusId: "working_on",
                color:"#D62FBB"
            },
            {
                taskId: "3",
                descriptionTask: "Rédiger un rapport sur les résultats de l'étude de marché",
                taskTitle: "Rédaction de rapport",
                dateStart: "2024-02-05",
                dateEnd: "2024-02-25",
                statusId: "working_on",

                color:"#f6e549"
            }
        ],
        color:"#D62FBB"
    }
];

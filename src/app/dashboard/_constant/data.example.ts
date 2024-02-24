import {ITask} from "@/app/managment/_lib/_type/task.types";
import {Task} from "@/app/dashboard/workspace/(task_overview)/components/table/tasks/column";

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
            color:'#BCF079',
            users:{
                userId: "0bb01454-ca6a-11ee-9964-54e1ad3aabaa",
                username: "ninohantonio",
                profileURL:''
            },
            tags:[]
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
                color: '#D449F6',
                users:{
                    userId: "0bb01454-ca6a-11ee-9964-54e1ad3aabaa",
                    username: "ninohantonio",
                    profileURL:''
                },
                tags:[]
            },
            {
                taskId: "4",
                descriptionTask: "Effectuer une mise à jour de sécurité sur les serveurs",
                taskTitle: "Maintenance des serveurs",
                dateStart: "2024-02-18",
                dateEnd: "2024-02-18",
                statusId: "finished",
                color:"#BCF079",
                users:{
                    userId: "0bb01454-ca6a-11ee-9964-54e1ad3aabaa",
                    username: "ninohantonio",
                    profileURL:''
                },
                tags:[]
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
                color:"#D62FBB",
                users:{
                    userId: "0bb01454-ca6a-11ee-9964-54e1ad3aabaa",
                    username: "ninohantonio",
                    profileURL:''
                },
                tags:[]
            },
            {
                taskId: "3",
                descriptionTask: "Rédiger un rapport sur les résultats de l'étude de marché",
                taskTitle: "Rédaction de rapport",
                dateStart: "2024-02-05",
                dateEnd: "2024-02-25",
                statusId: "working_on",
                tags:[],
                users:{
                    userId: "0bb01454-ca6a-11ee-9964-54e1ad3aabaa",
                    username: "ninohantonio",
                    profileURL:''
                },
                color:"#f6e549"
            }
        ],
        color:"#D62FBB"
    }
];


export const overall_performance = [
    {
        "status": "In Progress",
        "color": "#ff9900",
        "total_task": 10,
        "number_task": 6
    },
    {
        "status": "Completed",
        "color": "#00cc66",
        "total_task": 20,
        "number_task": 20
    },
    {
        "status": "Pending",
        "color": "#ff3333",
        "total_task": 15,
        "number_task": 8
    }
]

export const taskList: Task[] = [
    {
        id: "1",
        title: "Task 1",
        status: "pending",
        color: "#ffcc00", // Yellow
        start_date: "2024-02-23T08:00:00Z",
        end_date: "2024-02-23T17:00:00Z"
    },
    {
        id: "2",
        title: "Task 2",
        status: "finished",
        color: "#00cc66", // Green
        start_date: "2024-02-24T09:00:00Z",
        end_date: "2024-02-24T18:00:00Z"
    },
    {
        id: "3",
        title: "Task 3",
        status: "working on",
        color: "#0099ff", // Blue
        start_date: "2024-02-25T10:00:00Z",
        end_date: "2024-02-25T19:00:00Z"
    },
    {
        id: "4",
        title: "Task 4",
        status: "canceled",
        color: "#ff3333", // Red
        start_date: "2024-02-26T11:00:00Z",
        end_date: "2024-02-26T20:00:00Z"
    },
    {
        id: "5",
        title: "Task 5",
        status: "pending",
        color: "#ffcc00", // Yellow
        start_date: "2024-02-27T12:00:00Z",
        end_date: "2024-02-27T21:00:00Z"
    },
    {
        id: "6",
        title: "Task 6",
        status: "finished",
        color: "#00cc66", // Green
        start_date: "2024-02-28T13:00:00Z",
        end_date: "2024-02-28T22:00:00Z"
    },
    {
        id: "7",
        title: "Task 7",
        status: "working on",
        color: "#0099ff", // Blue
        start_date: "2024-02-29T14:00:00Z",
        end_date: "2024-02-29T23:00:00Z"
    },
    {
        id: "8",
        title: "Task 8",
        status: "canceled",
        color: "#ff3333", // Red
        start_date: "2024-03-01T15:00:00Z",
        end_date: "2024-03-01T00:00:00Z"
    },
    {
        id: "9",
        title: "Task 9",
        status: "pending",
        color: "#ffcc00", // Yellow
        start_date: "2024-03-02T16:00:00Z",
        end_date: "2024-03-02T01:00:00Z"
    },
    {
        id: "10",
        title: "Task 10",
        status: "finished",
        color: "#00cc66", // Green
        start_date: "2024-03-03T17:00:00Z",
        end_date: "2024-03-03T02:00:00Z"
    },
    {
        id: "11",
        title: "Task 11",
        status: "working on",
        color: "#0099ff", // Blue
        start_date: "2024-03-04T18:00:00Z",
        end_date: "2024-03-04T03:00:00Z"
    },
    {
        id: "12",
        title: "Task 12",
        status: "canceled",
        color: "#ff3333", // Red
        start_date: "2024-03-05T19:00:00Z",
        end_date: "2024-03-05T04:00:00Z"
    },
    {
        id: "13",
        title: "Task 13",
        status: "pending",
        color: "#ffcc00", // Yellow
        start_date: "2024-03-06T20:00:00Z",
        end_date: "2024-03-06T05:00:00Z"
    },
    {
        id: "14",
        title: "Task 14",
        status: "finished",
        color: "#00cc66", // Green
        start_date: "2024-03-07T21:00:00Z",
        end_date: "2024-03-07T06:00:00Z"
    },
    {
        id: "15",
        title: "Task 15",
        status: "working on",
        color: "#0099ff", // Blue
        start_date: "2024-03-08T22:00:00Z",
        end_date: "2024-03-08T07:00:00Z"
    },
    {
        id: "16",
        title: "Task 16",
        status: "canceled",
        color: "#ff3333", // Red
        start_date: "2024-03-09T23:00:00Z",
        end_date: "2024-03-09T08:00:00Z"
    },
    {
        id: "17",
        title: "Task 17",
        status: "pending",
        color: "#ffcc00", // Yellow
        start_date: "2024-03-10T00:00:00Z",
        end_date: "2024-03-10T09:00:00Z"
    },
    {
        id: "18",
        title: "Task 18",
        status: "finished",
        color: "#00cc66", // Green
        start_date: "2024-03-11T01:00:00Z",
        end_date: "2024-03-11T10:00:00Z"
    },
    {
        id: "19",
        title: "Task 19",
        status: "working on",
        color: "#0099ff", // Blue
        start_date: "2024-03-12T02:00:00Z",
        end_date: "2024-03-12T11:00:00Z"
    },
    {
        id: "20",
        title: "Task 20",
        status: "canceled",
        color: "#ff3333", // Red
        start_date: "2024-03-13T03:00:00Z",
        end_date: "2024-03-13T12:00:00Z"
    },
    {
        id: "21",
        title: "Task 21",
        status: "pending",
        color: "#ffcc00", // Yellow
        start_date: "2024-03-14T04:00:00Z",
        end_date: "2024-03-14T13:00:00Z"
    },
    {
        id: "22",
        title: "Task 22",
        status: "finished",
        color: "#00cc66", // Green
        start_date: "2024-03-15T05:00:00Z",
        end_date: "2024-03-15T14:00:00Z"
    },
    {
        id: "23",
        title: "Task 23",
        status: "working on",
        color: "#0099ff", // Blue
        start_date: "2024-03-16T06:00:00Z",
        end_date: "2024-03-16T15:00:00Z"
    },
    {
        id: "24",
        title: "Task 24",
        status: "canceled",
        color: "#ff3333", // Red
        start_date: "2024-03-17T07:00:00Z",
        end_date: "2024-03-17T16:00:00Z"
    },
    {
        id: "25",
        title: "Task 25",
        status: "pending",
        color: "#ffcc00", // Yellow
        start_date: "2024-03-18T08:00:00Z",
        end_date: "2024-03-18T17:00:00Z"
    },
]

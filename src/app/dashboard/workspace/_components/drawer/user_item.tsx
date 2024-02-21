import React, {useState} from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Props{
    profile:string
    firstname:string
    lastname:string
    email:string
    userId:string
}

const UserItem = (props:Props) => {
    const [userSelected,     setUserSelected] = useState<String[]>([])
    const AddOrRemoveUserInList = (userId:String) =>{
        if(userSelected.includes(userId)){
            setUserSelected((prevState=>{
                const newUserSelected = [...prevState]
                const indexToRemove = newUserSelected.indexOf(userId)
                if(indexToRemove !== -1){
                    newUserSelected.splice(indexToRemove,1)
                }
                return newUserSelected
            }))

        }else {
            console.log("test")
            setUserSelected([...userSelected,userId])
        }
    }
    return (
        <div className='flex flex-col space-y-2'>
            <div className='flex items-center space-x-3 cursor-pointer' onClick={()=>AddOrRemoveUserInList('userId')}>
                <Avatar className='w-14 h-14'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className='flex flex-col space-y-1'>
                    <h3 className='font-semibold'>Sakura Airi</h3>
                    <h2 className='opacity-75 font-light'>sakuraairi@gmail.com</h2>
                </div>
            </div>
            {
                userSelected.length == 0 ? (
                    <button className='bg-[#F1F5F9] w-full text-[#111] opacity-75 py-3 justify-end'>
                        Select person
                    </button>
                ):(
                    <button className='bg-[#2563EB] w-full text-white py-3 justify-end'>
                        Confirm assignation
                    </button>
                )
            }
        </div>
    );
};

export default UserItem;
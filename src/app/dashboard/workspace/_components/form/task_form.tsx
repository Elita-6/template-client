import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

interface IFormInput{
    title:string
    description:string
    priority:string
}
const TaskForm = () => {
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting}
    } = useForm<IFormInput>()
    const onSubmit:SubmitHandler<IFormInput> = async (data)=>{
        
    }

    return (
        <form className='flex flex-col space-y-3 w-full'  onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full  items-center gap-1.5">
                <label htmlFor='title'>Title</label>
                <input type='text'  placeholder='Ex: Write the unit test'
                       className='outline-none p-2 input ' {...register("title",{required:true})} />
                {errors.title && <span className='text-red-600'> This field is required</span>}
            </div>
            <div className="grid w-full  items-center gap-1.5">
                <label htmlFor='description'>Description</label>
                <textarea    placeholder='Ex: You should test all controller and service'
                       className='outline-none p-2 input resize-none' {...register("description",{required:true})} />
                {errors.description && <span className='text-red-600'> This field is required</span>}
            </div>
            <div className="grid w-full items-center gap-1.5">
                <label htmlFor="priority">Priority</label>
                <select  className="outline-none p-2 input h-10 " {...register("priority",{required:true})}>
                    <option value="low" >Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                {errors.priority && <span className='text-red-600'> This field is required</span>}
            </div>
            <button className='bg-[#2563EB] w-full text-white py-3'>
                Create task
            </button>
            <button className='bg-[#F2F2F2] w-full text-[#0F172A] py-3'>
                Cancel
            </button>
        </form>
    )
};

export default TaskForm;
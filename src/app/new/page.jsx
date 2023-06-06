'use client'
import { useState } from "react";
import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/navigation";


function NewTask(){
    const [task, setTask] = useState()
    const {createTask} = useTasks()
    const router = useRouter()

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(task.title, task.description)
        router.push('/')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name="title" onChange={handleChange} placeholder="write a title"/>
            <textarea name="description" onChange={handleChange} placeholder="Write a description"/>
            <button>Save</button>
        </form>
    )
}
export default NewTask;
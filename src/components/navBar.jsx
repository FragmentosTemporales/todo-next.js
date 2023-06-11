'use client'
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTasks } from "@/context/TasksContext";

function NavBar() {
    const router = useRouter()
    const {tasks} = useTasks()
    return (
        <header className="flex justify-between items-center bg-gray-800 px-28 py-3">
            <Link href="/"><h1 className="font-bold text-3xl text-white">Task App
            <span className="text-sm text-slate-300 ml-5">{tasks.length} Tasks</span></h1></Link>

            <div>
                <button 
                className="bg-green-500 hover:bg-green-400 px-5 py-2 text-gray-50 font-bold rounded-sm inline-flex item-center"
                onClick={()=>{
                    router.push("/new")
                }}>Add Task</button>
            </div>
            
        </header>
    )
}
export default NavBar;
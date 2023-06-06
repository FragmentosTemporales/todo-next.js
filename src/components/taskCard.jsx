import { useRouter } from "next/navigation";
import {useTasks} from "../context/TasksContext"
function TaskCard({ task }) {
    const router = useRouter()
    const {deleteTask} = useTasks()
  return (
    <div style={{background: "#202020", color: "white"}}>
      <h1 onClick={()=>router.push(`/edit/${task.id}`)}>{task.title}</h1>
      <button onClick={(e)=>{
        e.stopPropagation();
        const accept = window.confirm("Are you sure?")
        if (accept) deleteTask(task.id)
      }}>delete</button>
      <p>{task.description}</p>
    </div>
  );
}
export default TaskCard;

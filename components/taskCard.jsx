import { useRouter } from "next/navigation";
function TaskCard({ task }) {
    const router = useRouter()
  return (
    <div style={{background: "#202020", color: "white"}}>
      <h1 onClick={()=>router.push(`/edit/${task.id}`)}>{task.title}</h1>
      <button>delete</button>
      <p>{task.description}</p>
    </div>
  );
}
export default TaskCard;

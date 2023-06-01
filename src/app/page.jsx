"use client";
import { useTasks } from "@/context/TasksContext";
import TaskCard from "../../components/taskCard";

function HomePage() {
  const { tasks } = useTasks();

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id}/>
      ))}
    </div>
  );
}
export default HomePage;
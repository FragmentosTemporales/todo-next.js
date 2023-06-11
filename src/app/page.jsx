"use client";
import { useTasks } from "@/context/TasksContext";
import TaskCard from "../components/taskCard";

function HomePage() {
  const { tasks } = useTasks();
  console.log(tasks);

  return (
    <div className="flex justify-center">
      <div className="w-7/12 ">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
    </div>
  );
}
export default HomePage;

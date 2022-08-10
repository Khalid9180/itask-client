import React from "react";
import TaskCard from "../components/TaskCard";
import CreateTask from "./CreateTask";
function TaskList(props) {
  const tasks = props.userTasks.map((userTasks) => {
    return (
      
        <TaskCard key= {userTasks._id} getAllTasks={props.getAllTasks} {...userTasks} />
      
    );
  });
  return (
    <>
      <div className="tasks">
        <div className="task-holder">
           
        </div>
        {tasks}
      </div>
    </>
  );
}
export default TaskList;

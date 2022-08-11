import React from "react";
import TaskCard from "../components/TaskCard";
import CreateTask from "./CreateTask";
import EditTask from "./EditTask";
function TaskList(props) {
  const tasks = props.userTasks.map((userTasks) => {
    return (
      <div>
        <TaskCard key= {userTasks._id} getAllTasks={props.getAllTasks} {...userTasks} />
        </div>
      
    );
  });
  return (
    <>
      <div className="tasks">
        <div className="task-holder">
        {tasks}
        </div>
        
      </div>
    </>
  );
}
export default TaskList;

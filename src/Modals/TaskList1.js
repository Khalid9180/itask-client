import React from "react";
import CreateTask from "../Modals/CreateTask";
function TaskList(props){
    const tasks = props.userTasks.map((userTasks) => {
    return(
        <>
        <h2>{userTasks.title}</h2>
        <h2>{userTasks.description}</h2>
        </>
    )
})
return(
    <div className="tasks">
        <h1>TaskList</h1>
    {tasks}
    <p>end</p>
    </div>
)
}
export default TaskList;
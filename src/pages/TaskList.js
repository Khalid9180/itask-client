import React from "react";

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
    {tasks}
    </div>
)
}
export default TaskList;


function TaskList(props){
    {props.userTasks.map((task) => {
    return(
        <>
        <h2>{task.title}</h2>
        <h2>{task.description}</h2>
        </>
    )
})}
}
export default TaskList;
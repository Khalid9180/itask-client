import React, {useState} from 'react';
import CreateTask from "../Modals/CreateTask";

function Tasks(){
    const [modal, setModal] = useState(false)
    const toggle = () => {setModal(!modal)}
    const [taskCard, setCard] = useState([])
    const addTask = (element) => {setCard(taskCard.push(element))}
    return(
    <>
        <div className="header">
            <h2>itask</h2>
            <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Add Task</button>
        </div>
        <div className="taskCards">

        </div>
        <CreateTask toggle = {toggle} modal = {modal} newTask={addTask}/>
    </>
    )
}

export default Tasks;
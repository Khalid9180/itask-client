import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function CreateTask({modal, toggle, newTask}){
    const [myTask, setMyTask ] = useState("")
    const [description, setDescription ] = useState("")
    const handleChange = (e) => { const{name, value} = e.target 
if (name === "myTask" ) {setMyTask(value)}else{setDescription(value)}
}
    return(
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Task</ModalHeader>
        <ModalBody>
            <form>
                <div className = "form-group">
                    <label>New Task</label>
                    <input type="text" className = "form-control" value = {myTask} onChange = {handleChange} name = "myTask"/>
                </div>
                <div className = "form-group">
                    <label>Description</label>
                    <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                </div>
            </form>
        </ModalBody>
        <ModalFooter>
        <Button color="primary" onClick={toggle}>Add</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
        </Modal>
    )
}

export default CreateTask;
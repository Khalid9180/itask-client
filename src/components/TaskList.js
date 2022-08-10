import React, {useEffect, useState } from "react";
import CreateTask from "../Modals/CreateTask";


function TaskList(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="header">
        <h2>itask</h2>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Add Task
        </button>
      </div>
      <CreateTask toggle={toggle} modal={modal} getAllTasks={props.getAllTasks}/>
    </>
  );
}

export default TaskList;

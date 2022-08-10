import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";

function CreateTask({ modal, toggle, getAllTasks }) {
  const [taskName, setName] = useState("");
  const [description, setDescription] = useState("");
  const storedToken = localStorage.getItem("authToken");
  const [errorMsg, setErrorMsg] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setName(value);
    } else {
      setDescription(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title: taskName, description };

    axios
      .post(`${process.env.REACT_APP_API_URL}/task`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response.data)
        getAllTasks();

        setName("");
        setDescription("");
      })
      .catch((error) => {
        setErrorMsg("error");
        console.log(error);
      });
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add Task</ModalHeader>
      <ModalBody>
        <form on onSubmit={handleSubmit}>
          <div className="form-group">
            <label>New Task</label>
            <input
              type="text"
              className="form-control"
              value={taskName}
              onChange={handleChange}
              name="taskName"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="5"
              className="form-control"
              value={description}
              onChange={handleChange}
              name="description"
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={(e) => {handleSubmit(e); toggle()}}>
          Add
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default CreateTask;

import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


function EditTask({getAllTasks}) {
  const [modal, setModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("authToken");
  const [taskName, setName] = useState("");
  const [description, setDescription] = useState("");
  const toggle = () => {
    setModal(!modal);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setName(value);
    } else {
      setDescription(value);
    }
  };
  const handleSubmit = () => {
    const requestBody = { title: taskName, description };
    axios
      .post(`${process.env.REACT_APP_API_URL}/task/update/${id}`,requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        getAllTasks()
       navigate("/tasks")
      })
      .catch((error) => {
        setErrorMsg("error");
        console.log(error);
      });
  };

  const getThisTask = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/task/details/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setDescription(response.data.description);
        setName(response.data.title);
        console.log(response.data);
      })
      .catch((error) => {
        setErrorMsg("error");
        console.log(error);
      });
  };

  useEffect(() => {
    getThisTask();
  }, []);
  return (
    <div className="card-wrapper mr-5">
      <div
        className="card-top"
        // style={{ "background-color": colors[index % 5].primaryColor }}
      ></div>
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

      <p className="mt-3">{description}</p>
      <button
        className="btn btn-primary mt-2"
        onClick={() => {
          handleSubmit(id);
        }}
      >
        Save
      </button>
    </div>
  );
}
export default EditTask;

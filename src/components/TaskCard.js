import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TaskCard({ title, description, _id, getAllTasks }) {
  const [modal, setModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("authToken");
  const toggle = () => {
    setModal(!modal);
  };
  const [taskList, setList] = useState([]);

  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/task/delete/${_id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        getAllTasks();
      })
      .catch((error) => {
        setErrorMsg("error");
        console.log(error);
      });
  };

  // this function to be handled when i click on the edit button :

  //   const colors = [
  //     {
  //       primaryColor: "#5D93E1",
  //       secondaryColor: "#ECF3FC",
  //     },
  //     {
  //       primaryColor: "#F9D288",
  //       secondaryColor: "#FEFAF1",
  //     },
  //     {
  //       primaryColor: "#5DC250",
  //       secondaryColor: "#F2FAF1",
  //     },
  //     {
  //       primaryColor: "#F48687",
  //       secondaryColor: "#FDF1F1",
  //     },
  //     {
  //       primaryColor: "#B964F7",
  //       secondaryColor: "#F3F0FD",
  //     },
  //   ];
  return (
    <div className="card-wrapper mr-5">
      <div
        className="card-top"
        // style={{ "background-color": colors[index % 5].primaryColor }}
      ></div>
      <div className="task-holder">
        <span
          className="card-header"
          //   style={{
          //     "background-color": colors[index % 5].secondaryColor,
          //     "border-radius": "10px",
          //   }}
        >
          {title}
        </span>
        <p className="mt-3">{description}</p>
        <button className="btn btn-outline-primary mt-2 me-1" 
        onClick={() => {navigate(`/edit-task/${_id}`)}}>Edit</button>
        <button
          className="btn btn-danger mt-2"
          onClick={() => {
            handleDelete(_id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default TaskCard;

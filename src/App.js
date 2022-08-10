import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import LoginPage from "./Modals/LoginPage";
import SignupPage from "./Modals/SignupPage";
import axios from "axios";
import TaskList1 from "./Modals/TaskList1";
import IsAnon from "./components/IsAnon";
import Navbar from "./components/Navbar";
import CreateTask from "./Modals/CreateTask";
import TaskCard from "./components/TaskCard";
import IsPrivate from "./components/IsPrivate";


function App() {
  const [userTasks, setTasks] = useState([]);
  const storedToken = localStorage.getItem("authToken");
  const getAllTasks = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/task`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })

      .then((response) => {
        setTasks(response.data);
      });
  };
  useEffect(() => {
    getAllTasks();   
  }, []);
  return (
    <div className="container App">
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <IsPrivate>
              <TaskList getAllTasks={getAllTasks} />
              <TaskList1 userTasks={userTasks} getAllTasks={getAllTasks}  />
            </IsPrivate>
          }
        />
        <Route path="/login" element={<IsAnon><LoginPage/>
          </IsAnon>} />
        <Route path="/signup" element={<IsAnon><SignupPage /></IsAnon>} />
      </Routes>
    </div>
  );
}

export default App;

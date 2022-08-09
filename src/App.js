import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from 'react';
import Tasks from './components/Tasks';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import axios from 'axios';
import TaskList from './pages/TaskList';
function App() {
  const[userTasks, setTasks]= useState([])
  const storedToken = localStorage.getItem("authToken")
  const myTasks = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/task`, { headers: { Authorization: `Bearer ${storedToken}` } })

    .then((response) => {
      setTasks(response.data)
    })
  }
  useEffect(() => {myTasks()}, [])
  console.log(userTasks)
  return (
    
    <div className="container App">
    <TaskList userTasks={userTasks} />
    <Tasks />
    <Routes>
      <Route  path="/login" element ={<LoginPage />}/>
      <Route  path="/signup" element ={<SignupPage />}/>
    
    </Routes>
    </div>
  );
}

export default App;

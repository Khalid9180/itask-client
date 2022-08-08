import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="container App">
    <h2><Tasks /></h2>
    </div>
  );
}

export default App;

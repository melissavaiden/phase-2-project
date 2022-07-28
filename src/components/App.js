import React, {useEffect, useState} from 'react';
import {Route} from "react-router-dom"
import TaskList from './TaskList';
import TaskForm from './TaskForm'
import Home from './Home';
import { Switch } from 'react-router-dom';

function App() {
  const [tasks, setTasks] = useState([])

    useEffect(() => {
      fetch('http://localhost:3000/tasks')
    .then((r) => r.json())
    .then((tasks) => setTasks(tasks))
    },[])
    

  return (
    <div className="App">
      <Switch>
      <Route path="/">
        <Home tasks={tasks}/>
      </Route>
      <Route path="/TaskForm">
        <TaskForm />
      </Route>
      <Route path="/TaskList">
        <TaskList />
      </Route>
      </Switch>
    </div>
  );
}

export default App;

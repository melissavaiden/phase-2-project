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

    function handleAddTask(newTask) {
      setTasks([...tasks, newTask])
    }    

  return (
    <div className="App">
      <Switch>
      <Route path="/TaskForm">
        <TaskForm addTask={handleAddTask}/>
      </Route>
      <Route path="/TaskList">
        <TaskList tasks={tasks}/>
      </Route>
      <Route exact path="/">
        <Home tasks={tasks}/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;

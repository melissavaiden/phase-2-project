import React, {useEffect} from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import TaskList from './TaskList';
import TaskForm from './TaskForm'
import Home from './Home';

function App() {

    useEffect(() => {
      fetch('http://localhost:3000/tasks')
    .then((r) => r.json())
    .then((tasks) => console.log(tasks))
    })
    

  return (
    <div className="App">
      <Route path="/">
        <Home />
      </Route>
      <Route path="/TaskForm">
        <TaskForm />
      </Route>
      <Route path="/TaskList">
        <TaskList />
      </Route>
    </div>
  );
}

export default App;

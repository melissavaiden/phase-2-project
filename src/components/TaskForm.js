import React, { useState } from "react";
import NavBar from "./NavBar";

function TaskForm({addTask}) {
    const [newTask, setNewTask] = useState({
        id:"",
        name:"",
        time:"",
        date:"",
    })

    function handleChange(e) {
        setNewTask({
            ...newTask,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit() {
        fetch("http://localhost:3000/tasks", {
            method: "POST",
           headers: {
                "Content-Type": "application/json",
               },
           body: JSON.stringify({
               "name" : newTask.name,
               "time" : newTask.time,
               "date" : newTask.date,
           })
        })
        .then((r) => r.json())
        .then((newTask) => addTask(newTask))
    }

    return (
         <form onSubmit={handleSubmit}>
            <h1 className="pageTitle">Log a New Task</h1>
            <NavBar />
            <label>
                Task Name:
                <select name='name' onChange={handleChange}>
                    <option></option>
                    <option>Cleaning</option>
                    <option>Cooking</option>
                    <option>Homework</option>
                    <option>Sleep</option>
                    <option>Hanging out with friends</option>
                    <option>Excercise</option>
                </select>
                <br></br>
            </label>
            <label>
                Minutes Spent:
                <input type='number' name='time' onChange={handleChange}></input>
            </label>
            <br></br>
            <label>
                Date:
                <input type='date' name='date' onChange={handleChange}></input>
            </label>
            <button type="submit">Submit</button>
          </form>
    )
}

export default TaskForm;
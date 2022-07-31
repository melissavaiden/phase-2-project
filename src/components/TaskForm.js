import { getAllByPlaceholderText } from "@testing-library/react";
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
         <form  className="form" onSubmit={handleSubmit}>
            <h1 className="pageTitle">Log a New Task</h1>
            <NavBar />
            <label className="selection">
                Task Name:
                <select name='name' className="selection" onChange={handleChange}>
                    <option></option>
                    <option>Cleaning</option>
                    <option>Cooking</option>
                    <option>Homework</option>
                    <option>Sleep</option>
                    <option>Hanging out with Friends</option>
                    <option>Exercise</option>
                </select>
                <br></br>
            </label>
            <label className="selection">
                Minutes Spent:
                <input type='number' className="selection" name='time' onChange={handleChange}></input>
            </label>
            <br></br>
            <label className="selection">
                Date:
                <input type='date' className="selection" name='date' onChange={handleChange}></input>
            </label>
            <button type="submit">Submit</button>
          </form>
    )
}

export default TaskForm;
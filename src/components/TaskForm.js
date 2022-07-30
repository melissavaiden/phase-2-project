import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

function TaskForm({addTask}) {
    const [taskName, setTaskName] = useState('Cleaning')
    const [taskTime, setTaskTime] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [newTask, setNewTask] = useState({
        id:"",
        name:"",
        time:"",
        date:"",
    })

    function handleNameChange(event) {
        setTaskName(event.target.value)
        console.log(taskName)
    }

    function handleTimeChange(event) {
        setTaskTime(event.target.value)
        console.log(taskTime)

    }

    function handleDateChange(event) {
        setTaskDate(event.target.value)
        console.log(taskDate)

    }

    useEffect(() => {
        fetch("http://localhost:3000/tasks", {
            method: "POST",
           headers: {
                "Content-Type": "application/json",
               },
           body: JSON.stringify(newTask),
             }); 
    },[newTask])

    function handleSubmit() {
        setNewTask({
            name:taskName,
            time:taskTime,
            date:taskDate
        })
    }

    return (
         <form onSubmit={handleSubmit}>
            <h1 className="pageTitle">Log a New Task</h1>
            <NavBar />
            <label>
                Task Name:
                <select onChange={handleNameChange}>
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
                <input type='number' onChange={handleTimeChange}></input>
            </label>
            <br></br>
            <label>
                Date:
                <input type='date' onChange={handleDateChange}></input>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default TaskForm;
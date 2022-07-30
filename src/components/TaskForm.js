import React, { useState } from "react";
import NavBar from "./NavBar";

function TaskForm({addTask}) {
    const [taskName, setTaskName] = useState('Cleaning')
    const [taskTime, setTaskTime] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [newTask, setNewTask] = useState({
        name:'',
        time:'',
        date:'',
    })

    function handleNameChange(event) {
        setTaskName(event.target.value)
    }

    function handleTimeChange(event) {
        setTaskTime(event.target.value)
    }

    function handleDateChange(event) {
        setTaskDate(event.target.value)
    }

    function handleSubmit(event) {
        setNewTask ({
            name: taskName,
            time: taskTime,
            date: taskDate,
        }
        )
        event.preventDefault();
        fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
          });
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
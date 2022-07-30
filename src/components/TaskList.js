import React from "react";
import NavBar from "./NavBar";
import TaskCard from "./TaskCard";

function TaskList({tasks}) {
    const allTimes = []
    tasks.map((task) => {
        if (task.name === 'Cleaning') {
            allTimes.push(Number(task.time))
        }})


    let sumOfTimes = allTimes.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0)


    return (
        <div>
            <NavBar />
            <TaskCard tasks={tasks}/>
            <div>Time Spent Cleaning: {sumOfTimes} minutes</div>
        </div>
    )
}

export default TaskList;
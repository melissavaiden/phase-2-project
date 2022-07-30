import React from "react";
import NavBar from "./NavBar";
import TaskCard from "./TaskCard";

function TaskList({tasks}) {
    const timeSpentCleaning = tasks.map((task) => {
        const allTimes = []
        if (task.name === 'Cleaning') {
            allTimes.push(Number(task.time))
            console.log(allTimes)
            allTimes.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
            }, 0)
        }
    })

    return (
        <div>
            <NavBar />
            <TaskCard tasks={tasks}/>
            <div>Time Spent Cleaning:</div>
        </div>
    )
}

export default TaskList;
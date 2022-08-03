import React from "react";

function TodayTaskList({tasks}) {
    const fullDate = new Date()
    const day = fullDate.getDate();
    const month = ("0" + (fullDate.getMonth() + 1)).slice(-2)
    const year = fullDate.getFullYear();
    let currentDay = ("0" + (day)) + '/' + (month)  + '/' + (year)

    const task = tasks.map((task) => {
        const dateFormat = task.date.split('-').reverse().join('/')
        if (dateFormat === currentDay) {
            return (
                <div key={task.id} className="taskCard">
                    <div className="taskCardName">{task.name}</div>
                    <div className="taskCardTime">{task.time}min</div>
                    <div className="taskCardDate"> {dateFormat}</div>
                </div>
            )
        }
    })
    return (
        <div>
            {task}
        </div>
    )
}

export default TodayTaskList;
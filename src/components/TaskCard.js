import React from "react";

function TaskCard({tasks}) {
    const task = tasks.map((task) => {
        const dateFormat = task.date.split('-').reverse().join('/')
        return (
            <div key={task.id} className="taskCard">
                <div className="taskCardName">{task.name}</div>
                <div className="taskCardTime">{task.time}min</div>
                <div className="taskCardDate"> {dateFormat}</div>
            </div>
        )
    })
    return (
        <span>
            {task}
        </span>
    )
}

export default TaskCard;
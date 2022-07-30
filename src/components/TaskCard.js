import React from "react";

function TaskCard({tasks}) {
    const task = tasks.map((task) => {
        return (
            <div key={task.id} className="taskCard">
                <div className="taskCardName">{task.name}</div>
                <div className="taskCardTime">{task.time}</div>
                <div className="taskCardDate"> {task.date}</div>
            </div>
        )
    })
    return (
        <div>
            {task}
        </div>
    )
}

export default TaskCard;
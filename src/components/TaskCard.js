import React from "react";

function TaskCard({tasks}) {
    const task = tasks.map((task) => {
        return (
            <div key={task.id} className="taskCard">
                <h2>{task.name} - {task.time}</h2>
                <p>{task.date}</p>
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
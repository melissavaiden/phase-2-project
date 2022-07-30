import React from "react";
import NavBar from "./NavBar";
import TaskCard from "./TaskCard";
import TaskTimeTotals from "./TaskTimeTotals";

function TaskList({tasks}) {
   return (
        <div>
            <h1 className="pageTitle">Task Breakdown</h1>
            <NavBar />
            <TaskTimeTotals tasks={tasks}/>
            <TaskCard tasks={tasks}/>
        </div>
    )
}

export default TaskList;
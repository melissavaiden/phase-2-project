import React from "react";
import DailyTaskList from './DailyTaskList';
import TaskLog from "./TaskLog";
import TaskForm from "./TaskForm";

function NavBar() {
    return (
        <div>
            <a href='./TaskLog'>Running Task List</a>
            <a href='./TaskForm'>Running Task List</a>

        </div>
    )
}

export default NavBar;
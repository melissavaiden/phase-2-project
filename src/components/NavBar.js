import React from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import {NavLink} from "react-router-dom"

function NavBar() {
    return (
        <div className="navBar">
            <NavLink className='navLink' to="/TaskForm">New Task</NavLink>
            <NavLink className='navLink' to="/">Home</NavLink>
            <NavLink className='navLink' to="/TaskList">All The Tasks</NavLink>

        </div>
    )
}

export default NavBar;
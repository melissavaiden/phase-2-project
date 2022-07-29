import React from "react";
import NavBar from "./NavBar"
import TaskCard from "./TaskCard";

function Home({tasks}) {
    return (
        <div className="home">
            <h1 className="pageTitle">Daily Habit Tracker</h1>
            <NavBar />
            <TaskCard tasks={tasks}/>
        </div>
    )
}

export default Home;
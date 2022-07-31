import React from "react";
import NavBar from "./NavBar"
import TodayTaskList from "./TodayTaskList";

function Home({tasks}) {
    const date = Date().split(' ').splice(0, 4).join(' ')
    return (
        <div className="home">
            <h1 className="pageTitle">Daily Habit Tracker</h1>
            <NavBar tasks={tasks}/>
            <h2 className="todaysDate">{date}</h2>
            <TodayTaskList tasks={tasks}/>
        </div>
    )
}

export default Home;
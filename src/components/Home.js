import React from "react";
import NavBar from "./NavBar"
import TaskCard from "./TaskCard";

function Home({tasks}) {
    return (
        <div>
            <NavBar />
            <TaskCard tasks={tasks}/>
        </div>
    )
}

export default Home;
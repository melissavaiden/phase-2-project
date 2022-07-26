import React from "react";

function TaskForm() {
    return (
         <form>
            <label>
                Task Name:
                <select>
                    <option>Cleaning</option>
                    <option>Cooking</option>
                    <option>Homework</option>
                    <option>Sleep</option>
                    <option>Hanging out with friends</option>
                    <option>Excercise</option>
                </select>
                <br></br>
            </label>
            <label>
                Minutes Spent:
                <input type='number'></input>
            </label>
            <br></br>
            <label>
                Date:
                <input type='date'></input>
            </label>
        </form>
    )
}

export default TaskForm;
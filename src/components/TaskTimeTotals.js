import React from "react";
import { PieChart } from "react-minimal-pie-chart"

function TaskTimeAdd({tasks}) {
    const allCleaningTimes = []
    const allExerciseTimes = []
    const allHomeworkTimes = []
    const allCookingTimes = []
    const allSleepTimes = []
    const allFriendTimes = []


    tasks.map((task) => {
        if (task.name === 'Cleaning') {
            allCleaningTimes.push(Number(task.time))
        } else if (task.name === 'Exercise') {
            allExerciseTimes.push(Number(task.time))
        } else if (task.name === 'Homework') {
            allHomeworkTimes.push(Number(task.time))
        } else if (task.name === 'Cooking') {
            allCookingTimes.push(Number(task.time))
        } else if (task.name === 'Sleep') {
            allSleepTimes.push(Number(task.time))
        } else if (task.name === 'Hanging out with Friends') {
            allFriendTimes.push(Number(task.time))
        }
    })



    let sumOfCleaningTimes = allCleaningTimes.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0)

    let sumOfExerciseTimes = allExerciseTimes.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0)
    
    let sumOfHomeworkTimes = allHomeworkTimes.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0)

    let sumOfCookingTimes = allCookingTimes.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0)

    let sumOfSleepTimes = allSleepTimes.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0)

    let sumOfFriendTimes = allFriendTimes.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0)



    return (
        <div>
            <PieChart className="pieChart"
                 data={[
                     { value: sumOfCleaningTimes, color: '#FFEA80' },
                     { value: sumOfExerciseTimes, color: '#FF8080' },
                     { value: sumOfCookingTimes, color: '#9999FF' },
                     { value: sumOfFriendTimes, color: '#66FF99' },
                     { value: sumOfSleepTimes, color: '#FF00FF' },
                     { value: sumOfHomeworkTimes, color: '#E566FF' },

                 ]}/>
            <ul className="timeTotals">
                <li className="cleaning">Cleaning: {sumOfCleaningTimes} minutes</li>
                <li className="exercise">Exercising: {sumOfExerciseTimes} minutes</li>
                <li className="cooking">Cooking: {sumOfCookingTimes} minutes</li>
                <li className="homework">Homework: {sumOfHomeworkTimes} minutes</li>
                <li className="sleeping">Sleeping: {sumOfSleepTimes} minutes</li>
                <li className="friends">Hanging with Friends: {sumOfFriendTimes} minutes</li>
            </ul>
         </div>
    )
}

export default TaskTimeAdd;
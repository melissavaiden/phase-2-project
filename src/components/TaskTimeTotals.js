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
                     { title: 'Helloo', value: sumOfCleaningTimes, color: '#FFEA80' },
                     { title: 'Two', value: sumOfExerciseTimes, color: '#FF8080' },
                     { title: 'Three', value: sumOfCookingTimes, color: '#9999FF' },
                     { title: 'Three', value: sumOfFriendTimes, color: '#66FF99' },
                     { title: 'Three', value: sumOfSleepTimes, color: '#FF00FF' },
                     { title: 'Three', value: sumOfHomeworkTimes, color: '#E566FF' },

                 ]}/>
            <ul className="timeTotals">
                <li>Cleaning: {sumOfCleaningTimes} minutes</li>
                <li>Exercising: {sumOfExerciseTimes} minutes</li>
                <li>Cooking: {sumOfCookingTimes} minutes</li>
                <li>Homework: {sumOfHomeworkTimes} minutes</li>
                <li>Sleeping: {sumOfSleepTimes} minutes</li>
                <li>Hanging with Friends: {sumOfFriendTimes} minutes</li>
            </ul>
         </div>
    )
}

export default TaskTimeAdd;
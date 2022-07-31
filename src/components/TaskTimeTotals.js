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
                     { title: 'One', value: sumOfCleaningTimes, color: '#E38627' },
                     { title: 'Two', value: sumOfExerciseTimes, color: '#C13C37' },
                     { title: 'Three', value: 20, color: '#6A2135' },
                 ]}/>
            <div className="timeTotals">
                <div>Cleaning: {sumOfCleaningTimes} minutes</div>
                <div>Exercising: {sumOfExerciseTimes} minutes</div>
                <div>Cooking: {sumOfCookingTimes} minutes</div>
                <div>Homework: {sumOfHomeworkTimes} minutes</div>
                <div>Sleeping: {sumOfSleepTimes} minutes</div>
                <div>Hanging with Friends: {sumOfFriendTimes} minutes</div>
            </div>
         </div>
    )
}

export default TaskTimeAdd;
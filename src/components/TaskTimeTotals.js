import React from "react";

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
        <div className="timeTotals">
            <div>Time Spent Cleaning: {sumOfCleaningTimes} minutes</div>
            <div>Time Spent Exercising: {sumOfExerciseTimes} minutes</div>
            <div>Time Spent Cooking: {sumOfCookingTimes} minutes</div>
            <div>Time Spent Homework: {sumOfHomeworkTimes} minutes</div>
            <div>Time Spent Sleeping: {sumOfSleepTimes} minutes</div>
            <div>Time Spent Hanging with Friends: {sumOfFriendTimes} minutes</div>
         </div>
    )
}

export default TaskTimeAdd;
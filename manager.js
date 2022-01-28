// // MY TASK MANAGER - TERMINAL

// // SETUP CODE
// const fs = require('fs');
// const readline = require('readline');
// var rl = readline.createInterface(process.stdin, process.stdout);


// let tasks = ["one", "two", "three", "four", "five"]
// let one = ["1. to see all your tasks"];
// let two = ["2. to add a task"];
// let three = ["3. to delete a task"];
// let four = ["4. to mark a task as done"];
// let five = ["5. to Exit the task manager"]

// showtasks = () ==> {
//     console.log(tasks)
// }


// SETUP CODE
const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

//Variables

let mainQuestion = "Welcome to Task Manager :::::>\n Press one of the following choices:\n1 --> to see all your tasks\n2 --> to add a new task\n3 --> to delete a task\n4 --> to mark a task as done\n5 --> to exit the task manager"
let allTasks = [
    {taskName : "Buy" , done : false },
    {taskName : "Eat" , done : false },
    {taskName : "Sleep" , done : false },
    ]
const taskManager = () => {
    rl.question (mainQuestion, (userAnswer) => {
        //Callback
        //rl.close(); 
        
        if (userAnswer === "1"){
            console.log(allTasks)
            taskManager()
        } else if (userAnswer === "2"){
            rl.question("Write the task you want to add: ", (newTask) => {
                allTasks.push({newTask, done:false})
                console.log((newTask) + " has been added to your list")
                console.log(allTasks)
                taskManager()
            })
        }else if (userAnswer === "3"){
            rl.question("Write the index of the task you want to delete", (taskIndex) => {
                allTasks.splice(taskIndex, 1)
                console.log(allTasks)
                taskManager()
            })
        }else if (userAnswer === "4") {
            rl.question("Write the index of the task you want to check", (taskIndex) => {
            allTasks[taskIndex].done = true
            console.log(allTasks)
            taskManager()
            })
        } else if (userAnswer === "5") {
            rl.close()
        }else {
            taskManager()
        }
})}

taskManager()


#! /usr/bin/env node

import inquirer from "inquirer" 

let userAns = await inquirer.prompt({

     name:"words",
     type:"input",
     message:"Please enter yoursentence",


})

let wordCount = userAns.words.trim().split(" ").length

console.log(`your sentence has ${wordCount }`)
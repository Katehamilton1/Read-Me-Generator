// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: `what is the title of your repository`,
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your repository?',
     
    },
   
    {
        type: 'input',
        name: 'install',
        message: `If applicable, describe the steps required to install your project for the Installation section.`,
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage"
    },
    {
        type: 'input',
        name: 'tests',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
       
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Which open source license would you like to use?',
        choices: [
            'MIT',
            'APACHE',
            'GPL',
            'Boost Software License 1.0',
            'BSD 3-Clause License'
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: `Whats your GitHub user Name?`,
    },
    {
        type: "input",
        name: "link",
        message: "What is your github link?"
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email"
    },
    {
        type: "input",
        name: "contributors",
        message: "Please provide the contributing parties"
    },
    {
        type: "input",
        name: "questions",
        message: "instructions on how to reach you with additional questions "
    },


];


function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}


// TODO: Create a function to initialize app
function init() { }
inquirer.prompt(questions).then(function (data) {
    const fileName = 'README.md';
    writeToFile(fileName, generateMarkdown({...data}))
    console.log(data)
});

// Function call to initialize app
init();

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
        message: `please provide installation notes`,
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage"
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
        name: "repo",
        message: "What is your repo link?"
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

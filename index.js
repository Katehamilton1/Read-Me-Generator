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
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your repository title.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your repository?',
        // validate: nameInput => {
        //     if (nameInput) {
        //         return true;
        //     } else {
        //         console.log('Please enter a description of the repository.');
        //         return false;
        //     }
        // }
    },
    {
        type: 'input',
        name: 'github',
        message: `Whats your GitHub user Name?`,
    },

    {
        type: 'confirm',
        name: 'install',
        message: `Do you want to add any installation notes?`,
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
        type: 'confirm',
        name: 'credits',
        message: `Would you like to add any credits to the repo?`,
    },

];


// TODO: Create a function to write README file
// function writeToFile() { }
// let content = generateMarkdown(data);
// fs.writeFile(fileName, content, function (error) {
//     if (error) {
//         return console.log(error)
//     }
//     console.log('success')
// });

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

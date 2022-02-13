const fs = require('fs')

const inquirer = require('inquirer')

const createMarkDown = require()

// creating questions to be askd 

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter project title:',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Provide a detailed discription of your project:',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Provide detailed instructions on how to install the project:',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Enter clear instructions on how the project is used:',
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Provide guidelines for developers on how to contribute to the project:',
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'Provide tests for your application and examples on how to run them:',
        },
        {
            type: 'list',
            name: 'License',
            message: 'Choose license used:',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Enter contact email:',
            
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter Github username:',
        }
    ])
};

questions().then(answers => console.log(answers))
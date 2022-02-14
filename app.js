//Global constant 
const fs = require("fs")

const inquirer = require("inquirer")

const createMarkdown = require("./utils/createMarkdown")

const util = require('util')

// creating questions that will displayed and prompt the user to answer

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter project title:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a detailed discription of your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide detailed instructions on how to install the project:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter clear instructions on how the project is used:',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide guidelines for developers on how to contribute to the project:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide tests for your application and examples on how to run them:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose license used:',
            choices: ['MIT', 'ISC', 'None'],
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter contact email:',
            
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter Github username:',
        }
    ])
};



const generateReadMe = util.promisify(fs.writeFile);


const init = () => {
    questions ()
    .then((answers)=>generateReadMe("README.md", createMarkdown(answers)))
    .catch((err) => console.log(err));
    };


init();
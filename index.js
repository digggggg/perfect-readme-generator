
const inquirer = require("inquirer")

const questions = [
    {
    type: 'input',
    message: 'What is your Project Title?',
    name: 'title',
    },
    {
    type: 'input',
    message: 'Describe your project...',
    name: 'description',
    },
    {
    type: 'input',
    message: 'How to install your project?',
    name: 'installation',
    },
    {
    type: 'input',
    message: 'How do you use your project?',
    name: 'usage',
    },
    {
    type: 'input',
    message: 'Who contributed to your project?',
    name: 'contributing',
    },
    {
    type: 'input',
    message: 'Write some test cases for your project...',
    name: 'tests',
    },
    {
    type: 'list',
    message: 'Pick a license for your project...',
    name: 'license',
    },
    {
    type: 'input',
    message: 'What is your github username?',
    name: 'git-username',
    },
    {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

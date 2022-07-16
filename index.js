
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
    name: 'desc',
    },
    {
    type: 'input',
    message: 'How to install your project?',
    name: 'install',
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
    name: 'gitUser',
    },
    {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
    },
];

const fileName = "README.md"

inquirer
.prompt(questions)
.then((response) => {
    var title = response.title
    var descr = response.desc
    var install = response.install
    var usage = response.usage
    var people = response.contributing
    var tests = response.tests
    var license = response.license
    var gitUser = response.gitUser
    var email = response.email
})

const data = 
`# ${title}

## Description

${desc}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#Questions)

## Installation

${install}

## Usage

${usage}

## Contributing

${people}

## Tests

${tests}

## License

${license}

## Questions

${gitUser} ${email}
`
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();

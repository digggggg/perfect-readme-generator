const fs = require('fs')
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
    choices: ['MIT', 'Apache v2.0', 'GNU v3.0', 'MPL v2.0'],
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
    var licenseDesc = ""

    function licenseBadge(license){
        if (license === 'MIT'){
            licenseDesc = '(https://mit-license.org/)'
            return `![${license}](https://img.shields.io/badge/MIT-License-blue)`
        }
        if (license === "Apache v2.0"){
            licenseDesc = '(https://apache.org/licenses/LICENSE-2.0)'
            return `![${license}](https://img.shields.io/badge/Apache%20v2.0-License-blue)`
        }
        if (license === "GNU v3.0"){
            licenseDesc = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
            return `![${license}](https://img.shields.io/badge/GNU%20v3.0-License-blue)`
        }
        if (license === "MPL v2.0"){
            licenseDesc = 'https://www.mozilla.org/en-US/MPL/2.0/'
            return `![${license}](https://img.shields.io/badge/MPL%20v2.0-License-blue)`
        }
    }
    const fileName = "README.md"
    const data = 
`# ${licenseBadge(license)} ${title}

## Description

${descr}

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

${license} ${licenseDesc}

## Questions

${gitUser} ${email}
`


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err){
            return console.error(err)
        }
        console.log("File saved successfully!")
    }
    )
}

// TODO: Create a function to initialize app
function init() {
    writeToFile(fileName, data);
}

// Function call to initialize app
init();

})



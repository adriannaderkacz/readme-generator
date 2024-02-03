const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application? Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can other developers contribute to your project? Provide guidelines for how they can make contributions.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can your project be tested? Provide examples of how to run these tests.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'Unlicense', 'BSD 2-clause', 'LGPLv3', 'AGPLv3', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?,
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('README.md has been generated!');
      });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
      const markdownContent = generateMarkdown(answers);
      writeToFile('README.md', markdownContent);
    });
}

// function call to initialize program
init();


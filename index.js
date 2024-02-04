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
        message: 'Provide brief description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can someone install and set up your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Explain how to use your application.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can other developers contribute to your project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can your project be tested?',
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
        message: 'Enter your GitHub username?',
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


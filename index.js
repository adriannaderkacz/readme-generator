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
        message: 'To be added',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'To be added',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'To be added',
    },
    {
        type: 'input',
        name: 'test',
        message: 'To be added',
    },
      // TODO: Add more questions here
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


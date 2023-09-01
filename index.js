const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter your project title:',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter your project description:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter installation instructions:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Enter usage info:',
            name: 'usage',
        },

    ])
}
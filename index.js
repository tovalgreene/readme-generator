// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your project?',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Please list any credits you may have.',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Please enter your license for this project.',
  },
  {
    type: 'input',
    name: 'badges',
    message: 'Please insert any badges you may have for this project.',
  },
  {
    type: 'input',
    name: 'features',
    message: 'What are the features of this project?',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'How can one contribute to this project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please insert necessary tests for this project.',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md successfully created!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();

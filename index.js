const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install your project?',
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
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'Other'],
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
  {
    type: 'checkbox',
    name: 'badges',
    message: 'Select badges for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
];

function writeToFile(fileName, data) {
  fs.promises.writeFile(fileName, data)
    .then(() => console.log('README.md successfully created!'))
    .catch(console.error);
}

async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const readmeContent = generateMarkdown(answers);
    await writeToFile('README.md', readmeContent);
  } catch (error) {
    console.error(error);
  }
}

init();
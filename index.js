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

function generateMarkdown(data) {
  const tableOfContents = `
## Table of Contents
${data.installation ? '- [Installation](#installation)' : ''}
${data.usage ? '- [Usage](#usage)' : ''}
${data.credits ? '- [Credits](#credits)' : ''}
- [License](#license)
${data.badges.length ? '- [Badges](#badges)' : ''}
${data.features ? '- [Features](#features)' : ''}
${data.contribute ? '- [How to Contribute](#how-to-contribute)' : ''}
${data.tests ? '- [Tests](#tests)' : ''}
`;

  return `# ${data.title}

## Description

${data.description}

${tableOfContents}

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${data.license ? `This project is licensed under the ${data.license} license.` : ''}

## Badges

${data.badges.join(' ')}

## Features

${data.features}

## How to Contribute

${data.contribute}

## Tests

${data.tests}

---

## Contact Information

- Email: ${data.email}
- GitHub: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;

init();
function renderLicenseBadge(license) {
  if (license) {
    switch (license) {
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Apache 2.0':
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      default:
        return '';
    }
  }
  return '';
}

function renderLicenseLink(license) {
  if (license) {
    switch (license) {
      case 'MIT':
        return 'https://opensource.org/licenses/MIT';
      case 'Apache 2.0':
        return 'https://opensource.org/licenses/Apache-2.0';
      default:
        return '';
    }
  }
  return '';
}

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

${licenseSection}

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${licenseBadge}

This project is licensed under the [${data.license}](${renderLicenseLink(data.license)}) license.

## Badges

${licenseBadge}

## Features

${data.features}

## How to Contribute

${data.contribute}

## Tests

${data.tests}
`;
}

module.exports = generateMarkdown;

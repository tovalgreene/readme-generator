// Consolidating the logic for rendering license badge and link into a single object
const licenses = {
  'MIT': {
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    link: 'https://opensource.org/licenses/MIT'
  },
  'Apache 2.0': {
    badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    link: 'https://opensource.org/licenses/Apache-2.0'
  }
};

// Simplified function to render license badge
function renderLicenseBadge(license) {
  return license && licenses[license] ? licenses[license].badge : '';
}

// Simplified function to render license link
function renderLicenseLink(license) {
  return license && licenses[license] ? licenses[license].link : '';
}

// Function to generate markdown
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);

  // Template literal for markdown content
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

## License

${licenseBadge}

This project is licensed under the [${data.license}](${renderLicenseLink(data.license)}) license.

## Badges

${licenseBadge}

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## Features

${data.features}

## How to Contribute

${data.contribute}

## Tests

${data.tests}
`;
}

module.exports = generateMarkdown;

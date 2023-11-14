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

function renderLicenseBadge(license) {
  return license && licenses[license] ? licenses[license].badge : '';
}

function renderLicenseLink(license) {
  return license && licenses[license] ? licenses[license].link : '';
}

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  
  // Dynamically generating the table of contents
  const tableOfContents = [
    data.installation && '- [Installation](#installation)',
    data.usage && '- [Usage](#usage)',
    data.credits && '- [Credits](#credits)',
    data.license && '- [License](#license)',
    data.badges.length && '- [Badges](#badges)',
    data.features && '- [Features](#features)',
    data.contribute && '- [How to Contribute](#how-to-contribute)',
    data.tests && '- [Tests](#tests)',
    '- [Contact](#contact)'
  ].filter(Boolean).join('\n');

  // Markdown content with dynamic table of contents and other sections
  return `# ${data.title}

## Description

${data.description}

## Table of Contents
${tableOfContents}

## Installation

${data.installation || ''}

## Usage

${data.usage || ''}

## Credits

${data.credits || ''}

## License

${licenseBadge}

This project is licensed under the [${data.license}](${renderLicenseLink(data.license)}) license.

## Badges

${data.badges.join(' ')}

## Features

${data.features || ''}

## How to Contribute

${data.contribute || ''}

## Tests

${data.tests || ''}

---

## Contact Information

- Email: ${data.email || ''}
- GitHub: [${data.github || ''}](https://github.com/${data.github || ''})
`;
}

module.exports = generateMarkdown;

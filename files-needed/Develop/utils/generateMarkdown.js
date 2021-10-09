// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === undefined) {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return `[license](https://opensource.org/licenses/MIT)`;
  } else if (license === undefined) {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'MIT') {
    return `This project uses the MIT license. To see the full license, click here: ${renderLicenseLink(license)}`;
  } else if (license === undefined) {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation Instructions](#installation-instructions)
  * [Usage Information](#usage-information)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Test Instructions](#test-instructions)
  * [License](#license)
  * [Questions](#questions)
  
  ## Description 
  ${data.description}

  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  ${data.usage}

  ## Contribution Guidelines
  ${data.contribution}

  ## Test Instructions
  ${data.test}

  ## License 
  ${renderLicenseBadge(data.license)}
  
  ${renderLicenseSection(data.license)}
  
  Copyright 2021 [${data.github}](https://github.com/${data.github})

  ## Questions?
  If you have any questions, feel free to reach out:
  [Github](https://github.com/${data.github}) or
  [email](${data.email})
`;
}

module.exports = generateMarkdown;

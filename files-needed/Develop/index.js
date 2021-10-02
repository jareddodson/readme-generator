// TODO: Include packages needed for this application
const inquirer = require('requirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is your project's title? (Required)",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter your project's title!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project.',
            when: ({ confirmDescription }) => confirmDescription
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation instructions for your project.',
            when: ({ confirmInstallation }) => confirmInstallation
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Pleaase enter usage information.',
            when: ({ confirmUsage }) => confirmUsage
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter contribution guidelines:',
            when: ({ confirmContribution }) => confirmContribution
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please enter test instructions:',
            when: ({ confirmTest }) => confirmTest
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license did you use for your project?',
            choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero', 'GNU General', 'GNU Lesser General', 'Mozilla Public License 2.0', 'The Unlicense']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub Username. (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your Email. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your Email!');
                    return false;
                }
            }
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

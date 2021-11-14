//node modules
const inquirer = require('inquirer');
const fs = require('fs');

//prompt question
inquirer
    .prompt([
        {
            type: 'input',
            message: " What is your github account user name?",
            name: 'username'
        },
        {
            type: 'input',
            message: " What is your user email?",
            name: 'email'
        },
        {
            type: 'input',
            message: " What is your user name?",
            name: 'username'
        },
        {
            type: 'input',
            message: " What is your user name?",
            name: 'username'
        },

    ])
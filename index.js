//node modules
const inquirer = require('inquirer');
const fs = require('fs');

//prompt question
inquirer
    .prompt([

        {
            type: 'input',
            message: " What is the title?",
            name: 'title'
        },
        {
            type: 'input',
            message: " Description of your github?",
            name: 'description'
        },
        {
            type: 'input',
            message: " What is the user story?",
            name: 'userstory'
        },
        {
            type: 'input',
            message: " How to install?",
            name: 'install'
        },

        {
            type: 'input',
            message: " How to get support?",
            name: 'support'
        },

        {
            type: 'input',
            message: " What is your github account user name?",
            name: 'username'
        },
        {
            type: 'input',
            message: " What is your email?",
            name: 'email'
        },
        {
            type: 'input',
            message: " What is your user Linkedin?",
            name: 'Linkedin'
        },

    ]).then(
        (
            {
                title,
                description,
                userstory,
                install,
                support,
                username,
                email,
                Linkedin,


                
            }
        ) =>
        {
            const template = `# ${title}
            
            *[description](#description)
            *[userstory](#userstory)
            *[install](#install)
            *[support](#support)
            
            #Description
            ${description}

            ##User Story
            ${userstory}

            ##Install
            ${install}

            ##Get Support
            ${support}

            #Contact Me
            *Github :${username}
            *E-mail :${email}
            *Linkedin :${Linkedin}
            `;

            //Create the new readMe by using the fs
            createNewFile(title, template);
        }
    );
        function createNewFile(fileName, data)
        {
            fs.writeFile(`ReadMe.md`, data, (error) => {
                if(error)
                {
                    console.log(error)
                }
                else
                {
                    console.log('New readMe file has successfully generated!');
                }
            })
            
        }
    
// require classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// require our packages
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs')
const employees = [];
const outputdir = path.resolve(__dirname, 'output');
const outputPath = path.join(outputdir, 'teamMembers.html');
const create = require('./src/html')
const generateHTML = require('./src/html')



menu = () => {
    //create seperate functions for each class creation
    function managerQuestions() {
        inquirer.prompt([{
            type: 'input',
            name: 'managerName',
            message: 'What is the team manager\'s name?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the team manager\'s id?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the team manager\'s email?'
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the team manager\'s office number?'
        }
        ])
            .then(function (answers) {
                const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
                console.log(answers);
                employees.push(manager);
                addMembers();
            })
    }

    addMembers = () => {
        inquirer.prompt([{
            type: 'list',
            name: 'addMembers',
            message: 'Which type of team member would you like to add? (Use arrow keys)',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members']
        }
        ])
            .then(function (answers) {
                switch (answers.addMembers) {
                    case 'Engineer':
                        engineerQuestions();
                        break;
                    case 'Intern':
                        internQuestions();
                        break;
                    default:
                        generateHTML();
                }
            })
    }

    engineerQuestions = () => {
        inquirer.prompt([{
            type: 'input',
            name: 'engineerName',
            message: 'What is your engineer\'s name?'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is your engineer\'s id?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is your engineer\'s email?'
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is your engineer\'s Github username?'
        }
        ])
            .then(function (answers) {
                const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
                console.log(answers);
                employees.push(engineer);
                addMembers();
            })
    }

    internQuestions = () => {
        inquirer.prompt([{
            type: 'input',
            name: 'internName',
            message: 'What is your intern\'s name?'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is your intern\'s id?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is your intern\'s email?'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is your intern\'s school?'
        }
        ])
            .then(function (answers) {
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                console.log(answers);
                employees.push(intern);
                addMembers();
            })
    }

    managerQuestions();

    createHtml = () => {
        fs.writeFile(outputPath, generateHTML(employees), "utf-8");
        
    }

}








menu();
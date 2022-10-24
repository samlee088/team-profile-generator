const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const generateFile = require('./src/generateFile');


/* This is the question prompt to determine which job type the next extrant is going to be, also determinig the prompt questions */
const questionClass = [
    {
        type: 'list',
        message: 'What is the job type?',
        name: 'jobType',
        choices: ['Engineer','Intern'],

    },

]


/* These are the generic questions that apply to all employees */
const questions = [
    {
        type:'input',
        message: 'What is the employees name? ',
        name:'name',

    },
    {
        type:'input',
        message:'What is the employees id?',
        name: 'id',

    },
    {
        type:'input',
        message:'What is the employees email address?',
        name:'email',

    },

]


/* These are the jobtype specific questions */
const questionManager = [
    {
        type:'input',
        message:'What is the office number?',
        name:'officeNumber',

    },
]

const questionEngineer = [
    {
        type: 'input',
        message : 'What is the github account name?',
        name:'github',
        
    },
]
   
const questionIntern = [
    {
        type: 'input',
        message: 'Where do they go to school?',
        name: 'school',

    },
]

/* This is the prompt to determine if another employee is to be entered in */
const questionAdd = [
    {
        type: 'list',
        message: 'Would you like to add in another employee?',
        name: 'addTrigger',
        choices: ['Yes','No'],

    },

]


/* This is the function that starts the whole sequence. The prompts for the employee data are run through, and then the trigger to determine if there are more employees are called*/

function init() {

    console.log("Please enter Manager information");
    inquirer
    .prompt(questions.concat(questionManager))
    .then((response)=> {
        const {name, id , email, officeNumber} = response; 
        const newManager = new Manager(name, id, email,officeNumber);  
        generateFile.managerCard(newManager);
       
        callTrigger();


    });
};

function addTeam() {

    inquirer
    .prompt(questionClass)
    .then( (answers) => {

            switch(answers.jobType) {
            
            case ('Manager'):
                inquirer
                .prompt(questions.concat(questionManager))
                .then((response) => {
                    const {name, id , email, officeNumber} = response; 
                    const newManager = new Manager(name, id, email,officeNumber);  
                    generateFile.managerCard(newManager);
                   
                    callTrigger();

                });
                break;
            case ('Engineer'):
                inquirer
                .prompt(questions.concat(questionEngineer))
                .then((response) => {
                   const {name, id, email, github} = response;
                   const newEngineer = new Engineer(name, id, email, github);
                   generateFile.engineerCard(newEngineer);

                   callTrigger();
                });

                break;

            case ('Intern'):
                inquirer
                .prompt(questions.concat(questionIntern))
                .then((response) => {
                const {name, id, email, school} = response;
                const newIntern = new Intern(name, id, email, school);
                generateFile.internCard(newIntern);
                
                callTrigger();

                });
            
                break;

            default :
            break;
            }
        });
};

/* This is the function that will either allow the user to enter in another employee, or to create the html */
function callTrigger() {
    inquirer 
    .prompt(questionAdd)
    .then((response) => {
    if (response.addTrigger ==='Yes') {
        addTeam();
    } 
    else {
        
        

        fs.writeFile('final.html',  generateFile.generateHTML(), (err) => {
        err ? console.err('error') : console.log('Great Success~! :)');
        } )

        
        
        
    }
})};


init();   












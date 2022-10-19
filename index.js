const fs = require('fs');
const inquirer = require('inquirer');
const internal = require('stream');
const { inherits } = require('util');



const questionClass = [
    {
        type: 'list',
        message: 'What is the job type?',
        name: 'jobType',
        choices: ['Manager','Engineer','Intern'],

    },

]

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

const questionAdd = [
    {
        type: 'list',
        messsage: 'Would you like to add in another employee?',
        name: 'addTrigger',
        choices: ['Yes','No'],

    },

]

let classArray = [];


function callTrigger() {
    inquirer 
                .prompt(questionAdd)
                .then((response) => {
                if (response.addTrigger ==='Yes') {
                   init();
                } 
                else {
                    return;
                }
})};

function init() {

    
    inquirer
    .prompt(questionClass)
    .then( (answers) => {
        // classArray.push(answers);
        console.log(classArray);

            switch(answers.jobType) {
            
            case ('Manager'):
                inquirer
                .prompt(questions.concat(questionManager))
                .then((response) => {
                    classArray.push(response);
                    classArray[classArray.length-1]['jobType']='manager';
                    console.log(classArray);
                    callTrigger();

                });
                break;
            case ('Engineer'):
                inquirer
                .prompt(questions.concat(questionEngineer))
                .then((response) => {
                    classArray.push(response);
                    classArray[classArray.length-1]['jobtype'] = 'Engineer';
                    console.log(classArray);
                    callTrigger();
                });

                break;

            case ('Intern'):
                inquirer
                .prompt(questions.concat(questionIntern))
                .then((response) => {
                    response['jobtype'] = 'Intern';
                    classArray.push(response)
                    console.log(classArray);
                    callTrigger();

                });
            
                break;

            default :
            //go to next function of the order
            break;
            }



        });   
}



init();





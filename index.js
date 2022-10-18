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


let classArray = [];


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
            });

                break;


        case ('Engineer'):
            inquirer
            .prompt(questions.concat(questionEngineer))
            .then((response) => {
                classArray.push(response);
                classArray[classArray.length]['jobtype'] = 'Engineer';
                console.log(classArray);
            });

            break;

        case ('Intern'):
            inquirer
            .prompt(questions.concat(questionIntern))
            .then((response) => {
                response['jobtype'] = 'Intern';
                classArray.push(response)
                console.log(classArray);


            });
         
            break;

        default :
        //go to next function of the order
        break;
    }
});
}



init();





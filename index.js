const fs = require('fs');
const inquirer = require('inquirer');
const internal = require('stream');
const { inherits } = require('util');


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
    {
        type:'list',
        message:'Please select from work type class',
        name: 'jobClass',
        choices:['Manager', 'Engineer', 'Intern'],

    }
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
   
const quesionIntern = [
    {
        type: 'input',
        message: 'Where do they go to school?',
        name: 'school',

    },
]


let classArray = [];


function init() {
    inquirer
    .prompt(questions)
    .then( (answers) => {
        classArray.push(answers);
    switch(answers.jobClass) {
        
        case ('Manager'):
            inquirer
            .prompt(questionManager)
            .then((response) => {
                console.log(response);
                classArray[(classArray.length)-1] = [classArray[classArray.length-1],response];
                console.log(classArray);
                console.log(response);
            });
                break;

        case ('Engineer'):
            engineer();
            break;
        case ('Intern'):
            intern();
            break;

        default :
        //go to next function of the order
        break;
    }
});
}



init();





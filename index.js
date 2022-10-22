const fs = require('fs');
const inquirer = require('inquirer');
const internal = require('stream');
const { inherits } = require('util');
const Manager = require('./dist/Manager');


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
                    createClass();
                    console.log(classArray);
                    return classArray;
                }
})};

async function init() {

    
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
};

//pass this through to the classes through an multidimensional array object
//take the array object and pass through the arrays with the classes
//create the classes per unit, create html per unit, append or push to array
//take the html with the appended, or pushed array and then create html file






      
        
        
        //have classArray filled with prompt responses as a multidimensional object array

//create recursive formula?
const resultsArray = [];

async function createClass() {

const responses = await init();

    if(classArray.length === 0) {
        return ;
    }

    // do something
    //take first value, run through class function, create class, push through to array collection for HTML, and then paste in html
    else if (classArray[0]['jobtype']==='manager') {
        const newManager = new Manager(classArray[0]);

        resultsArray .push(newManager)

    classArray.shift();
    createClass(classArray);

    }
    
    // run next iteration, array splice away first value

    return resultsArray;
}




     
// createClass();
init();   












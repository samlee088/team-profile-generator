const { Console } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const internal = require('stream');
const { inherits } = require('util');
const Employee = require('./dist/Employee');
const Manager = require('./dist/Manager');
const Intern = require('./dist/Intern');
const generateFile = require('./src/generateFile');
const Engineer = require('./dist/Engineer');


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

function callTrigger() {
    inquirer 
                .prompt(questionAdd)
                .then((response) => {
                if (response.addTrigger ==='Yes') {
                   init();
                } 
                else {
                    
                   

                    fs.appendFile('final.html',  generateFile.generateHTML(), (err) => {
                    err ? console.err('error') : console.log('data');
                    } )

                   
                   
                    
                }
})};




async function init() {

    
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
                    console.log(newManager); 
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
                   console.log(newEngineer);
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
                console.log(newIntern);
                generateFile.internCard(newIntern);
                
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

// async function createClass() {

// const responses = await init();

//     if(classArray.length === 0) {
//         return ;
//     }

//     // do something
//     //take first value, run through class function, create class, push through to array collection for HTML, and then paste in html
//     else if (classArray[0]['jobtype']==='manager') {arguments
//         const testUser =  new Employee('tom', 234,'234sldkfj@sldjf.com'); 
//         console.log(classArray, testUser); 
//     //     const newManager = new Manager(classArray[0].name, classArray[0].id, classArray[0].email,classArray[0].officeNumber);
//     //     // const newManager1 = new Manager('tom', 234, 'sdlfjd@sdljs.com', 1234);
//     //     resultsArray .push(newManager)

//     // classArray.shift();
//     // createClass(classArray);

//     }
    
//     // run next iteration, array splice away first value

//     return resultsArray;
// }




     
// createClass();
init();   












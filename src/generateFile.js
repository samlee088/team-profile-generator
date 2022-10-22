
// const appendToSection = document.getElementsByClassName('introduction');







//This is the base structure for the html

`

`

//////////////////////////////////////////////////////

const resultsArray = [];
let htmlData = ' ';


function managerCard(data) {

const newManagerCard = 
`
<div class="card" style="width: 18rem;">
<div class="card-header">
${data.name}
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item"> role: ${data.role} </li>
<li class="list-group-item"> id : ${data.id} </li>
<li class="list-group-item"> email: ${data.email} </li>
<li class="list-group-item"> office number : ${data.officeNumber} </li>
</ul>
</div>
`
resultsArray.push(newManagerCard);
console.log(resultsArray);
}

function engineerCard(data) {

    const newEngineerCard = 
        `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${data.name}
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"> role: ${data.role} </li>
        <li class="list-group-item"> id : ${data.id} </li>
        <li class="list-group-item"> email: ${data.email} </li>
        <li class="list-group-item"> github : ${data.github} </li>
        </ul>
        </div>
        `
    resultsArray.push(newEngineerCard)
    console.log(resultsArray);
}

function internCard(data) {

const newInternCard = 
`
<div class="card" style="width: 18rem;">
<div class="card-header">
${data.name}
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item"> role: ${data.role} </li>
<li class="list-group-item"> id : ${data.id} </li>
<li class="list-group-item"> email: ${data.email} </li>
<li class="list-group-item"> school : ${data.school} </li>
</ul>
</div>
`
resultsArray.push(newInternCard);
console.log(resultsArray);


}





function generateHTML() {
    for (i=0; i < resultsArray.length; i++) {

        htmlData = htmlData + resultsArray[i];
    }

        const finalHTML = 
        `
        <!DOCTYPE html>
        <html lang-="en">
        
        
        <head>
        <meta charset = "UTF-8">
        <meta name="viewport" content = "width-device-width, initial-scale=1.0">
        <link rel="stylesheet" tyle="text/css" href="./lib/style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        </head>
        
        
        
        <header></header>
        <Title>Team Profile Generator</Title>
        </header>
        
        <body>
        
        <h1>My Team</h1>
        
        
        
        <main>
            <div class="information">
                ${htmlData}
            </div>
        
        
        </main>
        </body>
        <footer>
        </footer>
        </html>
        `

        return finalHTML;

    
}







module.exports = {
    managerCard,
    engineerCard,
    internCard,
    generateHTML,

}









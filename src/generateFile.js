
const resultsArray = [];
let htmlData = ' ';


/* Functions that create the html data for the employee cards to be displayed */
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
<li class="list-group-item"> email: <a href = 'mailto:${data.email}'>${data.email}</a> </li>
<li class="list-group-item"> office number : ${data.officeNumber} </li>
</ul>
</div>
`
resultsArray.push(newManagerCard);
console.log(resultsArray);
return newManagerCard;

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
        <li class="list-group-item"> email: <a href = 'mailto:${data.email}'>${data.email}</a> </li>
        <li class="list-group-item"> github : <a href = 'https://github.com/${data.github}'>${data.github}</a> </li>
        </ul>
        </div>
        `
    resultsArray.push(newEngineerCard)
    console.log(resultsArray);
    return newEngineerCard;
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
<li class="list-group-item"> email: <a href = 'mailto:${data.email}'>${data.email}</a> </li>
<li class="list-group-item"> school : ${data.school} </li>
</ul>
</div>
`
resultsArray.push(newInternCard);
console.log(resultsArray);
return newInternCard;

}




/* Function that creates the final html once the user is done with entering in new employees */
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
        <link rel="stylesheet" tyle="text/css" href="./dist/style.css">
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









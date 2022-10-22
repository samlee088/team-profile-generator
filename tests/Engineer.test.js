const Engineer = require('../lib/Engineer');
const createEngineerCard = require('../src/generateFile');



    describe("Engineer", () => {
        it("should create an Engineer  class", () => {

            const testEngineer = new Engineer('John Doe','117','test@email.com','JohnDoe117');

            expect(testEngineer.github).toEqual('JohnDoe117');

     

        });
    });






    describe("createEngineerCard", () => {
        it("should create an Engineer card data for the HTML output", () => {

            const testEngineerCard = createEngineerCard.engineerCard({name:'John Doe', id:'117', email:'johndoe@email.com', github:'johndoe117', role:'Engineer'});

            const testEngineerCardOutput = 

        `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
        John Doe
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"> role: Engineer </li>
        <li class="list-group-item"> id : 117 </li>
        <li class="list-group-item"> email: <a href = 'mailto:johndoe@email.com'>johndoe@email.com</a> </li>
        <li class="list-group-item"> github : <a href = 'https://github.com/johndoe117'>johndoe117</a> </li>
        </ul>
        </div>
        `

            expect(testEngineerCard).toEqual(testEngineerCardOutput);

        });
    });




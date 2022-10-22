const Intern = require('../lib/Intern');
const createInternCard = require('../src/generateFile');



    describe("Intern", () => {
        it("should create an Engineer  class", () => {

            const testIntern = new Intern('John Doe','117','test@email.com','Random School');

            expect(testIntern.school).toEqual('Random School');

     

        });
    });






    describe("createInternCard", () => {
        it("should create an Engineer card data for the HTML output", () => {

            const testInternCard = createInternCard.internCard({name:'John Doe', id:'117', email:'johndoe@email.com', github:'johndoe117', school:'Random School',role:'Intern'});

            const testInternCardOutput = 
`
<div class="card" style="width: 18rem;">
<div class="card-header">
John Doe
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item"> role: Intern </li>
<li class="list-group-item"> id : 117 </li>
<li class="list-group-item"> email: <a href = 'mailto:johndoe@email.com'>johndoe@email.com</a> </li>
<li class="list-group-item"> school : Random School </li>
</ul>
</div>
`

            expect(testInternCard).toEqual(testInternCardOutput);

        });
    });




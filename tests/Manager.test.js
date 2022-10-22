const Manager = require('../lib/Manager');
const GenerateManagerCard = require('../src/generateFile');


describe('Manager', ()=> {  
    it("Should create a Manager card depdning on prompt inputs", () => {

        const testManager = new Manager('John Doe','117','johndoe@email.com','343');

        expect(testManager.name).toEqual('John Doe');
        expect(testManager.id).toEqual('117');
        expect(testManager.email).toEqual('johndoe@email.com');
        expect(testManager.officeNumber).toEqual('343');


    });
});


describe('ManagerCard', () => {
    it('Should generate Managar card for html output', () => {

        const newManagerCard = GenerateManagerCard.managerCard({name:'John Doe', id:'117', email:'johndoe@email.com', officeNumber:'343', role:'Manager' });

        const newManagerCardOutput = 
`
<div class="card" style="width: 18rem;">
<div class="card-header">
John Doe
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item"> role: Manager </li>
<li class="list-group-item"> id : 117 </li>
<li class="list-group-item"> email: <a href = 'mailto:johndoe@email.com'>johndoe@email.com</a> </li>
<li class="list-group-item"> office number : 343 </li>
</ul>
</div>
`
        
        expect(newManagerCard).toEqual(newManagerCardOutput);



    })
})
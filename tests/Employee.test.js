const Employee = require('../lib/Employee');


describe("Employee", () => {
    describe("generateEmployee", () => {
        it("should create an employee  class", () => {

           const testEmployee = new Employee('John Doe','117','johndoe@email.com');



            expect(testEmployee.name).toEqual('John Doe');
            expect(testEmployee.id).toEqual('117');
            expect(testEmployee.email).toEqual('johndoe@email.com')
            

        })
    })
})







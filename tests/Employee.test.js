const createSection = require('../generateFile');


describe("createSection", () => {
    describe("generateManager", () => {
        it("should create an instance of the manager html to append to main document", () => {

            const testManager = 
            `
            <div class="card" style="width: 18rem;">
            <div class="card-header">
            Example 1
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            </div>
            `

            expect(result).toEqual(testManager);

        })
    })
})







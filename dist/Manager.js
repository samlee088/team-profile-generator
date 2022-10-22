const Employee = require('./Employee');


class Manager extends Employee {

    constructor(data) {
        this.officeNumber=data[officeNumber];
    }
   
   super(data) 

   getOfficeNumber() {
    return this.officeNumber;
   }
    getRole() {
    this.role = 'Manager';
    }

}

module.exports = Manager


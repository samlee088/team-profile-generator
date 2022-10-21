class  Employee {

    constructor(data) {

        this.name=data['name'];
        this.id=data['id'];
        this.email=data['email'];

    }

    getName()
    getID()
    getEmail()
    getRole()

}

class Manager extends Employee {

    constructor(data) {
        this.officeNumber=data[officeNumber];
    }
   
   super(data) 

   
    getRole() {
    this.role = 'Manager';
    }

}

class Engineer extends Employee {

    constructor(github) {
        this.github = github
    }

    getRole()

}

class Inter extends Employee {

    constructor(school) {
        this.school = school;
    }

    getRole()

}




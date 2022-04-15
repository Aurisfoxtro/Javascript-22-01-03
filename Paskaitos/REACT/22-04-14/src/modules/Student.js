import User from "./User";

//klasiu paveldejimas

class Student extends User{
    constructor(name, email, school, subject){
        super(name, email)  //nurodome savybes kurias norime paveldeti, metodu nereikia nurodyti cia, visus metodus paveldi ir taip
        this.school = school;
        this.subject = subject;
    }
    getInfo(){
        return{
            name: this.name,
            email: this.email,
            school: this.school,
            subject: this.subject
        }
    }
}

export default Student
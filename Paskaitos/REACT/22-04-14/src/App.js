let user = {
    name:['Petras', 'Petraitis'],
    age: 23,
    gender: 'male',
    interests: ['web technology', 'travelling'],
    greeting: function (){  //Geteris (gauname objekto varda)
        console.log(`Labas, aš esu ${this.name[0]}`);
    },
    setAge:function (age){
        this.age=age
    }
}

console.log(user.name)   //Noriu isvesti objekto savybe
user.age = 33;           //Blogas budas nors ir veikia, teisingai butu savybes nustatineti per metoda
user.setAge(55)          //Seteris - geras budas pakeisti objekto savybei
console.log(user.age)
user.greeting()          //Noriu iskviesti objekto metoda

//kurimas su konstruktoriumi, konstruktoriu funkcijos pradedamos didziaja raide

function CreateUser(name, email, active){
    this.name = name;
    this.email = email;
    this.active = false;
}

//metodai kuriami ne konstruktoriuje?

CreateUser.prototype.showName = function(){
    alert(`Mano vardas yra ${this.name}`)
}

let userOne = new CreateUser('Petras', 'petras@gmail.com') //kvieciamas konstruktorius
userOne.showName()
console.log(userOne)

//naujesnis klasiu naudojimas

import User from "./modules/User"

let userOne1 = new User ('Jonas', 'jonas@gmail.com', 'IT')

userOne1.printInfo();
userOne1.setName('Juozas');
console.log('Pakeistas vardas: ', userOne1.name);

import Student from "./modules/Student";

let newStudent = new Student('Jonas', 'jonas@gmail.com', 'BIT', 'JS')

console.log(newStudent.getInfo())
// newStudent.printInfo();

import Vehicle from "./modules/Vehicle";

let newVehicle = new Vehicle('Yaris', 'Toyota');
console.log(newVehicle.model, newVehicle.brand);
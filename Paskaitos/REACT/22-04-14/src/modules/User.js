//Modernesnis klasiu ir konstruktoriu naudojimas

class User{
    constructor(name, email, department){
        this.name = name;
        this.email = email;
        this.department = department;
    }
    printInfo(){
        console.log(`Sveiki, aš esu ${this.name}. Mano el. paštas yra: ${this.email}. Dirbu ${this.department}`)
    }
    setName(name){
        this.name = name;
    }
}

export default User
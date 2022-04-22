class Animals {

    #param3  //privati savybe, nepaveldima, butina nurodyti klases virsuje

    static grupe = "karalyste"

    constructor(param, param2){ //Parameters
        // console.log(param, param2)
        this.param = param //Property
        this.param2 = param2
        this.#param3 = 'slaptas'
    }
    #setParam(first){ // privatus metodas, jo vaikai nepasiekia
        this.param = first
    }
    // returnLine(){
    //     return `Nuostabus gyvunas ${this.param} ${this.param2}`
    // }
    returnLine(phrase){
        return `${phrase} ${this.param} ${this.param2}`
    }
}

const ani = new Animals('Australiskas', 'balandis') //instance (instancija)

// ani.setParam('Amerikietiskasis')

// export default ani

// export default Animals

class Cars extends Animals{
    constructor(param, param2){
        super(param, param2)
    
    // this.param = param //Property
    // this.param2 = param2
}
// returnLine(){
//     return `Nuostabus automobilis ${this.param} ${this.param2}`
// }

}

export {Animals, Cars}

// function a(){ //funkcija
// }

// function test(param, param2){
//     return param + param2
// }


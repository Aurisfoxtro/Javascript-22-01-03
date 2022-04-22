import Helper2 from "../utils/Helper2.js"

class Book {
    static kiekis = 0
    static perskaitytos_knygos = new Map()

    constructor(){
        this.id = Helper2.random(0, 9999999)
        this.pavadinimas = Helper2.string(Helper2.random(40,60))
        this.aprasymas = Helper2.string(Helper2.random(40,150))
        this.puslapiai = Helper2.random(10, 200)
        this.perskaityta = false

        Book.kiekis += this.puslapiai
    }

    static getCount(){
        return Book.kiekis
    }

    read(){
        this.perskaityta = true;
        Book.perskaitytos_knygos.set(this.id, this) //this siuncia visas objekto savybes per parametra
    }
}

export default Book
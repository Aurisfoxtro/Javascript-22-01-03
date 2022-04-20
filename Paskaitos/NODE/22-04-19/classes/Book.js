import Helper2 from "../utils/Helper2.js"

class Book {
    constructor(){
        this.id = Helper2.random(0, 9999999)
        this.pavadinimas = Helper2.string(Helper2.random(40,60))
        this.aprasymas = Helper2.string(Helper2.random(40,150))
        this.puslapiai = Helper2.random(10, 200)
        this.perskaityta = false
    }
    read(){
        this.perskaityta = true;
    }
}

export default Book
import Book from "./Book.js"

class BookList {
    
    constructor(size){
        this.list = []
        this.current = 0

        this.populate(size)
    }

    populate(length){ //sugeneruojamas sarasas pasinaudojant Book klase
        this.list = [...Array(length).keys()].map(()=> new Book())
    }

    markRead(){
        this.current += 1
        if((this.list.length +1) > this.current){
            let book = this.list[this.current -1]
            book.read()
            return `sekanti skaitoma knyga yra ${book.pavadinimas}`
        }
        
        return 'Visos knygos perskaitytos'
    }
    //filtruojam knygas pagal puslapiu dydi
    filterPages(){
        return this.list.sort((a, b) => a.puslapiai - b.puslapiai)
    }

    //istrinsim daugiausia puslapiu turincia knyga is saraso
    deleteBook(){
        const list = this.filterPages()
        list.splice (list.length - 1, 1)
        return 'Irasas sekmingai istrintas'
    }
}

export default BookList
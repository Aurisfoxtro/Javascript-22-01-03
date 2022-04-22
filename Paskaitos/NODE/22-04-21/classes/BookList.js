import Book from "./Book.js"

class BookList {

    static count = 0
    
    constructor(size){
        this.list = []
        this.current = 0

        this.populate(size)

        BookList.count += size
    }

    populate(length = 10){ //sugeneruojamas sarasas pasinaudojant Book klase
        this.list = [...Array(length).keys()].map(()=> new Book())
    }

    fillGaps(ceil = 10){
        if(BookList.count < ceil){
            let count = BookList.count
            // this.list = this.list.fill(new Book(), from, ceil)
            let gap = Array(ceil - count).fill(new Book())
            this.list = this.list.concat(gap)
            
            console.log(this.list.length)
            
            BookList.count = ceil
        }
    }

    static bookCount(){
       return BookList.count
    }

    checkRead(id){
        let book = this.list[this.current]
        if(id){
            let index = this.list.findIndex(el => el.id == id)
            book = this.list[index]
        }
        return Book.perskaitytos_knygos.get(book.id) == undefined ? false : true
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
        BookList.count--
        return 'Irasas sekmingai istrintas'
    }
}

export default BookList
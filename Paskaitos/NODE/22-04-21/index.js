// MAP

// Array
// Object
// Map

// [0, 10, 50]

// {
//     pirmas: 10,
//     antras: 20
// }

const map = new Map()

map.set('indeksas', 10)

console.log(map) //spausdina visa map objekta

console.log(map.get('indeksas')) // grazina indeksas reiksme

console.log(map.size)  // grazina map ilgi

console.log(map.delete('indeksas')) // istrina indeksas reiksme bei key ir grazina true

import Book from "./classes/Book.js"
import BookList from "./classes/BookList.js"

const bookList = new BookList(10)

if(bookList.checkRead(bookList.list[0].id)){
    console.log('Knyga yra perskaityta')
}else{
    console.log('Knyga yra neperskaityta')
}

console.log(bookList.list.length)

bookList.populate(10)

console.log(BookList.bookCount())

bookList.fillGaps(10)

console.log(bookList.list.length)

console.log(BookList.count)
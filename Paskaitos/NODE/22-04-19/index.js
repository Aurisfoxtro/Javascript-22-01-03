// import ani from './classes/animals.js'
import {Animals, Cars} from "./classes/animals.js"
import Helper from "./classes/helper.js"

const car = new Cars("Skoda", "Fabia"); //instance

// const adresas = new Helper

console.log(Helper.adresas)
console.log(Helper.multiplyer(20, 30))
console.log(Animals.grupe)  //statine savybe galima pasiekti net ir neinicijavus klases objekto

//  car.setParam("Mazda")
console.log(car.returnLine("Nuostabus automobilis"))
// const animals = new ani("Testinis", "gyvunas")
// const bird = new ani("Azijietiska", "kregzde")

// console.log(animals.returnLine());
// console.log(bird.returnLine());

// let x = 2

// let y = x + 10

// console.log(y);

// console.log('Sveiki gyvi');
// console.log('Ate');

import Book from "./classes/Book.js";

const book = new Book();

console.table(book);

import BookList from "./classes/BookList.js"

const bookList = new BookList(10)
// bookList.populate(10)
// console.log(bookList)

bookList.markRead();
bookList.markRead();
bookList.markRead();
bookList.markRead();
bookList.markRead();

console.log(bookList.markRead());

console.log(bookList.filterPages())

console.log(bookList.deleteBook())

console.log(bookList.list.length)
// bookList.list[0].read();

// console.log(bookList.list[0])

// bookList.list.forEach(book =>{ console.table(book.perskaityta)})
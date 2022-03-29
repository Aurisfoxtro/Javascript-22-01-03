import {useState, useEffect} from 'react';
import Book from "../book/Book";

function Main() {

  const [books, setBooks] = useState([]);
  const [types, setTypes] = useState([]);

    useEffect(()=>{
        try{
        fetch("https://in3.dev/knygos/")
            .then(response=>response.json())
            .then(data=>setBooks(data))
        }catch(msg){
            console.log(msg)
        }
    }, [])

    useEffect(()=>{
      try{
      fetch("https://in3.dev/knygos/types")
          .then(response=>response.json())
          .then(data=>setTypes(data))
      }catch(msg){
          console.log(msg)
      }
  }, [])

    console.log(books);
    console.log(types);
    

    return (
      <div>
        {(books.length !== 0)?books.map(book => 
        (types.length !== 0)?types.map(type =>
        (type.id === book.type)?<Book key={book.id} content={book} genre={type.title}/>:null):null
        ):<p>Loading...</p>}
      </div>
    );
  }
  
  export default Main;
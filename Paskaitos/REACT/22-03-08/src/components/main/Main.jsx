import Search from "../search/Search";
import Movie from "../movie/Movie";
import React, {useState, useEffect} from "react";
import {Spinner} from "react-bootstrap";

function Main() {

  const [movies, setMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const handleInputChange = (e)=>{
    console.log('e:',e)
    setSearchTerm(e.target.value)
  }
console.log('searchTerm', searchTerm)
  // const filteredMovies = PostsData.filter((movie)=>{
  //   return movie.title.includes(searchTerm)


    useEffect(()=>{
        try{
        fetch(`https://www.omdbapi.com/?t=${searchTerm}&apikey=e4db3ced`)
            .then(response=>response.json())
            .then(data=>setMovie(data))
        }catch(msg){
            console.log(msg)
        }
    }, [])

    console.log(movies);

    return (
      <div className="container">
          <Search onSearch={handleInputChange} val={searchTerm}/>

          {(movies.length)?movies.map(movie=>
                <Movie
                    title={movie.title}
                    poster={movie.poster}
                    runtime={movie.runtime}
                    director={movie.director}
                    actors={movie.actors}
                    rated={movie.rated}
                />):
                (
                  <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                  </Spinner>
              )}

      </div>
    );
  }
  
  export default Main;
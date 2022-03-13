import React, {useState, useEffect} from "react";
import Search from "../search/Search";
import Movie from "../movie/Movie";

const Movies = () =>{
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch = (term)=>{
        // console.log('From Movies Component');
        // console.log(term);
        setSearch(term)
    }
    
    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?t=${search}&apikey=e4db3ced`)
            .then(response=>response.json())
            .then(data=>setMovies(data))
    },[search])
    
    console.log(search)
    console.log(movies)
    return(
        <div className="container mt-4">
            <Search onSearch={handleSearch}/>
            <h2>Informacija apie ieškomą filmą</h2>
            {/* cia mapinti reikia movies */}
            {/* {console.log('Title', movies.Title)} */}
            <Movie 
                img = {movies.Poster}
                movie = {movies.Title}
                imdb = {movies.imdbRating}
            />
        </div>
    )
}

export default Movies
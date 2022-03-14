import React, {useState, useEffect} from "react";
import {Row} from "react-bootstrap"
import {Spinner} from "react-bootstrap"
import Cat from "../cat/Cat";
// 
import Search from '../search/Search';
//
const Home = ()=>{
    const [cats, setCats] = useState([]);

    useEffect(()=>{
        try{
        fetch("https://api.thecatapi.com/v1/breeds")
            .then(response=>response.json())
            .then(data=>setCats(data))
        }catch(msg){
            console.log(msg)
        }
    }, [])

    console.log(cats);
    //--------------------

    const [searchTerm, setSearchTerm] = useState('');
    const handleInputChange = (e)=>{
        // console.log(e)
        setSearchTerm(e.target.value)
    }
    console.log('Paieškos eilutė: ', searchTerm)
    const filteredCats = cats.filter((cat)=>{
        return cat.name.includes(searchTerm)
    })

    //-------------------- 
    return(
        <>
        {/*  */}
            <Row>
                <Search onSearch={handleInputChange} val={searchTerm}/>
                {console.log('Atrinktos katės: ', filteredCats)}
                
                {(filteredCats.length)?filteredCats.map(cat =>
                <Cat
                    key={cat.id}
                    name={cat.name}
                    image={cat.image}
                    origin={cat.origin}
                />):
                <p>Ieškokite katės</p>
                }
            </Row>
        {/*  */}
            <Row>
                {(cats.length)?cats.map(cat=>
                <Cat
                    key={cat.id}
                    name={cat.name}
                    image={cat.image}
                    origin={cat.origin}
                />):
                (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}
            </Row>
        </>
    )
}

export default Home
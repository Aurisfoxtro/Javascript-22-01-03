import React, {useState, useEffect} from "react";
import {Row} from "react-bootstrap"
import {Spinner} from "react-bootstrap"
import Cat from "../cat/Cat";

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
    return(
        <>
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
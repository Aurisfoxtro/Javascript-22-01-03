import React, {useState, useEffect} from "react";
import {Row} from "react-bootstrap"
import {Spinner} from "react-bootstrap"
import Cat from "../cat/Cat";
// 
import Search from '../search/Search';
// 
const Home = ()=>{
    const [cats, setCats] = useState([]);

    // 
    const[search, setSearch] = useState('');
    // 

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

    // const [searchTerm, setSearchTerm] = useState('');
    // const handleInputChange = (e)=>{
    //     // console.log(e)
    //     setSearchTerm(e.target.value)
    // }
    // // console.log(searchTerm)
    // const filteredPosts = PostsData.filter((post)=>{
    //     return post.title.includes(searchTerm)
    // })

    //-------------------- 
    return(
        <>
        {/*  */}
            {/* <Row>
                <Search onSearch={handleInputChange} val={searchTerm}/>
                <Posts posts={filteredPosts}/>
            </Row> */}
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
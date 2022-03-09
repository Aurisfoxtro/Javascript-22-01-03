import React, {useState} from "react";



const Search = (props) =>{

    const [term, setTerm] = useState('');

const handleChange = (e)=>{
    setTerm(e.target.value)
    console.log(term)
}
const submitHandler = (e) =>{
    //butinas preventDefault() kad nerefresintu puslapio viso
    e.preventDefault()
    props.onSearch(term)
}
    return(
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <input type="text" placeholder="Filmo pavadinimas" onChange={handleChange} value={term} className="form-control"/>
                        <button className="btn btn-primary mt-2" type="submit">Ieškoti</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search
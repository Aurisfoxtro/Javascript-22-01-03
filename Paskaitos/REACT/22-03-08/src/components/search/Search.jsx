const Search = ({val, onSearch, ...props})=>{
    return(
        <div className="search">
            <input
            value = {val}
            className = "form-control"
            onChange={onSearch}
            placeholder = "Ieškoti filmo pagal pavadinimą."
            {...props}
            />
            
            <button className="btn btn-primary">Ieškoti</button>

        </div>
    )
}

export default Search
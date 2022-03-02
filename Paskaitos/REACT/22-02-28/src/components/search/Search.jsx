const Search = ({val, onSearch, ...props})=>{
    return(
        <div className="search">
            <input
            value = {val}
            className = "form-control"
            onChange={onSearch}
            placeholder = "Search posts by title"
            {...props}
            />
        </div>
    )
}

export default Search
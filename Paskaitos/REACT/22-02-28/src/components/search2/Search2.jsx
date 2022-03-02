const Search2 = ({val, onSearch, ...props})=>{
    return(
        <div className="search2">
            <input
            value = {val}
            className = "form-control"
            onChange={onSearch}
            placeholder = "Search posts by category"
            {...props}
            />
        </div>
    )
}

export default Search2
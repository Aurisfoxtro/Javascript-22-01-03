// const Search = ()=>{
//     return(
//         <div>
//             <p>Search form</p>
//         </div>
//     )
// }

// export default Search

const Search = ({val, onSearch, ...props})=>{
    return(
        <div className="search mb-5">
            <input
            value = {val}
            className = "form-control"
            onChange={onSearch}
            placeholder = "Ieškoti katės pagal rūšį."
            {...props}
            />
        </div>
    )
}

export default Search
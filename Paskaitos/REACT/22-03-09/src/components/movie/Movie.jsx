const Movie = (props)=>{
    return(
        <div className="card" style="width: 18rem;">
            <img src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.movie}</h5>
                    <div className="card-text">
                        <ul>
                            <li>{props.imdb}</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}
export default Movie
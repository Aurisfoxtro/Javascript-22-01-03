import {Card} from "react-bootstrap"

const Movie = (props)=>{
    return(
        <Card style={{width:'20rem'}}>
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>
                <Card.Text>
                    <img className="img-fluid" src={(props.poster)?props.poster.url:null} alt=""/>
                </Card.Text>
                <Card.Text>Trukmė:{props.runtime}</Card.Text>
                <Card.Text>Režisierius:{props.director}</Card.Text>
                <Card.Text>Aktoriai:{props.actors}</Card.Text>
                <Card.Text>IMDB reitingas:{props.ratings}</Card.Text>
                
            </Card.Body>
        </Card>

    )
}

export default Movie
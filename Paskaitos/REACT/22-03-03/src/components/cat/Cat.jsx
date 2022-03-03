import {Card} from "react-bootstrap"
// import { propTypes } from "react-bootstrap/esm/Image"

const Cat = (props)=>{
    return(
        <Card style={{width:'18rem'}}>
            <Card.Header>{props.name}</Card.Header>
            <Card.Body>
                <Card.Title>Kilmė:{props.origin}</Card.Title>
                <Card.Text>
                    <img className="img-fluid" src={(props.image)?props.image.url:null} alt=""/>
                </Card.Text>
            </Card.Body>
        </Card>

    )
}

export default Cat
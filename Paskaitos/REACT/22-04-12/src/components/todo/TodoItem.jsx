import {Card, Button, ListGroupItem} from "react-bootstrap";
import {UncontrolledCollapse} from "reactstrap";

const TodoItem = ()=>{
    return(
        <ListGroupItem>
            <div className="row">
                <div className="col-md-7">
                    <span variant="primary" className="d-flex" style={{marginBottom: '1rem'}}>
                        Užduotis
                    </span>
                    <UncontrolledCollapse>
                        <Card>
                            <Card.Body>
                                uzduoties aprasymas
                            </Card.Body>
                        </Card>
                    </UncontrolledCollapse>
                </div>
                <div className="col-md-5">
                    <div className="ml-auto">
                        <Button variant="danger">Pašalinti</Button>
                        <Button variant="primary">Užbaigti</Button>
                    </div>
                </div>
            </div>
        </ListGroupItem>
    )
}

export default TodoItem
import './tasks.css'
import {Container, Row, Card, Button, ListGroup} from "react-bootstrap";
import Task from "../task/Task";

function Tasks(){
    return(
        // <div className="container-fluid">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-8 col-md-3 col-lg-2 first">
        //                 <p>Pirmas</p>
        //             </div>
        //             <div className="col">
        //                 <div className="row">
        //                     <div className="col">
        //                         <p>1</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>2</p>
        //                     </div>
        //                     <div className="col">
        //                         <p>3</p>
        //                     </div>
        //                 </div>
        //             </div>
        <Container>
            <ListGroup>
                        <Task/>
                        <Task/>   
                        <Task/>   
                        <Task/>   
                        <Task/>   
                        <Task/>
            </ListGroup>
        </Container>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Tasks
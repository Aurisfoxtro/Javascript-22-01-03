import { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { useGlobalContext } from "../../context/TasksContext";

const Task = (props)=>{
    const {removeTask} =useGlobalContext();
    const [showButton, setShowButton] = useState(true);
    const [line, setLine] = useState({
        'textDecoration': ''
    })

    const lineHandler =()=>{
        setLine({'textDecoration': 'line-through'});
        setShowButton(false);
    }

    return(
        <ListGroup.Item><div style={line}>{props.title}: {props.desc}</div>
        <Button onClick={()=>{removeTask(props.id)}} className="float-end">Šalinti</Button>
        {showButton && <Button onClick={lineHandler} className = "float-end me-2">Atlikta</Button>}
        </ListGroup.Item>
    )
}

export default Task
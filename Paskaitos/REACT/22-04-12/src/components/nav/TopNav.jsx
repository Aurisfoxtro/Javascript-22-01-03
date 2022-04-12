import {Button, ButtonGroup} from "react-bootstrap";

const TopNav =()=> {
    return(
        <ButtonGroup>
            <Button variant="primary">Visos užduotys</Button>
            <Button variant="danger">Aktyvios</Button>
            <Button variant="success">Užbaigtos</Button>
        </ButtonGroup>
    )
}

export default TopNav
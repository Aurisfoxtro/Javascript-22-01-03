import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navigation = ()=>{
    return(
        <Nav defaultActiveKey="/home" as="nav" className="mt-n1">
            <Nav.Item as="li">
                <Nav.Link as={Link} to={"/"}>Pradinis</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link as={Link} to={"/about"}>Apie projektą</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link as={Link} to={"/search"}>Paieška</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navigation
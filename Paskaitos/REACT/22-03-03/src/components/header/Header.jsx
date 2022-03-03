import {Container, Navbar} from 'react-bootstrap';
import Navigation from "../nav/Nav";

const Header = ()=>{
    return(
        <Navbar bg="primary" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand>CatsApp</Navbar.Brand>
                <Navigation/>
            </Container>
        </Navbar>
    )
}

export default Header
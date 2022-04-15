import '../assets/css/NavBar.css';
import Logo from '../assets/imgs/logo.png';
import { Navbar, Container, Nav, Link } from 'react-bootstrap';

function NavBar() {
    return (
        <div>
            <Navbar bg="dark" fixed='top' expand='lg' variant="dark" className="navbar-bootstrap">
                <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={Logo}
                        width="40"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /> 
                    <span className="pl-2">MontyHacks V</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className="me-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                        <Nav.Link href="#schedule">Schedule</Nav.Link>
                        <Nav.Link href="#sponsors">Sponsors</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;
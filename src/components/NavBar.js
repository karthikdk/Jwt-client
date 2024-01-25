import { Link } from "react-router-dom"
import {Navbar, Nav} from 'react-bootstrap'

const NavBar = () => {  
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
                <Navbar.Brand style={{marginLeft:'50px'}}>JWT</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav variant="pills" defaultActiveKey="/" className="ms-auto " style={{marginRight:"60px"}}>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    
    )
}

export default NavBar
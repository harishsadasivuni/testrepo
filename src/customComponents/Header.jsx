import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import lalala from '../assets/lalala.png';
import { useState, useEffect } from 'react';
function Header() {

    return (
        <>
            <Navbar fixed="top" expand="md" className="bg-body-tertiary custom-navbar">
                <Container className='custom-nav-tags'>
                    <Navbar.Brand href="/"><img className='logo-image' src={lalala}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='custom-nav-links'>

                        {/* <Nav className="me-auto">
                            <Nav.Link href="#banner">Home</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#skills">Skills</Nav.Link>
                                <Nav.Link href="#projects">Projects</Nav.Link>
                                <Nav.Link href="#education">Education</Nav.Link>
                        </Nav> */}

                        <nav id="navbar-example2" class="navbar navbar-light">
                            <ul class="nav nav-pills">
                            <li class="nav-item">
                                    <a class="nav-link" href="#banner">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#about">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#skills">Skills</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#projects">Projects</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#education">Education</a>
                                </li>
                                
                            </ul>
                        </nav>

                    </Navbar.Collapse>
                    <Button variant="primary" to="#">Download Resume</Button>
                </Container>
            </Navbar>
        </>
    );
}
export default Header
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavBarComponent() {
    return (
        <Navbar expand="lg" id='color'>
            <Container>
                <Navbar.Brand href="/" className='text-light fw-bold'>Space Flight <i className="bi bi-rocket"></i></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className='nav-link text-light' >Home</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

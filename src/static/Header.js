import { Navbar, Nav } from 'react-bootstrap'
import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"><i className="fas fa-flask"></i><i className="far fa-eye"></i> Oculus</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/batches">Batches</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      );
    }
}

 export default Header;

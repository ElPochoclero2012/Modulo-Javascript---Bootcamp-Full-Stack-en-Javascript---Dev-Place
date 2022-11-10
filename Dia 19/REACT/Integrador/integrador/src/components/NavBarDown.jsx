import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

//Sección de intro sería

function NavBarDown() {


  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
      <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Physical</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Digital
              </NavDropdown.Item>
            </NavDropdown>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Offers</Nav.Link>
            <Nav.Link href="#action2">History</Nav.Link>
            <Nav.Link href="#action2">Help</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarDown
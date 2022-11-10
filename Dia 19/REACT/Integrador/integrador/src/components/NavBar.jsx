import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SteamVerde from './assets/SteamVerde.png'

//Sección de intro sería

function NavBar(props) {

  // function elegirTipo(e){
  //   props.setCategory(e.target.textContent);
  // }

  return (
    // <ul>
    //     <li><h3><a><img src={SteamVerde} className="iconNav"></img>GreenSteam</a></h3></li>
    //     <li><h3><a href="#products" onClick={elegirTipo} className="aHover">Products</a></h3></li>
    //     <li><h3><a href="#general" onClick={elegirTipo} className="aHover">General</a></h3></li>
    //     <li><h3><a href="#product" onClick={elegirTipo} className="aHover">Product</a></h3></li>
    //     <li><h3><a href="#faq" onClick={elegirTipo} className="aHover">FAQ</a></h3></li>
    //     <li><h3><a href="#form" onClick={elegirTipo} className="aHover">BuyForms</a></h3></li>
    // </ul>
    <Navbar bg="light" expand="lg" className="NavBar">
      <Container fluid>
        <Navbar.Brand href="#"><img src={SteamVerde} className="iconNav"></img>GreenSteam</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="container-fluid my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            <Nav.Link href="#action1">Ingresar</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
        <Nav.Link href="#action2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg></Nav.Link>
      </Container>
    </Navbar>
  )
}

export default NavBar
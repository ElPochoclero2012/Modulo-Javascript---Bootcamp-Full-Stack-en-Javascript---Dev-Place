import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
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
    <Navbar bg="light" expand="lg">
      <Container fluid className="containerNav">
        <Navbar.Brand href="/Homepage"><img src={SteamVerde} className="iconNav"></img>GreenSteam</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="container-fluid my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >         
          </Nav>
          <div className="searchBar">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
          </Form>
          </div>
          
        </Navbar.Collapse>
        <Nav>
        <Nav.Link href="/Login" className="loginButton">Log in</Nav.Link>
        <Nav.Link href="/Register" className="registerButton">Register</Nav.Link>
        <Nav.Link href="#action3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar
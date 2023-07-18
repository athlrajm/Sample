import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function UseNavigate() {
    const history=useNavigate();
    const sample=()=>{
        history("/page1");
    }
  return (
    <div>
     <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container fluid>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZPDYaPCq58yr4nKLmwqGqwbe-0TP6fH6Zy9y6tpj&s" alt="" padding="2px"/>
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Gallery</Nav.Link>
            <Nav.Link href="">API</Nav.Link>
            <NavDropdown title="Menu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">North Indian</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                South Indian
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Sweets
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              ORDER ONLINE
            </Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
          </Nav>
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={sample}>click</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default UseNavigate
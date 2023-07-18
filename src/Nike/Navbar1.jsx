import React from 'react'
import './Navbar1.css';
import { Button, Form, Navbar } from 'react-bootstrap';

function Navbar1() {
  return (
   
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="https://static.vecteezy.com/system/resources/previews/010/994/232/original/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" alt="" />
      </div>
      <ul className="navbar__links">
        <li className="navbar__link">
          <a href="/">New & Featured</a>
        </li>
        <li className="navbar__link">
          <a href="/products">Men</a>
        </li>
        <li className="navbar__link">
          <a href="/about">Women</a>
        </li>
        <li className="navbar__link">
          <a href="/about">Kids</a>
        </li>
        <li className="navbar__link">
          <a href="/about">Sale</a>
        </li>
        <li className="navbar__link">
          <a href="/about">SNKRS</a>
        </li>
      </ul>
      <div className="navbar__actions">
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
      </Form> 
      <img src="https://www.pngplay.com/wp-content/uploads/7/Heart-Symbol-PNG-Photos.png" alt="" />
      <img src="https://static.vecteezy.com/system/resources/previews/000/422/881/original/shopping-bag-icon-vector-illustration.jpg" alt="" />
      </div>
    </nav>
    
  )
}

export default Navbar1
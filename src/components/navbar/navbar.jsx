import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import logo from "../../assets/images/logo.png"

const CustomNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src={logo} alt="logo" />
          <span style={{ fontWeight: 'bold', fontSize: '34px' }}>Furniro</span>
        </Navbar.Brand>

        {/* Responsive toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="mx-2" style={{ fontSize: '16px' }}>Home</Nav.Link>
            <Nav.Link href="#shop" className="mx-2" style={{ fontSize: '16px' }}>Shop</Nav.Link>
            <Nav.Link href="#about" className="mx-2" style={{ fontSize: '16px' }}>About</Nav.Link>
            <Nav.Link href="#contact" className="mx-2" style={{ fontSize: '16px' }}>Contact</Nav.Link>
          </Nav>

          {/* Icons */}
          <Nav className="">
            <Nav.Link href="#profile" className="mx-2"><FaUser size={20} /></Nav.Link>
            <Nav.Link href="#search" className="mx-2"><FaSearch size={20} /></Nav.Link>
            <Nav.Link href="#wishlist" className="mx-2"><FaHeart size={20} /></Nav.Link>
            <Nav.Link href="#cart" className="mx-2"><FaShoppingCart size={20} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

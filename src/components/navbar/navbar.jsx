import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../../assets/svgs/logo.svg"
import { ReactComponent as CartIcon } from '../../assets/svgs/navbar/cart.svg';
import { ReactComponent as SearchIcon } from '../../assets/svgs/navbar/search.svg';
import { ReactComponent as HeartIcon } from '../../assets/svgs/navbar/heart.svg';
import { ReactComponent as UserIcon } from '../../assets/svgs/navbar/user.svg';


const CustomNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src={logo} alt="logo" style={{width : "50px" , height : "50px"}} />
          &nbsp;
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
            <Nav.Link href="#profile" className="mx-2"><UserIcon size={20} /></Nav.Link>
            <Nav.Link href="#search" className="mx-2"><SearchIcon size={20} /></Nav.Link>
            <Nav.Link href="#wishlist" className="mx-2"><HeartIcon size={20} /></Nav.Link>
            <Nav.Link href="#cart" className="mx-2"><CartIcon size={20} /></Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;



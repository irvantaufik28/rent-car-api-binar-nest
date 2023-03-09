import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from '../../assets/icon/logo.png'

export default function NavbarTop() {
  return (
    <>
    <Navbar bg="tranparent" fixed="top"  >
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo"/>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Out Service</Nav.Link>
            <Nav.Link href="#features">Why Us</Nav.Link>
            <Nav.Link href="#pricing">Testimonial</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

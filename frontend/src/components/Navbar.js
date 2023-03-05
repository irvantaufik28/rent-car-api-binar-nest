import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Styles from "./styles/navbar.module.css";
import logo from '../assets/icon/logo.png'

export default function NavbarTop() {
  return (
    <div>
      <Navbar className={Styles.header}>
        <Container className= {Styles.container} >
          <Navbar.Brand href="/">
            {" "}
            <img className={Styles.logo} src={logo} alt="logo" />
          </Navbar.Brand>
          <Nav className={Styles.topmenu}>
            <Nav.Link href="/">Our Service</Nav.Link>
            <Nav.Link href="/product">Why Us</Nav.Link>
            <Nav.Link href="/order">Testimonial</Nav.Link>
            <Nav.Link href="/contact">FAQ</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
    </div>
  );
}

import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./navi.css";
import logo from "./img/PNK_LOGO.png";
function Navi() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/" id="navlogo">
            <img
              src={logo}
              alt="Home"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About PNK</Nav.Link>
              <Nav.Link href="/pricing">Pricing Guide</Nav.Link>
              <Nav.Link href="/purchase">Purchase</Nav.Link>
              {/*<Nav.Link href="/request" className="text-warning">Custom Requests</Nav.Link> */}
              <Nav.Link href="/collection">Collection</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Navi;

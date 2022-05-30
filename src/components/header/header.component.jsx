import React from "react";
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./header.styles.scss";

function Header() {
  const activeStyle = {
    background: "black",
    borderRadius: "8px",
  };
  return (
    <div id="header">
      <Navbar bg="dark" expand="lg" style={{ padding: "20px" }}>
        <Container fluid>
          <Navbar.Brand href="#" className="logo">
            Anime Hunt
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 " style={{ maxHeight: "100px" }} navbarScroll>
              <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                <Nav.Link href="#action1">Home</Nav.Link>
              </NavLink>
              <NavLink to="/movies" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                <Nav.Link href="#action2">Movies</Nav.Link>
              </NavLink>
              <NavLink to="/genres" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                <NavDropdown title="genres" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3" id="bg-dark">
                    Action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
              </NavLink>
            </Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

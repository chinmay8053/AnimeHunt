import React from "react";
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import "./header.styles.scss";

function Header() {
  const genres = [
    { id: 1, title: "Action" },
    { id: 2, title: "Adventure" },
    { id: 3, title: "Racing" },
    { id: 4, title: "Comedy" },
    { id: 5, title: "Avant Garde" },
    { id: 6, title: "Mythology" },
    { id: 7, title: "Mystery" },
    { id: 8, title: "Drama" },
    { id: 9, title: "Ecchi" },
    { id: 10, title: "Fantasy" },
    { id: 12, title: "Hentai" },
    { id: 13, title: "Historical" },
    { id: 14, title: "Horror" },
    { id: 18, title: "Mecha" },
    { id: 21, title: "Samurai" },
    { id: 22, title: "Romance" },
    { id: 24, title: "Sci-Fi" },
    { id: 26, title: "Girls Love" },
    { id: 27, title: "Shounen" },
    { id: 30, title: "Sports" },
    { id: 36, title: "Slice of Life" },
    { id: 37, title: "Supernatural" },
    { id: 41, title: "Suspense" },
    { id: 46, title: "Award Winning" },
    { id: 47, title: "Gourmet" },
  ];
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
                <button>Home</button>
              </NavLink>
              <NavLink to="/movies" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                <button>Movies</button>
              </NavLink>
              <NavDropdown title="Genres" id="navbarScrollingDropdown" className="bg-color">
                <div className="dropdownMenu">
                  {genres.map(({ id, title }) => (
                    <Link to={{ pathname: `/genres/${id}` }} state={{ title }} id="link" key={id}>
                      <p>{title}</p>
                    </Link>
                  ))}
                </div>
              </NavDropdown>
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

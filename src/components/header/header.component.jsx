import axios from "axios";
import React, { useState } from "react";
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { genres } from "../genres";

import "./header.styles.scss";

const activeStyle = {
  background: "black",
  borderRadius: "8px",
};
function Header() {
  const navigate = useNavigate();
  const [openHide, setOpenHide] = useState(false);

  const searchHandle = async (e) => {
    const search = e.target.value;
    if (search === "") {
      setOpenHide(false);
      return;
    }
    const res = await axios.get(`https://api.jikan.moe/v4/anime?letter=${search}`);
    const data = res.data;
    setOpenHide(data.data);
  };

  const animeHandle = (mal_id) => {
    navigate(`anime/${mal_id}`);
    setOpenHide(false);
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
            <div className="search-bar">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={searchHandle}
                  onClick={searchHandle}
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              {openHide && (
                <div className="search-hidden">
                  {openHide.map((data) => {
                    return (
                      <div className="item" key={data.mal_id} onClick={animeHandle.bind(this, data.mal_id)}>
                        <div className="search-img">
                          <img src={data.images.jpg.image_url} alt={data.title} />
                        </div>
                        <h6>{data.title}</h6>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

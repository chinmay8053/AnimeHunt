import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import "./animeFull.styles.scss";
import { Button } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function AnimeFull({ movie_URL, title, mal_id, orderBy }) {
  const navigate = useNavigate();
  const [view, setView] = useState(null);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const { search } = useLocation();
  const filter = search.slice(8);

  useEffect(() => {
    const UseFetch = async () => {
      const URL = `${movie_URL}&page=${page}${filter ? "&order_by=" + filter : ""}&min_score=6`;
      const res = await axios.get(URL);
      const data = await res.data;
      // console.log(data);
      setView(data.data);
      setLastPage(data.pagination.last_visible_page);
    };
    UseFetch();
  }, [page, filter, mal_id]);

  const handleChange = (_, value) => {
    setPage(value);
    window.scrollTo({ top: 0 });
  };

  const itemObserve = (mal_id) => navigate(`/anime/${mal_id}`);

  const activeStyle = {
    background: "white",
    borderRadius: "5px",
  };
  return (
    <div className="moviesPage">
      <div className="movies">
        <div className="moviesInfo">
          <h1>{title}</h1>
        </div>
        <div className="filter">
          <h3>Filter</h3>
          <div className="options">
            <NavLink
              to={{ pathname: `/${orderBy}?filter=popularity` }}
              state={{ title }}
              style={() => (filter === "popularity" ? activeStyle : undefined)}
            >
              <Button variant="outline-light" style={{ color: filter === "popularity" ? "black" : "white" }}>
                popular
              </Button>
            </NavLink>
            <NavLink
              to={{ pathname: `/${orderBy}?filter=rating` }}
              state={{ title }}
              style={() => (filter === "rating" ? activeStyle : undefined)}
            >
              <Button variant="outline-light" style={{ color: filter === "rating" ? "black" : "white" }}>
                rating
              </Button>
            </NavLink>
            <NavLink
              to={{ pathname: `/${orderBy}?filter=rank` }}
              state={{ title }}
              style={() => (filter === "rank" ? activeStyle : undefined)}
            >
              <Button variant="outline-light" style={{ color: filter === "rank" ? "black" : "white" }}>
                rank
              </Button>{" "}
            </NavLink>
            <NavLink
              to={{ pathname: `/${orderBy}?filter=favorites` }}
              state={{ title }}
              style={() => (filter === "favorites" ? activeStyle : undefined)}
            >
              <Button variant="outline-light" style={{ color: filter === "favorites" ? "black" : "white" }}>
                favorites
              </Button>{" "}
            </NavLink>
          </div>
        </div>
        <div className="collection">
          <div className="items">
            {!view
              ? null
              : view.map((data) => (
                  <div className="item" key={data.mal_id} onClick={itemObserve.bind(this, data.mal_id)}>
                    <div className="image">
                      <img src={data.images.jpg.image_url} alt={data.title} />
                    </div>
                    <p>{data.title}</p>
                  </div>
                ))}
          </div>
          <div className="pagination">
            <Pagination
              count={lastPage}
              page={page}
              onChange={handleChange}
              size="large"
              color="secondary"
              showFirstButton
              showLastButton
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeFull;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";

import "./movies.styles.scss";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function MoviesPage() {
  const navigate = useNavigate();
  const [view, setView] = useState(null);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const UseFetch = async () => {
      const res = await axios.get(
        `https://api.jikan.moe/v4/anime?type=movie&page=${page}${filter ? "&order_by=" + filter : ""}&min_score=6`
      );
      const data = await res.data;
      console.log(data);
      setView(data.data);
      setLastPage(data.pagination.last_visible_page);
    };
    UseFetch();
  }, [page, filter]);

  const handleChange = (_, value) => {
    setPage(value);
    window.scrollTo({ top: 0 });
  };

  const itemObserve = (mal_id) => navigate(`/anime/${mal_id}`);
  const addFilter = (e) => setFilter(e.target.dataset.set);

  return (
    <div className="moviesPage">
      <div className="movies">
        <div className="moviesInfo">
          <h1>Movies</h1>
        </div>
        <div className="filter">
          <h3>Filter</h3>
          <div className="options">
            <Button variant="outline-light" data-set="Popularity" onClick={addFilter}>
              popular
            </Button>
            <Button variant="outline-light" data-set="rating" onClick={addFilter}>
              rating
            </Button>
            <Button variant="outline-light" data-set="rank" onClick={addFilter}>
              rank
            </Button>
            <Button variant="outline-light" data-set="favorites" onClick={addFilter}>
              favorites
            </Button>
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

export default MoviesPage;

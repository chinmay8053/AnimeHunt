import React, { useEffect, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import axios from "axios";

import "./slider.styles.scss";
import { useNavigate } from "react-router-dom";
function Slider() {
  const navigate = useNavigate();
  const [slideView, setSlideView] = useState(null);
  useEffect(() => {
    const UseFetch = async () => {
      const res = await axios.get("https://api.jikan.moe/v4/anime?order_by=popularity&min_score=8.5&status=airing");
      const result = await res.data.data;
      setSlideView(result);
    };
    UseFetch();
  }, []);

  const captionHandler = (e) => navigate(`/anime/${e}`);
  return (
    <Carousel nextIcon="" prevIcon="">
      {!slideView
        ? null
        : slideView.map((info) => {
            return (
              <Carousel.Item key={info.mal_id}>
                <div className="carousel-div">
                  <div className="caption">
                    <h1>{info.title}</h1>
                    <p>{info.synopsis.slice(0, 300) + "..."}</p>
                    <div className="carousel-btn">
                      <Button variant="outline-light" onClick={captionHandler.bind(this, info.mal_id)}>
                        see more
                      </Button>
                    </div>
                  </div>
                  <div className="image">
                    <div
                      style={{
                        backgroundImage: ` linear-gradient(to right,#1b1717, rgba(0,0,0,0)) ,url(${info.images.jpg.image_url}) `,
                        backgroundSize: "cover",
                        backgroundPosition: "100% 0",
                        backgroundRepeat: "no-repeat",
                        height: "100%",
                      }}
                    ></div>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
    </Carousel>
  );
}

export default Slider;

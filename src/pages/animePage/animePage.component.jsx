import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YoutubeEmbed from "../../components/youtube/youtube.component";

import "./animePage.styles.scss";
function AnimePage() {
  const { mal_id } = useParams();
  const [view, setView] = useState(null);
  useEffect(() => {
    const UseFetch = async () => {
      const res = await axios.get(`https://api.jikan.moe/v4/anime/${mal_id}/full`);
      const data = await res.data;
      setView(data.data);
      console.log(data);
    };
    UseFetch();
  }, []);
  return (
    <div className="animePage">
      {view ? (
        <div className="anime">
          <div className="vagInfo">
            <div className="vagSummary">
              <h1 className="title">{view.title}</h1>
              <div className="ranking">
                <div className="scores">
                  <h4>SCORE</h4>
                  <p>{view.score}</p>
                </div>
                <div className="rank">
                  <h4>RANKED</h4>
                  <p>{view.rank}</p>
                </div>
                <div className="popular">
                  <h4>POPULARITY</h4>
                  <p>{view.popularity}</p>
                </div>
                <div className="source">
                  <h4>SOURCE</h4>
                  <p>{view.source}</p>
                </div>
              </div>
              <div className="rating">
                <h4>RATING</h4>
                <p>{view.rating}</p>
              </div>
            </div>
            <div className="image">
              <img src={view.images.jpg.image_url} />
            </div>
          </div>
          <hr className="theLine" />
          <div className="afterLine">
            <div className="genres">
              <h2>Genres</h2>
              <p>{view.genres.map((data) => data.name).join(", ")}</p>
            </div>
            <div className="synopsis">
              <h3>SYNOPSIS</h3>
              <p>{view.synopsis}</p>
            </div>
            {view.background ? (
              <div className="background">
                <h3>BACKGROUND</h3>
                <p>{view.background}</p>
              </div>
            ) : null}
          </div>
          <div className="youtube">
            <YoutubeEmbed embedId={view.trailer.embed_url} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default AnimePage;

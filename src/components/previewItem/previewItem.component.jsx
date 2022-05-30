import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./previewItem.styles.scss";
function PreviewItem({ title, order_by, genres, min_score }) {
  const navigate = useNavigate();
  const [items, setItems] = useState(null);
  useEffect(() => {
    const UseFetch = async () => {
      const url = `${genres ? "&genres=" + genres : ""}${order_by ? "&order_by=" + order_by : ""}${
        min_score ? "&min_score=" + min_score : ""
      }`;

      const res = await axios.get(`https://api.jikan.moe/v4/anime?limit=13${url}`);
      const result = res.data;
      console.log(result);
      setItems(res.data.data);
    };
    UseFetch();
  }, [genres, order_by, min_score]);

  const clickHandler = (e) => navigate(`/anime/${e}`);
  return (
    <div id="prevItem">
      <div className="genreName">{title}</div>
      <div className="preview" id="scroll-1">
        {!items
          ? null
          : items.map((item) => {
              return (
                <div className="item" key={item.mal_id} onClick={clickHandler.bind(this, item.mal_id)}>
                  <img src={item.images.jpg.image_url} alt="animeImage" />
                  <h4 className="title">{item.title}</h4>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default PreviewItem;

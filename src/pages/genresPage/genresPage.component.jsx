import React, { Fragment } from "react";
import { useLocation, useParams } from "react-router-dom";
import AnimeFull from "../../components/animeFull/animeFull.component";

import "./genresPage.styles.scss";

function GenresPage() {
  const { mal_id } = useParams();
  const {
    state: { title },
  } = useLocation();

  return (
    <Fragment>
      <AnimeFull
        title={title}
        orderBy={`genres/${mal_id}`}
        movie_URL={`https://api.jikan.moe/v4/anime?genres=${mal_id}`}
        mal_id={mal_id}
      />
    </Fragment>
  );
}

export default GenresPage;

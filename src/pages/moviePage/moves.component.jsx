import React, { Fragment } from "react";

import "./movies.styles.scss";

import AnimeFull from "../../components/animeFull/animeFull.component";
function MoviesPage() {
  return (
    <Fragment>
      <AnimeFull orderBy={"movies"} title={"Movies"} movie_URL="https://api.jikan.moe/v4/anime?type=movie" />
    </Fragment>
  );
}

export default MoviesPage;

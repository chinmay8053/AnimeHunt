import React from "react";
import { useParams } from "react-router-dom";

import "./genresPage.styles.scss";

function GenresPage() {
  const { mal_id } = useParams();
  console.log(mal_id);
  return <div>GernresPage</div>;
}

export default GenresPage;

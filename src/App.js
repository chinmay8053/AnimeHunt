import "./App.css";
import Header from "./components/header/header.component";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/homePage/homePage.component";
import AnimePage from "./pages/animePage/animePage.component";
import MoviesPage from "./pages/moviePage/moves.component";
import GenresPage from "./pages/genresPage/genresPage.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/anime/:mal_id" element={<AnimePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/genres/:mal_id" element={<GenresPage />} />
      </Routes>
    </div>
  );
}

export default App;

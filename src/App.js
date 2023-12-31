import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import _ from "lodash";
import GlobalStyle from "./globalstyles";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieDetails from "./page/MovieDetails";
import Index from "./component";

function App() {
  const [movies, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=169f0dafa432e90ca81ad0ae8355f6a2"
      )
      .then((res) => {
        setMovie(res.data.results.slice(0, 10));
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        return error;
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredMovie = _.filter(movies, (movie) => {
    return movie.original_title.toLowerCase().includes(search.toLowerCase());
  });
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router className="">
      <div>
        <GlobalStyle />
        <Routes>
          <Route
            path="/"
            element={
              <Index
                filteredMovie={filteredMovie}
                handleChange={handleChange}
                loading={loading}
              />
            }
          />
          <Route
            path="/movie/:id"
            element={<MovieDetails toggle={toggle} isOpen={isOpen} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

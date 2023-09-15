import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Movies = ({ id, name, image, date }) => {
  return (
    <div className="col-sm-3 col-md-3 col-lg-3 p-2 card" data-testid="Card">
      <Link to={`/movie/${id}`} style={{ textDecoration: "none" }}>
        <div className="">
          <img
            src={`https://image.tmdb.org/t/p/w500/${image}`}
            alt="movie"
            className="img-fluid"
            data-testid="movie-poster"
          />
          <p data-testid="movie-release-date" style={{ color: "#9CA3AF" }}>
            {date}
          </p>
          <h6 data-testid="movie-title" style={{ color: "#111827" }}>
            {name}
          </h6>
        </div>
      </Link>
    </div>
  );
};

export default Movies;

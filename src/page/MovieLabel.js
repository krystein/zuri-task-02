import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Img from "../img/Frame 3.svg";

const MovieLabel = ({ name, backgroundImage, date, overview, runtime }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "70vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 20%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={Img}
          alt=""
          className="img-fluid"
          style={{ width: "100px" }}
        />
      </div>
      <div className="d-flex" style={{ gap: "20px", fontWeight: 700 }}>
        <p data-testid="movie-title">{name}</p>
        <p data-testid="movie-release-date">{date}</p>
        <p data-testid="movie-runtime">{runtime}min</p>
      </div>

      <p data-testid="movie-overview" className="text-black-50">
        {overview}
      </p>
    </div>
  );
};

export default MovieLabel;

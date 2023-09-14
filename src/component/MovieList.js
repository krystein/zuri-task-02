import React from "react";
import Movies from "./Movie";

const MovieList = ({ filteredMovie, loading }) => {
  return (
    <section className="container">
      <div className="container d-flex justify-content-between mt-4">
        <h1>Feature Now</h1>
        <h4>
          <a href="/" style={{ textDecoration: "none", color: "#BE123C" }}>
            see more
          </a>
        </h4>
      </div>
      <div className="container d-flex justify-content-center">
        <div
          className=""
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            rowGap: "20px",
            columnGap: "20px",
          }}
        >
          {loading ? (
            <p>Loading...</p>
          ) : (
            filteredMovie.map((movie) => {
              return (
                <Movies
                  key={movie.id}
                  id={movie.id}
                  name={movie.original_title}
                  image={movie.poster_path}
                  date={movie.release_date}
                />
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
export default MovieList;

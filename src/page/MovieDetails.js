import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "../component/sidebar";
import MovieLabel from "./MovieLabel";

function MovieDetails() {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=169f0dafa432e90ca81ad0ae8355f6a2`
      )
      .then((res) => {
        setMovieDetails(res.data);
        const imageLink = res.data.backdrop_path;
        const imageUrl = `https://image.tmdb.org/t/p/w500/${imageLink}`;
        setBackgroundImage(imageUrl);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <div className="row">
        <div className="col-2 p-3">
          <Sidebar />
        </div>
        <div className="col">
          <div className="p-5">
            <MovieLabel
              backgroundImage={backgroundImage}
              name={movieDetails.original_title}
              date={movieDetails.release_date}
              runtime={movieDetails.runtime}
              overview={movieDetails.overview}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

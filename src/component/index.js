import React from "react";
import MovieList from "./MovieList";
import Hero from "./hero";
const Index = ({
  filteredMovie,
  handleChange,
  loading,
  search,
  performMovieSearch,
}) => {
  return (
    <>
      <Hero handleChange={handleChange} search={search} />
      <MovieList filteredMovie={filteredMovie} loading={loading} />
    </>
  );
};

export default Index;

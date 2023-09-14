import React from "react";
import MovieList from "./MovieList";
import Hero from "./hero";
const Index = ({ filteredMovie, handleChange, loading }) => {
  return (
    <>
      <Hero handleChange={handleChange} />
      <MovieList filteredMovie={filteredMovie} loading={loading} />
    </>
  );
};

export default Index;

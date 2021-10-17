import React from "react";
import movies from "../movies";
import MovieItem from "./MovieItem";
import { Col } from "react-bootstrap";

function MovieList() {
  const movieList = movies.map((movie) => (
    <Col>
      <MovieItem movie={movie} key={movie.id} />
    </Col>
  ));

  return (
    <>
      {movieList}
    </>
  );
}

export default MovieList;

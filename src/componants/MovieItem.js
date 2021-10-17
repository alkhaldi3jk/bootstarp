import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <img src={movie.poster} style={{width: '10rem' }}/>

    </div>
  );
};

export default MovieItem;

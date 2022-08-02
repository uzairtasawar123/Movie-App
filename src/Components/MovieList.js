import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
//import Slider from "react-slick";
//import { settings } from "./Settings";

const MovieList = () => {
  ////////////////////////////////////////////////////////
  const movies = useSelector((state) => state.movies.movie);
  const series = useSelector((state) => state.movies.series);
  console.log("Reducer : ", movies);

  /////////////////////////////////////////////////////////
  return (
    <>
      <div>
        <h2 style={{ color: "white", textAlign: "center" }}>Movies</h2>
        <div>
          <div className="row">
            {movies.Search?.map((movie, index) => {
              return (
                <div className="col-2">
                  <MovieCard key={index} data={movie} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="my-5" style={{ borderTop: "1px solid white" }}>
        <h2 style={{ color: "white", textAlign: "center" }}>Series</h2>
        <div>
          <div className="row">
            {series.Search?.map((movie, index) => {
              return (
                <div className="col-2">
                  <MovieCard key={index} data={movie} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;

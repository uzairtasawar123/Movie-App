import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../Redux/MovieReducers/MovieSlice";
import "./MovieDetails.css";

const MovieDetails = () => {
  /////////////////////////////////////
  const { imdbID } = useParams();
  console.warn("ID :", imdbID);
  const detail = useSelector((state) => state.movies.details);
  console.log("Hello Details", detail);
  const dispatch = useDispatch();

  ////////////////    UseEffect     ////////////////////
  useEffect(() => {
    dispatch(fetchDetails(imdbID));
  }, [dispatch, imdbID]);

  return (
    <>
       
    
      <div className="row">
        <div className="col-9" style={{color:'white'}}>
          <div>
            <h2>{detail.Title}</h2>
          </div>
          <div className='diff_color'>
            <span>
              Imdb Rating<i className="fas fa-star" style={{color:'tomato'}}></i> : {detail.imdbRating}
            </span>
            {"   |   "}
            <span>
              Imdb Votes<i className="fas fa-thumbs-up" style={{color:'white'}}></i> :{" "}
              {detail.imdbVotes}
            </span>
            {"   |   "}
            <span>
              Run Time<i className="fas fa-film" style={{color:'silver'}}></i> : {detail.Runtime}
            </span>
            {"   |   "}
            <span>
              Year<i className="fas fa-calendar" style={{color:'white'}}></i> : {detail.Year}
            </span>
          </div>
          <div>{detail.Plot}</div>
          <div>
            <div>
              <span>Director : </span>
              <span className='diff_color'>{detail.Director}</span>
            </div>
            <div>
              <span>Writer : </span>
              <span className='diff_color'>{detail.Writer}</span>
            </div>

            <div>
              <span>Stars : </span>
              <span className='diff_color'>{detail.Actors}</span>
            </div>
            <div>
              <span>Genre : </span>
              <span className='diff_color'>{detail.Genre}</span>
            </div>
            <div>
              <span>Language : </span>
              <span className='diff_color'>{detail.Language}</span>
            </div>
            <div>
              <span>Country : </span>
              <span className='diff_color'>{detail.Country}</span>
            </div>
            <div>
              <span>Awards : </span>
              <span className='diff_color'>{detail.Awards}</span>
            </div>
          </div>
        </div>
        <div className="col-3 my-1">
          <img className="movie_detail_img" src={detail.Poster}></img>
        </div>
      </div>
      </>
  );
};

export default MovieDetails;

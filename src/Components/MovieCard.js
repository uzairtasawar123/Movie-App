import React from "react";
import "./MovieCard.css";
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
  const { data } = props;
  return (
    <>
      <div>
       <Link to={`/movie/${data.imdbID}`}>
        <div
          className="card main_div movie_cards"
          style={{ width: "18rem", boxShadow: "0px 0px 5px grey",display:"inline-block" , cursor:'pointer'}}
        >
          <img src={data.Poster} className="card-img-top" style={{boxShadow:'0px 0px 10px  grey'}}></img>
          <div className="card-body ">
            <h4 className="card-title" style={{color:'white'}}>{data.Title}</h4>
            <h4 className="card-title" style={{color:'white'}}>{data.Year}</h4>
          </div>
        </div>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;

import React, { useEffect } from "react";
import MovieList from "./MovieList";
import baseUrl from "../Apis/AxiosBaseUrl";
import { apiKey } from "../Apis/ApiKey";
import { useDispatch } from "react-redux";
import { addMovie } from "../Redux/MovieReducers/MovieSlice";
import {fetchData , fetchSeries} from '../Redux/MovieReducers/MovieSlice'
const Home = () => {
  const movieName = 'harry'
  const showName = 'friends'
  ////////////////////////////////////////////////////
    const dispatch =  useDispatch();
  //////////////////////////////////////////////////////
  /////////////////////////////////////////////////////
  useEffect(() => {
          dispatch(fetchData(movieName))
          dispatch(fetchSeries(showName))
  }, [dispatch]);
  ////////////////////////////////////////////////////

  return (
    <div>
      <MovieList />
    </div>
  );
};

export default Home;

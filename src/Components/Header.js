import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {fetchData , fetchSeries} from '../Redux/MovieReducers/MovieSlice'

const Header = () => {
  //////////////////////////////////////////////
  const [search, setSearch] = useState("");
  const dispatch  = useDispatch()
  ////////////////////   Handle Submit    //////////////////////////
  const HandleSubmit = (e) => {
       e.preventDefault()
       if(search === ''){
         return alert("Please Enter search term")
       }
       dispatch(fetchData(search))
       dispatch(fetchSeries(search))
       setSearch("")

  };
  /////////////////////////////////////////////

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "grey" }}
      >
        <div className="container-fluid" style={{ backgroundColor: "grey" }}>
          <Link
            className="navbar-brand" 
            to="/"
            style={{ display: "flex", backgroundColor: "grey" }}
          >
            <i
              className="fa-solid fa-clapperboard"
              style={{
                color: "white",
                marginLeft: "70px",
                marginTop: "10px",
                backgroundColor: "grey",
              }}
            ></i>
            <p
              style={{
                color: "white",
                marginTop: "5px",
                position: "relative",
                marginLeft: "5px",
                backgroundColor: "grey",
              }}
            >
              {" "}
              MovieApp
            </p>
          </Link>
          <form
            className="d-flex"
            role="search"
            style={{ backgroundColor: "grey" }}
            onSubmit={HandleSubmit}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e)=> setSearch(e.target.value)}
            />
            <button className="btn btn-dark" type="submit">
              Search
            </button>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../Assets/Logo.png";
import Poster from "../Assets/Poster.png";
import IMDB from "../Assets/imdb.png";
import Tomato from "../Assets/tomato.svg";

import { AiOutlineSearch } from "react-icons/ai";
import { HiBars2 } from "react-icons/hi2";
import { BsPlayCircleFill } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import Card from "../UI/Card";

const Header = () => {
  const [movies, setMovies] = useState([]);
  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=812483ddbe4ac24230b9260aa76f4a30"
    )
      .then((res) => res.json())
      .then((json) => setMovies(json.results));
  };
  useEffect(() => {
    getMovie();
  }, []);

  console.log(movies);

  const API_SEARCH_KEY =
    "https://api.themoviedb.org/3/search/movie?api_key=812483ddbe4ac24230b9260aa76f4a30&query=";

  const [term, setTerm] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();

    fetch(API_SEARCH_KEY + term)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const data = await API_SEARCH_KEY();
  //     setData(data);
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, []);
  return (
    <>
      <nav>
        <div className="nav_bg">
          <img src={Poster} alt="Nav Logo" className="bg_img" />
        </div>
        <div className="container nav__container">
          <Link to="./" className="logo">
            <img src={Logo} alt="Nav Logo" />
          </Link>
          <form onSubmit={handleSearch}>
            <input
              onChange={(e) => setTerm(e.target.value)}
              type="search"
              id="gsearch"
              name="gsearch"
              placeholder="What do you want to watch?"
            />
            <AiOutlineSearch className="search_icon" />
          </form>

          <div className="signin_space">
            <p>Sign in</p>
            <HiBars2 className="nav_btn trailer_btn" />
          </div>
        </div>
      </nav>
      <header className="container header_container">
        <div className="header-content">
          <h2>
            John Wick 3:
            <br /> Parabellum
          </h2>
          <div className="header__imdb-and-to">
            <div className="imdb">
              <div className="imdb_img">
                <img src={IMDB} alt="" />
              </div>
              <small>86.0/100</small>
            </div>
            <div className="tomato">
              <div className="tomato_img">
                <img src={Tomato} alt="" />
              </div>
              <small>96%</small>
            </div>
          </div>

          <p>
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
          <button className="trailer_btn">
            <BsPlayCircleFill />
            WATCH TRAILER
          </button>
        </div>
        <div className="header_num">
          <div className="num">
            <p>1</p>
          </div>
          <div className="num">
            <p>2</p>
          </div>
          <div className="num num_3">
            <p>3</p>
          </div>
          <div className="num">
            <p>4</p>
          </div>
          <div className="num">
            <p>5</p>
          </div>
        </div>
      </header>

      <section className="featured__movies">
        <div className="container feature__movies-container">
          <h2>Featured Movie</h2>
          <Link to={"./"} className="see_more">
            <small>See more</small>
            <BiChevronRight />
          </Link>
        </div>
    
        <div className="cards">

        <div className="poster_wrapper container">
          {movies.map((movie) => (
            <Card movie={movie} />
          ))}
          </div>
      
        </div>
      </section>
    </>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
// import axios from "axios";
import Logo from "../../Assets/Logo (1).png";
// import Trailer from "../../Assets/Rectangle 29.png";
import Film from "../../Assets/Group 52.png";
import { links } from "../../data";
import { TbLogout } from "react-icons/tb";
import { BsFillPlayFill } from "react-icons/bs";
import { BiSolidStar } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { IoTicketSharp } from "react-icons/io5";
import "./Movies.css";

const Movies = () => {
  const [movie, setMovies] = useState([]);
  const id = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(

      `https://api.themoviedb.org/3/movie/${id}?api_key=812483ddbe4ac24230b9260aa76f4a30&language=en-US`
      // 'https://api.themoviedb.org/3/movie/{movie.id}?api_key=8561ffc4984ec7968846984aa7dc544clanguage=en-US'
      // `https://api.themoviedb.org/3/movie//385687?api_key=8561ffc4984ec7968846984aa7dc544c&language=en-US`
    )
    .then((res) => res.json())
    .then((data) => setMovies(data))
     console.log(movie);
  };

  return (
    <section className="movie_details">
      <aside className="aside_movie_links">
        <div className="aside__container">
          <Link to="./" className="logo">
            <img src={Logo} alt="Nav Logo" className="logo_movie_box" />
          </Link>
          <ul className="nav__list">
            {links.map(({ name, path, icon, className }, index) => {
              return (
                <li key={index} className="nav__link">
                  <NavLink to={path} className={className}>
                    {icon}
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="quiz">
          <div className="quiz_content">
            <p>Play movie quiz and earn free tickets</p>
            <small>50k people are playing now</small>
            <button className="start_btn">start playing</button>
          </div>
        </div>

        <div className="logout">
          <TbLogout />
          Log out
        </div>
      </aside>
      <div className="movie_detail-container">
        <div className="top_container">
          <div className="trailer_video">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="Trailer"
              className="trailer_img"
            />
          </div>
          <div className="playback_video">
            <div className="play-icon">
              <BsFillPlayFill className="playback_icon" />
            </div>
            <p>Watch Trailer</p>
          </div>
        </div>
        <div className="down_movie-content">
          <div className="movie_tdgv">
            <div className="movie_title-date-genre">
              <div className="title_date">
                <p className="title" data-testid="movie-title">
                  Top Gun: {movie.original_title}
                </p>
                <BsDot />
                <p className="released_date" data-testid="movie-release-date">
                  {movie.release_date}
                </p>
                <BsDot />
                <p className="PG">PG-13</p>
                <BsDot />
                <p className="released_runtime" data-testid="movie-runtime">
                  {movie.runtime + " mins"}
                </p>
              </div>
              <div className="genre_btn">
                {movie && movie.genres
                  ? movie.genres.map((genre) => (
                      <button className="start_btn action_btn" id={genre.id}>
                        {genre.name}
                      </button>
                    ))
                  : ""}
              </div>
            </div>
            <div className="movie_rating">
              <BiSolidStar />
              <span>{movie.vote_average}</span>
              <p>|</p>
              <p>350K</p>
            </div>
          </div>
          <div className="movie_detail">
            <div className="movie_detail-left">
              <div className="movie_detail-content">
                <p className="movie_overview" data-testid="movie-overview">
                  {movie.overview}
                </p>
                <p className="movie_director">
                  Director: <span>Joseph Kosinski</span>
                </p>
                <p className="movie_writers">
                  Writers: <span>Jim Cash, Jack Epps Jr, Peter Craig</span>
                </p>
                <p className="movie_stars">
                  Stars:{" "}
                  <span>Tom Cruise, Jennifer Connelly, Miles Teller</span>
                </p>
              </div>
              <div className="top-rated">
                <div className="nominations">
                  <p className="movie_65">Top rated movie #65</p>
                  <p>Awards 9 nominations</p>
                </div>
                <FaAngleDown className="FaAngleDown" />
              </div>
            </div>
            <div className="movie_detail-right">
              <div className="movie_btns">
                <button className="movie_btn btn-1">
                  {" "}
                  <IoTicketSharp />
                  See Show times
                </button>
                <button className="movie_btn btn-2">
                  <AiOutlineUnorderedList />
                  More watch options
                </button>
              </div>
              <div className="movie_film">
                <img src={Film} alt="movie" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;

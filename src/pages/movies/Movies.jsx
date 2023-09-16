// import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Assets/Logo (1).png";
import Trailer from "../../Assets/Rectangle 29.png"
// import Trailer from "../../Assets/Rectangle 37.png"
import { links } from "../../data";
import { TbLogout } from "react-icons/tb";
import { BsFillPlayFill } from "react-icons/bs"
// import { BiSolidStar } from "react-icons/bi"
// import { FaAngleDown } from "react-icons/fa6"
import "./Movies.css";

const Movie = () => {
  return (
    <section className="movie_details">
      <aside className="aside_movie_links">
        <div className="aside__container">
          <Link to="./" className="logo">
            <img src={Logo} alt="Nav Logo" className="logo_movie_box" />
          </Link>
          <ul className="nav__list">
            {links.map(({ name, path, icon }, index) => {
              return (
                <li key={index} className="nav__link">
                  <NavLink to={path} className="nav_path">
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
      <div className="movie_detail-content">
        <div className="top_container">
          <div className="trailer_video">
            <img src={Trailer} alt="Trailer" />
          </div>
          <div className="playback_video">
            <BsFillPlayFill/>
            Watch Trailer
          </div>
        </div>
        <div className="down_container"></div>
      </div>
    </section>
  );
};

export default Movie;

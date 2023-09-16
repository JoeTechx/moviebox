import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="social_poster">
        <FaSquareFacebook />
        <FiInstagram />
        <IoLogoTwitter />
        <FaYoutube />
      </div>
      <ul className="poster_link">
        <li>
          <NavLink to="./conditions-of-use">Conditions of Use</NavLink>
        </li>
        <li>
          <NavLink to="./privacy&policy">Privacy & policy</NavLink>
        </li>
        <li>
          <NavLink to="./pressroom">Press room</NavLink>
        </li>
      </ul>
      <small className="copyright">
        &copy; 2021 MovieBox by Adriana Eka Prayudha
      </small>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./Header.css";
import avatar from "./images/avatar.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  return (
    <div className="header container">
      <div className="avatar-bg"></div>
      <div className="header-avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="header-text">Full-stack dev, Illustrator & Nerd</div>
      <div className="header-sub-text">
        I build web-stuffs, watch thrillers, manage social media pages and drive
        in the evenings.
      </div>
      <Link to="/resume" className="button">
        <div className="button__line"></div>
        <div className="button__line"></div>
        <span className="button__text">View Resume</span>
        <div className="button__drow1"></div>
        <div className="button__drow2"></div>
      </Link>
    </div>
  );
};

export default Header;

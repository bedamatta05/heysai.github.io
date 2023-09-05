import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar container">
      <div className="logo">
        <Link to="/" style={{textDecoration: "none", color : "#2b6777"}}>
          Sai Swaroop Bedamatta
          <span
            className="iconify-inline"
            data-icon="emojione-v1:flag-for-india"
            data-flip="horizontal"
          ></span>
        </Link>
      </div>

      <div
        className="talk"
        onClick={() =>
          (window.location = "mailto:saiswaroop.bedamatta@gmail.com")
        }
      >
        Let's Talk
      </div>
    </div>
  );
};

export default Navbar;

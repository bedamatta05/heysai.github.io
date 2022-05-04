import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar container">
      <div className="logo">
        Sai Swaroop Bedamatta
        <span className="iconify-inline" data-icon="emojione-v1:flag-for-india" data-flip="horizontal"></span>
      </div>
      <div className="talk" onClick={() => (window.location = "mailto:saiswaroop.bedamatta@gmail.com")}>Let's Talk</div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Contact = () => {
  return (
    <div className="contact container">
      <div className="contact-heading">Let's Chat</div>
      <div className="contact-description">
        Cricket, Crypto, COVID, Career, Places, Politics, Trends or Tech... I'm
        open to discuss about everything. In case of any suggestions or queries,
        feel free to reach out to me.
      </div>
      <Link to="/contact-form"
        className="contact-talk"
        // onClick={() =>
        //   (window.location = "mailto:saiswaroop.bedamatta@gmail.com")
        // }
        style ={{ textDecoration : "none"}}
      >
        <>
          <i className="fas fa-paper-plane"></i>Hit me up
        </>
      </Link>
    </div>
  );
};

export default Contact;

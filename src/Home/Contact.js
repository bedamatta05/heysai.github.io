import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact container">
      <div className="contact-heading">Let's Chat</div>
      <div className="contact-description">
        Cricket, Crypto, COVID, Career, Places, Politics, Trends or Tech... I'm open to
        discuss about everything. In case of any suggestions or queries, feel
        free to reach out to me.
      </div>
      <div
        className="contact-talk"
        onClick={() =>
          (window.location = "mailto:saiswaroop.bedamatta@gmail.com")
        }
      >
        <i className="fas fa-paper-plane"></i>Hit me up
      </div>
    </div>
  );
};

export default Contact;

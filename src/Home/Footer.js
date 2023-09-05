import React from "react";
import "./Footer.css";
// import resume from "./documents/resume.pdf";

const Footer = () => {
  return (
    <div className="footer container-fluid">
      <div className="social">
        <a
          href="https://twitter.com/heyysaiii"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-twitter"></i>
        </a>

        <a
          href="https://instagram.com/heyysaiii"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://github.com/bedamatta05"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sai-swaroop-bedamatta-596949154/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div className="copyright">Made with &hearts; in React. &copy; 2023</div>
    </div>
  );
};

export default Footer;

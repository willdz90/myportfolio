import React from "react";
import "../styles/Footer.css";
import LinkedIn from "../assets/linkedin.png";
import Github from "../assets/github.png";

export default function Footer() {
  return (
    <div className="footer-Container">
      <hr className="footer-left-line"/>
      <div className="footer-description">
        <div className="footer-sign">
          <div className="footer-text-sign">
            <span>
              Created By: WILLIAM DIAZ OROZCO - Fullstack Web Developer
            </span>
            <span>
              Copyright<sup>&copy;</sup> 2022
            </span>
          </div>
          <hr className="footer-linebreak" />
        </div>
        <div className="social-media-footer">
          <a href="https://www.linkedin.com/in/willdz/" target="_blank">
            <img src={LinkedIn} alt="LinkedIn" className="linkedIn" />
          </a>
          <a href="https://github.com/willdz90" target="_blank">
            <img src={Github} alt="LinkedIn" className="linkedIn" />
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
}

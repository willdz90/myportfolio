import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Profile1 from '../assets/profile1.jpg';
import Profile2 from '../assets/profile2.jpg';
import Profile3 from '../assets/Profile3.jpg';
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {

  return (
    <>
      <Navbar />
      <div className="mainHomeContainer">
        <div className="left-main-container">
        </div>
        <div className="right-main-container">
          <div className="main-home-description">
            <div className="text-title-home">
              <p>Hi!👋</p>
              <p>Welcome to my website</p>
              <p>I'm William Diaz Orozco</p>
              <p className="description-developer">| Fullstack Web Developer - Javascript Developer |</p>
              <div className="btn-home-contact">
                <Link to="/contact" className="contact-home no-link-style">
                  Contact me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

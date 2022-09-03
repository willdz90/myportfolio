import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Profile1 from '../assets/profile1.jpg';
import Profile2 from '../assets/profile2.jpg';
import Profile3 from '../assets/Profile3.jpg';
import { Link } from "react-router-dom";
import "../styles/About.css";

export default function Home() {

  const VALLEDUPAR = "https://www.google.com/maps/place/Valledupar,+Cesar/@10.4645885,-73.2932692,13z/data=!3m1!4b1!4m5!3m4!1s0x8e8ab9b5d6cf71d7:0x84a43625b14c234a!8m2!3d10.4742449!4d-73.2436335"
  
  return (
    <>
      <Navbar />
      <div className="aboutHomeContainer">
        <div className="left-about-container">
          {/* <img src={Profile} alt="profile" className="img-about-home profile"/> */}
          <img src={Profile3} alt="profile3" className="img-about-home profile3"/>
          <img src={Profile2} alt="profile2" className="img-about-home profile2"/>
          <img src={Profile1} alt="profile1" className="img-about-home profile1"/>
          <img/>
        </div>
        <div className="right-about-container">
          <div className="about-home-description">
            <div className="text-description">
              <p>I'm a Fullstack Web Developer born in <a href={VALLEDUPAR} target="_blank" className="no-link-about">
              Valledupar, Cesar, Colombia</a>, as a Web Dev I have
              the notions and knowledge to create efficiency and dynamics SPA like this portfolio app, I can work 
              with technologies for the frontend and backend as well and handle DB NoSql and Sql, you can check all 
              my background <Link to="/techs" className="no-link-about">here</Link>.</p>
              <p>  
              My travel in tech begins in 2012 when I made a course of Web Design and discovered my 
              skills to create amazing websites, since then I have been improving my skills follow 
              important authors like Kyle Simpson, Tyler McGinnis, Samer Buna and Eric Elliot.</p> 
             <p>in 2021 I have the opportunity to test my skills and knowledge into the program of 
              the Ministry of Information Technologies and Communications of Colombia to certified 
              50k developers and after that I entried into the bootcamp of Henry Academy to improve even 
              more my skills.</p> 
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import About from "../assets/about.png";
import Techs from "../assets/techs.png";
import Softs from "../assets/softs.png";
import Projects from "../assets/projects.png";
import Contact from "../assets/contact.png";
import Home from "../assets/home.png";

export default function Navbar() {
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];
  const title = path === "techs" || path === "softs" ? path + " Skills" : path;

  const [activeNav, setActiveNav] = useState(false);
  const [id, setId] = useState("");

  function showDescription(e) {
    setActiveNav(!activeNav);
    setId(e.target.id);
  }

  return (
    <>
      <div className="nav-container">
        <div className="rightContainer">
          <Link to="/about">
            <img
              src={About}
              alt="About"
              id="About"
              className="icon-navbar"
              onMouseOver={(e) => showDescription(e)}
              onMouseLeave={(e) => showDescription(e)}
            />
          </Link>
          <Link to="/techs">
            <img
              src={Techs}
              alt="Techs"
              id="Tech Skills"
              className="icon-navbar"
              onMouseOver={(e) => showDescription(e)}
              onMouseLeave={(e) => showDescription(e)}
            />
          </Link>
          <Link to="/softs">
            <img
              src={Softs}
              alt="Softs"
              id="Soft Skills"
              className="icon-navbar"
              onMouseOver={(e) => showDescription(e)}
              onMouseLeave={(e) => showDescription(e)}
            />
          </Link>
          <Link to="/projects">
            <img
              src={Projects}
              alt="Projects"
              id="Projects"
              className="icon-navbar"
              onMouseOver={(e) => showDescription(e)}
              onMouseLeave={(e) => showDescription(e)}
            />
          </Link>
          <Link to="/contact">
            <img
              src={Contact}
              alt="Contactme"
              id="Contact me"
              className="icon-navbar"
              onMouseOver={(e) => showDescription(e)}
              onMouseLeave={(e) => showDescription(e)}
            />
          </Link>
          {activeNav ? (
            <div className="nav-title">
              <h3 className="nav-title-description">{id}</h3>
            </div>
          ) : null}
        </div>
        <h1 className="title-component">{title}</h1>
        <div className="leftContainer">
          <Link to="/" className="title-portfolio">
            <img src={Home} alt="Contactme" className="icon-navbar" />
          </Link>
        </div>
      </div>
    </>
  );
}

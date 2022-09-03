import React, { useState } from "react";
import "../styles/Techs.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Profile3 from "../assets/Profile3.jpg";
import Figma from "../assets/techs/figma.png";
import Mongo from "../assets/techs/mongodb-logo.png";
import Node from "../assets/techs/node.png";
import Postman from "../assets/techs/postman.png";
import PgAdmin from "../assets/techs/pgadmin.png";
import Git from "../assets/techs/git.png";
import Github from "../assets/techs/github.png";
import Trello from "../assets/techs/trello.png";
import Vscode from "../assets/techs/vscode.png";
import Nodemailer from "../assets/techs/nodemailer.png";
import Jest from "../assets/techs/jest.png";
import JWT from "../assets/techs/jwt.png";
import Bcrypt from "../assets/techs/bcrypt.png";
import Express from "../assets/techs/express.png";
import Html from "../assets/techs/html.png";
import Css from "../assets/techs/css.png";
import Js from "../assets/techs/js.png";
import react from "../assets/techs/react.png";
import redux from "../assets/techs/redux.png";
import query from "../assets/techs/query.png";
// from "../assets/techs/";

export default function Techs() {
  const [active, setActive] = useState(false);
  const [activeBack, setActiveBack] = useState(false);
  const [activeFront, setActiveFront] = useState(false);
  const [activeDB, setActiveDB] = useState(false);
  const [idFirst, setIdFirst] = useState("");
  const [idBack, setIdBack] = useState("");
  const [idFront, setIdFront] = useState("");
  const [idDB, setIdDB] = useState("");

  function changeClassDescription(e) {
    setActive(!active);
    setIdFirst(e.target.id);
  }

  function showTitleBack(e) {
    setActiveBack(!activeBack);
    setIdBack(e.target.id);
  }
  function showTitleFront(e) {
    setActiveFront(!activeFront);
    setIdFront(e.target.id);
  }
  function showTitleDB(e) {
    setActiveDB(!activeDB);
    setIdDB(e.target.id);
  }

  return (
    <>
      <Navbar />

      <div className="utils-techs-cotainer flex-tech-container">
        <h2>UTILS</h2>
        <div className="row-techs-utils-db">
          <img
            src={Postman}
            alt="Postman"
            className="tech-icon2"
            id="Postman"
            onMouseOver={(e) => changeClassDescription(e)}
            onMouseLeave={(e) => changeClassDescription(e)}
          />
          <img
            src={Git}
            alt="Git"
            className="tech-icon"
            id="Git"
            onMouseOver={(e) => changeClassDescription(e)}
            onMouseLeave={(e) => changeClassDescription(e)}
          />
          <img
            src={PgAdmin}
            alt="PgAdmin"
            className="tech-icon2"
            id="PgAdmin"
            onMouseOver={(e) => changeClassDescription(e)}
            onMouseLeave={(e) => changeClassDescription(e)}
          />
        </div>
        <div className="row-techs-utils-db"></div>
        <div className="row-techs-utils-db">
          <img
            src={Github}
            alt="figma"
            className="tech-icon"
            id="Github"
            onMouseOver={(e) => changeClassDescription(e)}
            onMouseLeave={(e) => changeClassDescription(e)}
          />
          <img
            src={Trello}
            alt="Trello"
            className="tech-icon"
            id="Trello"
            onMouseOver={(e) => changeClassDescription(e)}
            onMouseLeave={(e) => changeClassDescription(e)}
          />
          <img
            src={Vscode}
            alt="Vscode"
            className="tech-icon"
            id="Vscode"
            onMouseOver={(e) => changeClassDescription(e)}
            onMouseLeave={(e) => changeClassDescription(e)}
          />
          <img
            src={Figma}
            alt="Figma"
            className="tech-icon"
            id="Figma"
            onMouseOver={(e) => changeClassDescription(e)}
            onMouseLeave={(e) => changeClassDescription(e)}
          />
          {active ? (
            <div className="tech-title title-position">
              <h3 className="tech-title-description">{idFirst}</h3>
            </div>
          ) : null}
        </div>
      </div>

      <div className="techs-main-container flex-tech-container">
        <div className="left-techs-container flex-tech-container">
        <div className="first-column-backend">
        {activeFront ? (
              <div className="front-title title-position">
                <h3 className="front-title-description">{idFront}</h3>
              </div>
            ) : null}
            <img
              src={Html}
              alt="Html"
              id="HTML5"
              className="tech-icon2"
              onMouseOver={(e) => showTitleFront(e)}
              onMouseLeave={(e) => showTitleFront(e)}
            />
            <img
              src={Css}
              alt="Css"
              id="CSS3"
              className="tech-icon2"
              onMouseOver={(e) => showTitleFront(e)}
              onMouseLeave={(e) => showTitleFront(e)}
            />
            <img
              src={Js}
              alt="Js"
              id="JavascriptES6"
              className="tech-icon22"
              onMouseOver={(e) => showTitleFront(e)}
              onMouseLeave={(e) => showTitleFront(e)}
            />
          </div>
          <div className="first-column-backend">
            <img
              src={query}
              alt="query"
              id="ReactQuery"
              className="tech-icon2"
              onMouseOver={(e) => showTitleFront(e)}
              onMouseLeave={(e) => showTitleFront(e)}
            />
            <img
              src={react}
              alt="react"
              id="ReactJS"
              className="tech-icon2"
              onMouseOver={(e) => showTitleFront(e)}
              onMouseLeave={(e) => showTitleFront(e)}
            />
            <img
              src={redux}
              alt="redux"
              id="Redux"
              className="tech-icon2"
              onMouseOver={(e) => showTitleFront(e)}
              onMouseLeave={(e) => showTitleFront(e)}
            />
          </div>
          <h2 className="front-back-text">FRONTEND</h2>
        </div>

        <div className="center-techs-container">
          <img
            src={Profile3}
            alt="profile3"
            className="img-about-home profile-techs"
          />
        </div>

        <div className="right-techs-container flex-tech-container">
          <h2 className="front-back-text">BACKEND</h2>
          <div className="first-column-backend">
            {activeBack ? (
              <div className="back-title title-position">
                <h3 className="back-title-description">{idBack}</h3>
              </div>
            ) : null}
            <img
              src={Node}
              alt="node"
              id="Node"
              className="tech-icon2"
              onMouseOver={(e) => showTitleBack(e)}
              onMouseLeave={(e) => showTitleBack(e)}
            />
            <img
              src={Express}
              alt="node"
              id="Express"
              className="tech-icon"
              onMouseOver={(e) => showTitleBack(e)}
              onMouseLeave={(e) => showTitleBack(e)}
            />
            <img
              src={Jest}
              alt="node"
              id="Jest"
              className="tech-icon2"
              onMouseOver={(e) => showTitleBack(e)}
              onMouseLeave={(e) => showTitleBack(e)}
            />
          </div>
          <div className="first-column-backend">
            <img
              src={JWT}
              alt="node"
              id="JsonWebToken"
              className="tech-icon"
              onMouseOver={(e) => showTitleBack(e)}
              onMouseLeave={(e) => showTitleBack(e)}
            />
            <img
              src={Bcrypt}
              alt="node"
              id="Bcrypt"
              className="tech-icon"
              onMouseOver={(e) => showTitleBack(e)}
              onMouseLeave={(e) => showTitleBack(e)}
            />
            <img
              src={Nodemailer}
              alt="nodemailer"
              id="Nodemailer"
              className="tech-icon2"
              onMouseOver={(e) => showTitleBack(e)}
              onMouseLeave={(e) => showTitleBack(e)}
            />
          </div>
        </div>
      </div>
      <div className="database-techs-cotainer flex-tech-container">
        <h2>DATABASES AND OTHERS</h2>
        <img src={Mongo} alt="mongoDB" className="tech-icon" id="mongoDB" />
      </div>
      <Footer />
    </>
  );
}

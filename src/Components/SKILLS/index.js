import React, { Component } from "react";
import SkillList from "./skill-list";
import "./index.css";
// Import media
import SqlPNG from "../../media/SQL.png";
import Csharp from "../../media/Csharp.png";
import Cplus from "../../media/Cplus.png";
import Html5 from "../../media/html5.png";
import Css from "../../media/css.png";
import Bootstrap from "../../media/bootstrap.png";
import Javascript from "../../media/javascript.png";
import Nodejs from "../../media/nodejs.png";
import Reactjs from "../../media/react.png";
import Wordpress from "../../media/wordpress.png";

class Skills extends Component {
  shouldComponentUpdate() {
    console.log("Skills ->  SCP");
    return false;
  }
  render() {
    console.log("Skills -> RENDER!!!");
    return (
      <section id="SKILLS" className="all-sections">
        <h1 className="education-title-h">SKILLS</h1>
        <p className="schools-skills-p skills-p">
          PROGRAMMING LANGUAGES & TOOLS
        </p>
        <div className="skills-icon-div">
          <img src={Html5} alt="html5" />
          <img src={Css} alt="css" />
          <img src={Javascript} alt="javascript" />
          <img src={Bootstrap} alt="bootstrap" />
          <img src={Reactjs} alt="react" />
          <img src={Nodejs} alt="nodejs" />
          <img src={Wordpress} alt="wordpress" />
          <img alt="sqlpng" src={SqlPNG} />
          <img alt="cpng" src={Csharp} />
          <img alt="cplus" src={Cplus} />
        </div>
        <p className="schools-skills-p add-skills-p">ADDITIONAL SKILLS</p>
        <ul className="add-skills-ul">
          {SkillList.map((el) => {
            return (
              <li key={el}>
                <i className="fas fa-check"></i>
                <p className="school-details-p skills-ul-p">{el}</p>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Skills;

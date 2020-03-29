import React, { Component } from "react";
import SqlPNG from "../../media/SQL.png";
import Csharp from "../../media/Csharp.png";
import Cplus from "../../media/Cplus.png";
import SkillList from "./skill-list";
import "./index.css";

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
          <i className="fab fa-html5 fa-4x"></i>
          <i className="fab fa-css3-alt fa-4x"></i>
          <i className="fab fa-js-square fa-4x"></i>
          <i className="fab fa-bootstrap fa-4x"></i>
          <i className="fab fa-node-js fa-4x"></i>
          <i className="fab fa-react fa-4x"></i>
          <i className="fab fa-wordpress fa-4x"></i>
          <img alt="sqlpng" src={SqlPNG} />
          <img alt="cpng" src={Csharp} />
          <img alt="cplus" src={Cplus} />
        </div>
        <p className="schools-skills-p add-skills-p">ADDITIONAL SKILLS</p>
        <ul className="add-skills-ul">
          {SkillList.map(el => {
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

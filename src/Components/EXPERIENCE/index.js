import React, { Component } from "react";
import firstJob from "./list-job";
import "./index.css";

class Exprience extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <section id="EXPERIENCE" className="all-sections">
        <div className="experience-observe" observe="3"></div>
        <h1 className="education-title-h">EXPERIENCE</h1>
        <div className="education-warpper-first-div">
          <div className="education-first-inside-div">
            <p className="school-title-p">SHIP AGENT</p>
            <p className="schools-skills-p">Allalouf LTD</p>
            <ul>
              {firstJob.first.map((el) => {
                return <li key={el.key}>{el.skills}</li>;
              })}
            </ul>
          </div>
          <p className="education-first-year-p">2017 - Present</p>
        </div>

        <div className="education-warpper-first-div exp-formarg">
          <div className="education-first-inside-div">
            <p className="school-title-p exp-width-p">PRIVATE BUSINESS</p>
            <p className="schools-skills-p">Retail Sector</p>
            <ul>
              {firstJob.second.map((el) => {
                return <li key={el.key}>{el.skills}</li>;
              })}
            </ul>
          </div>
          <p className="education-first-year-p">2013 - 2017</p>
        </div>
      </section>
    );
  }
}

export default Exprience;

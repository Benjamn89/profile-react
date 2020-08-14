import React, { Component } from "react";
import "./index.css";

class Education extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <section id="EDUCATION" className="all-sections">
        <div className="education-observe" observe="2"></div>
        <h1 className="education-title-h" observe="2">
          EDUCATION
        </h1>
        <div className="education-warpper-first-div">
          <div className="education-first-inside-div">
            <p className="school-title-p">Self-Taught</p>
            <p className="schools-skills-p">Web Developing - Programming</p>
          </div>
          <p className="education-first-year-p">2019 - Forever</p>
        </div>
        <div className="education-warpper-first-div">
          <div className="education-first-inside-div">
            <p className="school-title-p title-second-p">JOHN BRYCE</p>
            <p className="schools-skills-p">IP NETWORKING MANAGER</p>
            <p className="school-details-p second-detail-p">
              CCNA Certificated
            </p>
          </div>
          <p className="education-first-year-p">2014 - 2015</p>
        </div>
      </section>
    );
  }
}

export default Education;

import React, { Component } from "react";
import "./index.css";

class Education extends Component {
  shouldComponentUpdate() {
    console.log("Education -> SCP");
    return false;
  }

  render() {
    console.log("Education -> RENDER!!!");
    return (
      <section id="EDUCATION" className="all-sections">
        <h1 className="education-title-h">EDUCATION</h1>
        <div className="education-warpper-first-div">
          <div className="education-first-inside-div">
            <p className="school-title-p">SELF LEARNING</p>
            <p className="schools-skills-p">Web Developing - Programming</p>
            <p className="school-details-p">
              Focus on wide learning i.o specific professionalism
            </p>
          </div>
          <p className="education-first-year-p">2017 - Forever</p>
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

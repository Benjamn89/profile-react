import React, { Component } from "react";
import "./index.css";

class Military extends Component {
  shouldComponentUpdate() {
    console.log("Military -> SCP");
    return false;
  }

  render() {
    console.log("Military -> REDNER!!!");
    return (
      <section id="MILITARY">
        <h1 className="education-title-h">MILITARY</h1>
        <div className="education-warpper-first-div">
          <p className="school-details-p milit-mar-p">
            Combatant in an elite unit | Armor Brigade.
          </p>
          <p className="education-first-year-p">2008 - 2011</p>
        </div>
      </section>
    );
  }
}

export default Military;

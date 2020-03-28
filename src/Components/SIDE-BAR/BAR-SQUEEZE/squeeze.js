import React, { Component } from "react";
import $ from "jquery";
import "./squeeze.css";

class SqueezeBar extends Component {
  shouldComponentUpdate() {
    console.log("SqueezeBar -> SCP");
    return true;
  }

  expand = () => {
    $(".squeeze-titles-div").toggleClass("squeeze-titles-move");
    $(".squeeze-titles-p").toggleClass("add-opacity-p");
  };

  render() {
    console.log("SqueezeBar ->  RENDER!!!");
    return (
      <div className="squeeze-wrapper-div">
        <div className="squeeze-bar-div">
          <p className="squeeze-p">Binyamin Tal</p>
          <div onClick={this.expand} className="squeeze-line-div">
            <div className="squeeze-inside-div" />
            <div className="squeeze-inside-div" />
            <div className="squeeze-inside-div" />
          </div>
        </div>
        <div className="squeeze-titles-div">
          <p className="squeeze-titles-p">SUMMARY</p>
          <p className="squeeze-titles-p">PROJECTS</p>
          <p className="squeeze-titles-p">EDUCATION</p>
          <p className="squeeze-titles-p">EXPERIENCE</p>
          <p className="squeeze-titles-p">SKILLS</p>
          <p className="squeeze-titles-p">MILITARY SERVICE</p>
          <p className="squeeze-titles-p">LANGUAGES</p>
        </div>
      </div>
    );
  }
}

export default SqueezeBar;

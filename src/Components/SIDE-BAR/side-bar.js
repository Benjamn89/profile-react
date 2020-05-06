import React, { Component } from "react";
import "./side-bar.css";
import SqueezeBar from "./BAR-SQUEEZE/squeeze";
import ProfileImg from "../../media/Myprofile.jpg";
import SideBarTitles from "./side-bar-titles";
import jump from "jump.js";
import easeInExpo from "./myEasing";

class SideBar extends Component {
  shouldComponentUpdate() {
    return false;
  }

  clickToScroll = (e) => {
    var innerValue = e.target.innerHTML;
    if (innerValue === "MILITARY SERVICE") {
      innerValue = "MILITARY";
    }
    jump("#" + innerValue, {
      duration: 700,
      easing: easeInExpo,
    });
  };

  render() {
    return (
      <div className="wrapper-side-bar">
        <SqueezeBar />
        <div className="side-bar-div">
          <img className="side-bar-img" src={ProfileImg} alt="progile-img" />
          {SideBarTitles.map((el) => {
            return (
              <p onClick={this.clickToScroll} key={el} className="side-bar-p">
                {el}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SideBar;

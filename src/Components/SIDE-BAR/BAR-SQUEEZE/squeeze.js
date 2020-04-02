import React, { Component } from "react";
import SideBarTitles from "../side-bar-titles";
import jump from "jump.js";
import easeInExpo from "../myEasing";
import "./squeeze.css";
import expandFunctions from "./expandFunctions";

class SqueezeBar extends Component {
  shouldComponentUpdate() {
    // console.log("SqueezeBar -> SCP");
    return true;
  }

  clickToScroll = e => {
    var innerValue = e.target.innerHTML;
    if (innerValue === "MILITARY SERVICE") {
      innerValue = "MILITARY";
    }
    expandFunctions();
    jump("#" + innerValue, {
      duration: 700,
      easing: easeInExpo
    });
  };

  render() {
    // console.log("SqueezeBar ->  RENDER!!!");
    return (
      <div className="squeeze-wrapper-div">
        <div className="squeeze-bar-div">
          <p className="squeeze-p">Binyamin Tal</p>
          <div onClick={expandFunctions} className="squeeze-line-div">
            <div className="squeeze-inside-div s-i-f" />
            <div className="squeeze-inside-div s-i-s" />
            <div className="squeeze-inside-div s-i-t" />
          </div>
        </div>
        <div className="squeeze-titles-div">
          {SideBarTitles.map(el => {
            return (
              <p
                key={el}
                onClick={this.clickToScroll}
                className="squeeze-titles-p"
              >
                {el}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SqueezeBar;

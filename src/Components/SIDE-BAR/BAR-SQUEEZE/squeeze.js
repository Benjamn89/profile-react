import React, { Component } from "react";
import SideBarTitles from "../side-bar-titles";
import jump from "jump.js";
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

  clickToScroll = e => {
    var innerValue = e.target.innerHTML;
    if (innerValue === "MILITARY SERVICE") {
      innerValue = "MILITARY";
    }
    jump("#" + innerValue, {
      duration: 500
    });
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
          {SideBarTitles.map(el => {
            return (
              <p onClick={this.clickToScroll} className="squeeze-titles-p">
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

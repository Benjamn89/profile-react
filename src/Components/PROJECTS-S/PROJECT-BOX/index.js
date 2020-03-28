import React, { Component } from "react";
import "./index.css";

class ProjectBox extends Component {
  shouldComponentUpdate() {
    console.log("ProjectBox -> SCP");
    return false;
  }
  render() {
    console.log("ProjectBox -> RENDER!!!");
    return <div className="projectbox-div">{this.props.children}</div>;
  }
}

export default ProjectBox;

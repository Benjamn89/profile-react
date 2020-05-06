import React, { Component } from "react";
import "./index.css";

class ProjectBox extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return <div className="projectbox-div">{this.props.children}</div>;
  }
}

export default ProjectBox;

import React from "react";
import "./App.css";
import SideBar from "./Components/SIDE-BAR/side-bar";
import SummaryS from "./Components/SummaryS/index";
import ProjectS from "./Components/PROJECTS-S/container";
import Education from "./Components/EDUCATION/index";
import Experience from "./Components/EXPERIENCE/index";
import Skills from "./Components/SKILLS/index";
import Military from "./Components/MILITARY/index";
import Lang from "./Components/LANGUAGES/index";

const App = props => {
  return (
    <div className="App">
      <SideBar />
      <SummaryS />
      <ProjectS />
      <Education />
      <Experience />
      <Skills />
      <Military />
      <Lang />
    </div>
  );
};

export default App;

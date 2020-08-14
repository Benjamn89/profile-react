import React, { useEffect } from "react";
import "./App.css";
import SideBar from "./Components/SIDE-BAR/side-bar";
import SummaryS from "./Components/SummaryS/index";
import ProjectS from "./Components/PROJECTS-S/container";
import Education from "./Components/EDUCATION/index";
import Experience from "./Components/EXPERIENCE/index";
import Skills from "./Components/SKILLS/index";
import Military from "./Components/MILITARY/index";
import Lang from "./Components/LANGUAGES/index";

const App = () => {
  useEffect(() => {
    const sideBarHeaders = document.querySelectorAll(".side-bar-p");
    const observeCallback = (entry) => {
      if (entry[0].isIntersecting) {
        const observeAttribute = parseInt(
          entry[0].target.getAttribute("observe")
        );
        if (document.querySelector(".side-bar-p-on")) {
          document
            .querySelector(".side-bar-p-on")
            .classList.remove("side-bar-p-on");
        }
        sideBarHeaders[observeAttribute].classList.add("side-bar-p-on");
      }
    };
    new IntersectionObserver(observeCallback).observe(
      document.querySelector(".summary-observe")
    );
    new IntersectionObserver(observeCallback).observe(
      document.querySelector(".projects-observe")
    );
    new IntersectionObserver(observeCallback).observe(
      document.querySelector(".education-observe")
    );
    new IntersectionObserver(observeCallback).observe(
      document.querySelector(".experience-observe")
    );
    new IntersectionObserver(observeCallback).observe(
      document.querySelector(".skills-observe")
    );
    new IntersectionObserver(observeCallback).observe(
      document.querySelector(".military-observe")
    );
    new IntersectionObserver(observeCallback).observe(
      document.querySelector(".languages-obseve")
    );
  });
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

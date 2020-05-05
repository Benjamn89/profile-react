import React, { Component } from "react";
import ProjectBox from "./PROJECT-BOX/index";
import { ProjectsBoxProperty } from "./PROJECT-BOX/project-box-property";
import "./container.css";

class ProjectS extends Component {
  shouldComponentUpdate() {
    console.log("ProjectS -> SCP");
    return false;
  }
  render() {
    console.log("ProjectS -> RENDER!!!");
    return (
      <section id="PROJECTS">
        <div className="project-wrapper-div">
          <h1 className="project-title-h">PROJECTS</h1>
          <div className="projectbox-wrapper-div">
            {ProjectsBoxProperty.map((el) => {
              return (
                <ProjectBox key={el.objects.alt}>
                  <img
                    className="projects-images"
                    alt={el.objects.alt}
                    src={el.objects.img}
                  />
                  <p className="project-title-p">{el.objects.projectSum}</p>
                  <p className="project-skills-use">{el.objects.usedSkills}</p>
                  <div className="project-visit-button">
                    <a
                      className="project-visit-a"
                      href={el.objects.linkTo}
                      target={el.objects.linkTo}
                    >
                      Explore
                    </a>
                    {el.objects.medallie ? (
                      <img
                        className="medallie-img"
                        src={el.objects.medallie}
                        alt={el.objects.alt}
                      />
                    ) : null}
                  </div>
                </ProjectBox>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectS;

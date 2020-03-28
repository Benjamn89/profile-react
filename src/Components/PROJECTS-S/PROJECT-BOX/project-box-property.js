import MinyanImg from "../../../media/Minyan-project.PNG";
import ProfileImg from "../../../media/Profile-project.PNG";

console.log("ProjectBoxProperty - is operated");

var ProjectsBoxProperty = [
  {
    objects: {
      projectSum: "Webapp that finds prayers",
      usedSkills: "HTML, CSS, JS",
      linkTo: "https://tal-minyan.herokuapp.com/",
      img: MinyanImg,
      alt: "Minyan"
    }
  },
  {
    objects: {
      projectSum: "My Profile",
      usedSkills: "React",
      linkTo: "http://localhost:3000/",
      img: ProfileImg,
      alt: "profile"
    }
  }
];

export { MinyanImg, ProfileImg, ProjectsBoxProperty };

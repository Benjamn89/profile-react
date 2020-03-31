import MinyanImg from "../../../media/Minyan-project.PNG";
import ProfileImg from "../../../media/Profile-project.PNG";
import HamburgerImg from "../../../media/Hamburger.PNG";
import MyShop from "../../../media/shop-react.PNG";

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
      linkTo: "https://binyamintal.netlify.com/",
      img: ProfileImg,
      alt: "profile"
    }
  },
  {
    objects: {
      projectSum: "Hamburger",
      usedSkills: "React",
      linkTo: "https://hamburger-binyamin.netlify.com/",
      img: HamburgerImg,
      alt: "Hamburger"
    }
  },
  {
    objects: {
      projectSum: "Shopping Online",
      usedSkills: "React",
      linkTo: "https://shoping-with-react.netlify.com/",
      img: MyShop,
      alt: "Shopping"
    }
  }
];

export { ProjectsBoxProperty };

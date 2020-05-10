import MinyanImg from "../../../media/Minyan-project.PNG";
import ProfileImg from "../../../media/Profile-project.PNG";
import HamburgerImg from "../../../media/Hamburger.PNG";
import MyShop from "../../../media/shop-react2.PNG";
import Allalouf from "../../../media/Allalouf.PNG";
import Sted from "../../../media/sted.png";
import Medallie from "../../../media/medallie.png";

var ProjectsBoxProperty = [
  {
    objects: {
      projectSum: "Social Media",
      usedSkills: "Full Stack/ React",
      linkTo: "https://sted-production.netlify.app/",
      img: Sted,
      alt: "Sted",
      medallie: Medallie,
      tools: [
        "Create React App",
        "React Router with dyanmic routes",
        "Redux",
        "Thunk",
        "FaundaDB - NoSQL database with real time data",
        "Firebase Storage bucket for loading media",
        "Full communicate Front end - Backend",
        "Authentication via database",
        "Local Storage",
      ],
    },
  },
  {
    objects: {
      projectSum: "Arrival Ships To Ashdod Port",
      usedSkills: "React, Redux, thunk",
      linkTo: "https://allalouf.netlify.com/",
      img: Allalouf,
      alt: "Allalouf",
      tools: [
        "Create React App",
        "Redux",
        "Thunk",
        "FaunaDB - NoSQL database",
        "React-Select",
      ],
    },
  },
  {
    objects: {
      projectSum: "Shopping Online",
      usedSkills: "React",
      linkTo: "https://shoping-with-react.netlify.com/",
      img: MyShop,
      alt: "Shopping",
      tools: ["Create React App", "Redux"],
    },
  },
  {
    objects: {
      projectSum: "Hamburger",
      usedSkills: "React",
      linkTo: "https://hamburger-binyamin.netlify.com/",
      img: HamburgerImg,
      alt: "Hamburger",
      tools: ["Create React App", "Redux"],
    },
  },
  {
    objects: {
      projectSum: "Webapp that finds prayers",
      usedSkills: "NodeJS, MongoDB",
      linkTo: "https://tal-minyan.herokuapp.com/",
      img: MinyanImg,
      alt: "Minyan",
      tools: [
        "NodeJS",
        "Express",
        "MongoDB",
        "Sendgrid - For sending Emails",
        "Select2",
      ],
    },
  },
  {
    objects: {
      projectSum: "My Profile",
      usedSkills: "React",
      linkTo: "https://binyamintal.netlify.com/",
      img: ProfileImg,
      alt: "profile",
      tools: [
        "Create React App (for practicing React syntax/ reuse of React components",
      ],
    },
  },
];

export { ProjectsBoxProperty };

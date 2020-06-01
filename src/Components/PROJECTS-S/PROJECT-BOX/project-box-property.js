import MinyanImg from "../../../media/Minyan-project.PNG";
import Allalouf from "../../../media/Allalouf.PNG";
import Sted from "../../../media/sted.png";
import Medallie from "../../../media/medallie.png";
import ToyShop from "../../../media/toy-shop.png";

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
        "Thunk(Middleware)",
        "FaundaDB - NoSQL database with real time data",
        "Firebase Storage bucket for loading media",
        "Authentication via database",
        "Local Storage",
      ],
    },
  },
  {
    objects: {
      projectSum: "Online ToyShop",
      usedSkills: "React/ Redux/ SASS",
      linkTo: "https://toy-s.netlify.app/",
      img: ToyShop,
      alt: "Toys-shop",
      medallie: Medallie,
      tools: [
        "Create React App",
        "React Router",
        "Redux",
        "Thunk(Middleware)",
        "SASS(nodesass)",
        "CSS3/ Animation",
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
        "Thunk(Middleware)",
        "FaunaDB - NoSQL database",
        "React-Select",
      ],
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
];

export { ProjectsBoxProperty };

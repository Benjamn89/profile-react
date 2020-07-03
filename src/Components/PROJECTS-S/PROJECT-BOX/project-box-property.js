import MinyanImg from "../../../media/Minyan-project.PNG";
import Allalouf from "../../../media/Allalouf.PNG";
import Sted from "../../../media/sted.png";
import Medallie from "../../../media/medallie.png";
import ToyShop from "../../../media/toy-shop.png";
import Freelance from "../../../media/freelance.jpg";

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
      projectSum: "My Freelance",
      usedSkills: "Pure HTML, VanillaJS, SASS",
      linkTo: "https://benjamn.netlify.app/",
      img: Freelance,
      alt: "Freelance",
      medallie: Medallie,
      tools: [
        "Time to prove my design skills",
        "Pure HTML, SASS, VanillaJS",
        "Everything done by me (without using Wordpress/ plugins/ frameworks)",
        "Hard coding from scratch",
        "Full responsive for all screen sizes (Tablets/ Phones/ PC)",
        "Figma (Design tool for creating svg files)",
        "Adobe Photoshop cc 2020",
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
];

export { ProjectsBoxProperty };

import MinyanImg from "../../../media/Minyan-project.PNG";
import Allalouf from "../../../media/Allalouf.PNG";
import Sted from "../../../media/sted.png";
import Medallie from "../../../media/medallie.png";
import ToyShop from "../../../media/toy-shop.png";
import Freelance from "../../../media/freelance.jpg";
import Oled from "../../../media/oled.png";
import Webflow from "../../../media/webflow.png";

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
        "Create react app",
        "React router with dyanmic routes",
        "Redux",
        "Thunk(middleware)",
        "Faunda db - nosql database with real time data",
        "Firebase storage bucket for loading media",
        "Authentication via database",
        "Local storage",
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
        "Create react app",
        "React router",
        "Redux",
        "Thunk(middleware)",
        "Sass(nodesass)",
        "Css3/ animation",
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
        "Pure html, sass, vanillajs",
        "Everything was done by me (without wordpress/ plugins/ frameworks)",
        "Hard coding from scratch",
        "Full responsive for all screen sizes (tablets/ phones/ pc)",
        "Figma (design tool for creating svg files)",
        "Adobe photoshop cc 2020",
      ],
    },
  },
  {
    objects: {
      projectSum: "BenjaMn UI",
      usedSkills: "Pure HTML, VanillaJS, SASS",
      linkTo: "https://benjamn-ui.netlify.app/",
      img: Webflow,
      alt: "BenjaMn",
      medallie: Medallie,
      tools: [
        "Pure html, sass, vanillajs",
        "Hard coding from scratch (no jquery, aos etc...)",
        "Full responsive for all screen sizes (tablets/ phones/ pc)",
        "Figma (design tool for creating svg files)",
        "Adobe photoshop cc 2020",
      ],
    },
  },
  {
    objects: {
      projectSum: "OLED Led",
      usedSkills: "Pure HTML, VanillaJS, SASS",
      linkTo: "http://oled.netlify.com/",
      img: Oled,
      alt: "Oled",
      tools: [
        "Sass / vanillajs",
        "Css grid",
        "Figma",
        "Adobe photoshop cc 2020",
        "Hard coding from scratch",
        "Full responsive for all screen sizes (tablets/ phones/ pc)",
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

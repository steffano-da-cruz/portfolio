import guess from "./assets/images/guess-my-number.jpg";
import intro from "./assets/images/intro-section.jpg";
import omnifood from "./assets/images/omnifood.jpg";
import pig from "./assets/images/pig-game.jpg";
import sign from "./assets/images/sign-up-form.jpg";
import steps from "./assets/images/steps-react-app.jpg";
import portfolio from "./assets/images/portfolio.jpg";

const navbarInf = [
  {
    id: 1,
    mainLogo: "steffanodacruz",
    github: "logo-github",
    linkedin: "logo-linkedin",
    facebook: "logo-facebook",
    instagram: "logo-instagram",
  },
];

const skillsInf = [
  {
    id: 1,
    name: "HTML",
    level: "Intermediate",
  },
  {
    id: 2,
    name: "CSS",
    level: "Intermediate",
  },
  {
    id: 3,
    name: "JavaScript",
    level: "Intermediate",
  },
  {
    id: 4,
    name: "React",
    level: "Beginner",
  },
  {
    id: 5,
    name: "TypeScript",
    level: "Beginner",
  },
  {
    id: 6,
    name: "Node.js",
    level: "Beginner",
  },
  {
    id: 7,
    name: "SQL",
    level: "Beginner",
  },
  {
    id: 8,
    name: "English",
    level: "Advanced",
  },
  {
    id: 9,
    name: "Typing",
    level: "Advanced",
  },
];

const projectsInf = [
  {
    id: 1,
    image: omnifood,
    name: "Omnifood",
    link: "https://steffano-da-cruz.github.io/omnifood/",
    skills: "HTML, CSS and JavaScript",
  },
  {
    id: 2,
    image: intro,
    name: "Intro Section with Dropdown Navigation",
    link: "https://steffano-da-cruz.github.io/intro-section-with-dropdown-navigation/",
    skills: "HTML, CSS and JavaScript",
  },
  {
    id: 3,
    image: sign,
    name: "Newsletter Sign up Form",
    link: "https://newsletter-sign-up-form-steffano.netlify.app/",
    skills: "HTML, CSS and JavaScript",
  },
  {
    id: 4,
    image: pig,
    name: "Pig Game",
    link: "https://steffano-da-cruz.github.io/pig-game/",
    skills: "HTML, CSS and JavaScript",
  },
  {
    id: 5,
    image: guess,
    name: "Guess My Number",
    link: "https://steffano-da-cruz.github.io/guess-my-number/",
    skills: "HTML, CSS and JavaScript",
  },
  {
    id: 6,
    image: steps,
    name: "Steps React App",
    link: "https://steps-react-app-steffano.netlify.app/",
    skills: "CSS and React",
  },
  {
    id: 7,
    image: portfolio,
    name: "My Portfolio",
    link: "https://portfolio-steffano.netlify.app/",
    skills: "CSS and React",
  },
];

export default navbarInf;
export { skillsInf, projectsInf };

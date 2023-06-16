import L_HTML5 from "../../src/assets/img/skills/html-5.svg"                         
import L_CSS3 from "../../src/assets/img/skills/css3.svg";
import L_SASS from "../../src/assets/img/skills/sass-1.svg";
import L_BOOTSTRAP from "../../src/assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../src/assets/img/skills/react.svg";
import L_REDUX from "../../src/assets/img/skills/redux.svg";
import L_MATERIALUI from "../../src/assets/img/skills/material-ui-1.svg";
import L_REACT_BOOTSTRAP from "../../src/assets/img/skills/react-bootstrap.svg";
import L_GIT from "../../src/assets/img/skills/git-icon.svg";
import Node from '../../src/assets/img/skills/nodejs.svg'
import express from '../../src/assets/img/skills/expres.svg'
import L_GITHUB_PAGES from "../../src/assets/img/skills/github.svg";
import L_JAVASCRIPT from "../../src/assets/img/skills/javascript.svg";
import L_NETLIFY from "../../src/assets/img/skills/netlify-icon.svg"
import L_FIREBASE from "../../src/assets/img/skills/firebase-icon.svg"
import L_VERCEL from "../../src/assets/img/skills/logo-vercel.svg"
import L_TAILWIND from "../../src/assets/img/skills/tailwindcss-icon.svg"
import Mongo from '../../src/assets/img/skills/Mongo.svg'
import next from '../../src/assets/img/skills/next.svg'

export const skills = {
    frontend: [
      {
        link: "https://en.wikipedia.org/wiki/HTML5",
        imgAltText: "HTML 5",
        imgSrc: L_HTML5,
        skillName: "HTML5",
      },
      {
        link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
        imgAltText: "CSS 3",
        imgSrc: L_CSS3,
        skillName: "CSS3",
      },
      {
        link: "https://www.javascript.com/",
        imgAltText: "JavaScript",
        imgSrc: L_JAVASCRIPT,
        skillName: "JavaScript",
      },
      {
        link: "https://sass-lang.com/",
        imgAltText: "Sass",
        imgSrc: L_SASS,
        skillName: "Sass",
      },
      {
        link: "https://reactjs.org/",
        imgAltText: "React JS",
        imgSrc: L_REACT,
        skillName: "React JS",
      },
      {
        link: "https://redux.js.org/",
        imgAltText: "Redux",
        imgSrc: L_REDUX,
        skillName: "Redux",
      },
      {
        link: "https://redux.js.org/",
        imgAltText: "Next-js",
        imgSrc: next,
        skillName: "Next-js",
      },
    ],
    frameworks:[
        {
            link: "https://material-ui.com/",
            imgAltText: "Material-UI",
            imgSrc: L_MATERIALUI,
            skillName: "Material-UI",
          },
          {
            link: "https://react-bootstrap.github.io/",
            imgAltText: "React Bootstrap",
            imgSrc: L_REACT_BOOTSTRAP,
            skillName: "React Bootstrap",
          },
          {
            link: "https://getbootstrap.com/",
            imgAltText: "Bootstrap",
            imgSrc: L_BOOTSTRAP,
            skillName: "Bootstrap",
          },
          {
            link: "https://tailwindcss.com/",
            imgAltText: "tailwindcss",
            imgSrc: L_TAILWIND,
            skillName: "Tailwind CSS",
          },
          {
            link: "https://tailwindcss.com/",
            imgAltText: "Node-js",
            imgSrc: Node,
            skillName: "Node-js",
          },
                

          {
            link: "https://tailwindcss.com/",
            imgAltText: "Node-js",
            imgSrc: express,
            skillName: "Express-js",
          },
                
    


    ],

    hostingPlatforms: [
   
      {
        link: "https://www.netlify.com/",
        imgAltText: "Netlify",
        imgSrc: L_NETLIFY,
        skillName: "Netlify",
      },
      {
        link: "https://pages.github.com/",
        imgAltText: "GitHub Pages",
        imgSrc: L_GITHUB_PAGES,
        skillName: "GitHub Pages",
      },
      {
        link: "https://vercel.com/",
        imgAltText: "Vercel",
        imgSrc: L_VERCEL,
        skillName: "Vercel",
      },
      // {
      //   link: "https://www.heroku.com/",
      //   imgAltText: "Heroku",
      //   imgSrc: L_HEROKU,
      //   skillName: "Heroku",
      // }
    ],
    databases: [
      {
        link: "https://firebase.google.com/",
        imgAltText: "Firebase Database",
        imgSrc: L_FIREBASE,
        skillName: "Firebase Database",
      },
      {
        link: "https://firebase.google.com/docs/firestore",
        imgAltText: "Firestore",
        imgSrc: L_FIREBASE,
        skillName: "Cloud Firestore",
      },
      {
        link: "https://firebase.google.com/docs/firestore",
        imgAltText: "mogodb",
        imgSrc: Mongo,
        skillName: "Mongo-Db",
      }
    ],
    versionControl: [
      {
        link: "https://git-scm.com/",
        imgAltText: "GIT",
        imgSrc: L_GIT,
        skillName: "GIT",
      },
    ],
  };
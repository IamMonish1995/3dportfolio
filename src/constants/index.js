import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  crubano,
  pixonix,
  upcred,
  project1,
  project2,
  project3
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "SEO",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "WordPress Developer ",
    company_name: "Crubano Website Design Agency",
    icon: crubano,
    iconBg: "#383E56",
    date: "July.2021-Feb.2022",
    points: [
      "METRIMONIAL WEBSITES.",
      "ECOMMERCE WEBSITE",
      "DIGITAL MARKETING AGENCY WEBSITE.",
      "WEBCAM, KEYBOARD, MOUSE TEST WEBSITE.",
      "Worked as a Lead Wordpress Developer with the team of graphics designer and a content writer to deliver the best possible website to client using wordpress. Successfully delivered two matrimonial websites using And an Ecommerce website using woo-commerce plugin also provided real-time active user count using Google analytics premium press wordpress theme", 
    ],
  },
  {
    title: "React JS Developer",
    company_name: " UPCRED ",
    icon: upcred,
    iconBg: "#E6DEDD",
    date: "Feb.2022-June.2022 ",
    points: [
      "AI BASED INFLUENSER MARKETING PLATFORM WEBSITE (upcred.ai) Upcred’s Official website was designed in figma and its UI was built with ReactJs. I contributed majorly in optimizing performance of the application using various tools like lighthouse, code splitting, using ESlint and optimizing media.",

      "INFLUENSER’S DASHBOARD Influencer Dashboard was a platform built to add information about influencers in database for operation team which was built in NEXTJS and Material-UI.I helped in adding component for adding country-state city in feature to import bulk data from excel file.",


      "UPCRED BLOGS I used my previous experience while creating blogging website using wordpress theme, Also contributed in guiding content team for on-page SEO and helped them with Google indexing.",
    ],
  },

  {
    title: "Software Developer Engineer",
    company_name: "Pixonix Software Technology LLP",
    icon: pixonix,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "E-COMMERCE ANDROID AND IOS APP I contributed to this project as a React Native Developer. This is a B2B e-commerce application where we implemented a shopping flow as per the client's requirement",

      "TRUE SQUARE FEET Leading the React team for the front end and collaborating with the Dot Net team for the back end  of the True Square Feet Real Estate App ",

      "COMPLIANCE MANAGEMENT SYSTEM Leading the React team for the front end and collaborating with the Dot Net team for the back end  of the Compliance Management System",

      "PLAYER PERFORMANCE MANAGEMENT SYSTEM (PMS) I am contributing in this project as a Lead Full Stack Developer with the technology NEXT.JS in Frontend and EXPRESS.JS as Backend using Sequelize as ORM for connecting MySql Database, We are using Agile Methodology for development with the help of JIRA and for version control system we are using bitbucket. ",

      "IO T - C O N FIG U R ATO R (P EC K HA M ) My Role in this project is to optimize the existing code and adding new features in the project, Peckham is also using NEXT.JS as frontend with GetServerSideProps feature for using Server Side Rendering and ExpressJS as Backend technology. We have added new features like Azure Active Directory sign-in (Single Sign on using Azure) also Audit log for every post and delete APIs "
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Agency Website",
    description:
      "Creative Website to present the company's previous work",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://crubano.onrender.com",
  },
  {
    name: "Printing Website",
    description:
      "T-shirt and cup printing E-commerce Website",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "",
  },
  {
    name: "Ecommerce App",
    description:
      "Ecommerce Mobile Application Using React Native For Android and IOS",
    tags: [
      {
        name: "Reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };

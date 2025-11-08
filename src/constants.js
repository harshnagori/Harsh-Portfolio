// Skills Section Logo's

import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import scikitlearnLogo from './assets/tech_logo/scikit_learn.png';
import pandasLogo from './assets/tech_logo/pandas.png';
import numpyLogo from './assets/tech_logo/numpy.png';
import renderLogo from './assets/tech_logo/render.png';
import framermotionLogo from './assets/tech_logo/framer_motion.png';

// Experience Section Logo's
import codsoftLogo from './assets/company_logo/codsoft.png';
import ibmLogo from './assets/company_logo/ibmskillsbuild.png';

// Education Section Logo's
import ctaeLogo from './assets/education_logo/ctae.png';
import stAnthonyLogo from './assets/education_logo/school.jpg';

// Project Section Logo's
import eventureLogo from "./assets/work_logo/eventure.png";
import titanicLogo from "./assets/work_logo/titanic.png";
import diabetesLogo from "./assets/work_logo/machine_learning.webp";
import spamMailLogo from "./assets/work_logo/machine_learning.webp";
import toDesktopLogo from "./assets/work_logo/toDesktop.png";
import githubProfile from "./assets/work_logo/githubProfile.png";

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React.js', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Framer Motion', logo: framermotionLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express.js', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'NumPy', logo: numpyLogo },
      { name: 'Pandas', logo: pandasLogo },
      { name: 'scikit-learn', logo: scikitlearnLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools & Deployment',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Render', logo: renderLogo },
    ],
  },
];


export const experiences = [
  {
    id: 0,
    img: codsoftLogo,
    role: "Web Development Intern",
    company: "CodSoft",
    date: "June 2024 – July 2024",
    desc: "Designed and developed responsive web interfaces using React.js, HTML, CSS, and Tailwind CSS. Collaborated in real-world development tasks to deliver high-performance, cross-device compatible UIs and optimize user experience. Utilized Git and GitHub for effective version control and teamwork.",
    skills: ["React.js", "Tailwind CSS", "HTML", "CSS", "Git", "GitHub", "UI/UX"],
  },
  {
    id: 1,
    img: ibmLogo,
    role: "Data Analytics Trainee",
    company: "IBM SkillsBuild",
    date: "July 2025 – August 2025",
    desc: "Completed an intensive 1-month Data Analytics program, gaining hands-on experience in Python-based data analysis, Big Data fundamentals, and visualization techniques. Executed a real-world data cleaning project and built a Power BI dashboard to derive actionable insights.",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Power BI", "Data Analysis"],
  },
];
  
export const education = [
  {
    id: 0,
    img: ctaeLogo,
    school: "College of Technology and Engineering, Udaipur",
    date: "Nov 2022 - July 2026",
    grade: "7.4 CGPA",
    desc: "I am pursuing my Bachelor’s degree (B.Tech) in Artificial Intelligence and Data Science from the College of Technology and Engineering, Udaipur. My coursework includes Data Structures, Algorithms, Artificial Intelligence, Machine Learning, and Full-Stack Web Development (MERN). I have worked on multiple projects involving frontend, backend, and AI integration, building a strong technical and problem-solving foundation.",
    degree: "Bachelor of Technology - B.Tech (AI & Data Science)",
  },
  {
    id: 1,
    img: stAnthonyLogo,
    school: "St. Anthony Sr. Sec. School, Udaipur",
    date: "Apr 2021 - March 2022",
    grade: "81%",
    desc: "I completed my Class 12 education from St. Anthony Sr. Sec. School, Udaipur, under the CBSE board, with Physics, Chemistry, and Mathematics as my main subjects. My interest in analytical thinking and technology deepened during this time, laying the foundation for my engineering journey.",
    degree: "CBSE (XII) - PCM",
  },
  {
    id: 2,
    img: stAnthonyLogo,
    school: "St. Anthony Sr. Sec. School, Udaipur",
    date: "Apr 2019 - March 2020",
    grade: "80%",
    desc: "I completed my Class 10 education from St. Anthony Sr. Sec. School, Udaipur, under the CBSE board. My performance in science and mathematics helped spark my curiosity towards problem-solving and computer technologies.",
    degree: "CBSE (X) - Science Stream",
  },
];
  

export const projects = [
  {
    id: 0,
    title: "Eventure AI",
    description:
      "An intelligent full-stack platform for discovering, organizing, and managing events. Leverages AI-powered recommendations for a seamless, data-driven experience from event creation to real-time engagement tracking.",
    image: eventureLogo,
    tags: ["React JS", "Node.js", "MongoDB", "AI", "Express.js", "Tailwind CSS" ,"Framer Motion","bcryptjs" , "JWT"],
    github: "",
    webapp: "",
  },
    {
    "id": 1,
    "title": "GitHub Profile Analyzer",
    "description": "A web app that fetches and visualizes GitHub user data, providing insights into repositories, contributions, followers, and tech stack. Built to help developers quickly assess profiles and trends.",
    "image": githubProfile,
    "tags": ["React JS", "Axios", "CSS", "React Icons"],
    "github": "https://github.com/harshnagori/github-profile-analyzer",
    "webapp": "https://github-profile-analyzer-v2.vercel.app/"
  },
  {
    id: 1,
    title: "Titanic Survival Prediction",
    description:
      "A Flask-based web app using a trained ML model to predict Titanic passenger survival. Users input passenger details like age, gender, class, and receive survival probability in real-time.",
    image: titanicLogo,
    tags: ["Python", "Flask", "Machine Learning", "Data Science"],
    github: "https://github.com/harshnagori/Titanic_Survival_Prediction",
    webapp: "https://titanic-survival-prediction-xnsa.onrender.com/",
  },
  {
    id: 2,
    title: "Diabetes Prediction",
    description:
      "Predicts whether a person is diabetic based on clinical parameters using a Support Vector Machine (SVM) with linear kernel. Includes data exploration, preprocessing, model training, evaluation, and real-time prediction.",
    image: diabetesLogo,
    tags: ["Python", "SVM", "Machine Learning", "Data Science"],
    github: "https://github.com/harshnagori/Machine-Learning-Projects",
    webapp: "https://github.com/harshnagori/Machine-Learning-Projects",
  },
  {
    id: 3,
    title: "Spam Mail Prediction",
    description:
      "A text classification model to distinguish spam from non-spam emails. Uses TF-IDF vectorization and Logistic Regression for accurate real-time classification.",
    image: spamMailLogo,
    tags: ["Python", "Machine Learning", "NLP", "Data Science"],
    github: "https://github.com/harshnagori/Machine-Learning-Projects",
    webapp: "https://github.com/harshnagori/Machine-Learning-Projects",
  },
  {
    id: 4,
    title: "ToDesktop",
    description:
      "A modern, responsive landing page built with HTML, Tailwind CSS, and JavaScript. Demonstrates rapid UI development with Tailwind and interactive elements using custom JS.",
    image: toDesktopLogo,
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/harshnagori/ToDesktop",
    webapp: "https://harshnagori.github.io/ToDesktop/",
  },
];

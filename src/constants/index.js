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
<<<<<<< HEAD
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  estate,
=======
  git,
  figma,
  estate,
  gameHub,
  aiwriter
>>>>>>> bcfd4ef (Commit all the changes)
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
    title: "React Developer",
    icon: mobile,
  },

  {
    title: "User Interface Developer",
    icon: backend,
  },

  {
    title: "Creative UI Animations",
    icon: creator,
  },
];

const experiences = [
  {
    title: "React.js Course",
    company_name: "Code with Mosh",
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Learned React fundamentals, hooks, routing, and state management.",
      "Built real-world projects using modern React practices.",
    ],
  },
  {
    title: "ReactJS Course",
    company_name: "Mohirdev",
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Studied TypeScript, React components, props, hooks, and component structure.",
      "Created interactive web apps and practiced with real UI examples.",
    ],
  },
  {
    title: "Frontend Практикум",
    company_name: "Mohirdev",
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Mastered HTML, CSS, JavaScript, Git, and responsive design.",
      "Completed multiple frontend challenges and mini projects.",
    ],
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

<<<<<<< HEAD
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
=======

const projects = [
  {
    name: "AI Writer – GPT-Based Writing Assistant",
    description:
      `This app helps users write articles based on title and description inputs.",
      "Built with REACTJS, OpenAI API, TailwindCSS, and shadcn/UI.",
      "Implemented end-to-end (E2E) testing to ensure app reliability.",
      "Supports multiple writing styles and offers a seamless user experience.`,
>>>>>>> bcfd4ef (Commit all the changes)
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
<<<<<<< HEAD
        name: "mongodb",
=======
        name: "OpenAI",
>>>>>>> bcfd4ef (Commit all the changes)
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
<<<<<<< HEAD
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
=======
    image: aiwriter,
    source_code_link: "https://github.com/Ermatov-Abdulmajid/ai-writer",
  },
  {
    name: "Game Hub – Game Discovery Platform",
    description:
      `Fetched game data from RAWG API with many animations using shadcn components.",
      "Implemented genre filtering, sorting, and reusable components`,
>>>>>>> bcfd4ef (Commit all the changes)
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
<<<<<<< HEAD
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
=======
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: gameHub,
    source_code_link: "https://github.com/Ermatov-Abdulmajid/game-hub",
  },
  {
    name: "Estate – Real Estate Website",
    description:
      `Built using HTML, CSS, and JavaScript based on a Figma design mockup.",
      "Developed key pages like Home, Listings, About, and Contact with clean structure and smooth navigation",
      "Designed and implemented a fully responsive layout compatible with both desktop and mobile devices.`,
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: estate,
    source_code_link: "https://github.com/Ermatov-Abdulmajid/Estate",
  },
];

export { services, technologies, experiences, projects };
>>>>>>> bcfd4ef (Commit all the changes)

import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
const Info = {
  name: "Chirag Gupta",
  stack: [
    "Freelancer",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "Open Source Contributor",
  ],
  bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!",
};

const ProjectInfo = [
  {
    title: "Digiwhistle - Influencer Management ERP",
    desc: [
      "Developed a modern, fully responsive Influencer Management ERP platform, Digiwhistle, enabling seamless management of influencer profiles, brand campaigns, and employee operations across all devices.",
      "Implemented secure user authentication and granular role management using Next.js middleware, cookies, and Redux Toolkit.",
      "Integrated with social media platforms via APIs to fetch and manage influencer statistics, ensuring real-time data accuracy.",
      "Facilitated brand campaign creation and management, including collaboration with multiple influencers, tracking deliverables, and analyzing brand engagement metrics.",
      "Streamlined payroll, invoicing, and commission processes through seamless integration with Zoho Books and Razorpay APIs.",
    ],
    image: "digiwhistle.png",
    live: true,
    technologies: [
      "NextJs",
      "NodeJs",
      "Postgres SQL",
      "Typescript",
      "Tailwind",
      "Redux Toolkit",
      "ShadCN",
      "Type ORM",
      "Docker",
      "Digital Ocean",
    ],
    link: "https://landing-page-frontend-sigma.vercel.app/",
    github: "https://github.com/DigiWhistle/landing-page-frontend",
  },
  {
    title: "Genius - All in One AI Generator",
    desc: [
      "Developed a fully responsive web application with Tailwind CSS, featuring advanced animations, React Server Components, Clerk-based authentication, and AI-powered tools for image, video, and conversation generation.",
      "Handled data operations with custom POST, DELETE, and GET routes in Next.js API handlers, fetched data directly in server components, and managed database relations seamlessly.",
      "Optimized performance using caching and memoization, ensuring fast page loads and smooth user experiences.",
      "Integrated Stripe for subscription management, including a free tier with API limiting.",
    ],
    image: "genius-ai.png",
    live: true,
    technologies: [
      "NextJs",
      "Tailwind CSS",
      "React Server Components",
      "Stripe API",
      "React Hook Forms",
      "OpenAI API",
      "Replicate AI",
    ],
    link: "https://genius-ai.vercel.app/",
    github: "https://github.com/ChiragG2101/genius-ai",
  },
  {
    title: "Article Summarizer AI App",
    desc: [
      "A responsive, beautiful UI/UX with a nice touch of glass morphism using Tailwind CSS",
      "Utilizes advanced RTK query API requests that fire on condition",
      "Saves history using the local storage",
      "Handles form events and catch errors",
      "Implements copy to clipboard",
    ],
    image: "article-app.png",
    live: true,
    technologies: [
      "Next.js",
      "RTK query",
      "Tailwind CSS",
      "Local Storage",
      "Copy to Clipboard",
    ],
    link: "https://article-summarizer-sumz.vercel.app/",
    github: "https://github.com/ChiragG2101/Article-Summarizer-SUMZ-",
  },
  {
    title: "Food Search App",
    desc: [
      "Food Search App is a food search and recipe provider application built with Vue.js, Tailwind CSS, and Axios. It leverages the themealdb API to deliver search results with debouncing and URL-based state management for seamless user experience.",
    ],
    image: "food-search.png",
    live: true,
    technologies: [
      "Vue.js",
      "Tailwind CSS",
      "URL-based state management",
      "Axios",
    ],
    link: "https://meal-search-vuejs.vercel.app/",
    github: "https://github.com/ChiragG2101/Meal-Search-Vuejs",
  },
  {
    title: "Hardhat Fund Me Dapp",
    desc: [
      "Hardhat Fund Me Dapp is a decentralized application(Dapp) built with Hardhat, and Ethers.js. It provides a decentralized platform for users to fund projects using the Metamask wallet.",
    ],
    image: "hardhat.png",
    live: false,
    technologies: [
      "ethers.js",
      "Ganache",
      "Hardhat",
      "Metamask Wallet",
      "Remix IDE",
    ],
    link: "https://github.com/ChiragG2101/hardhat-fund-me/blob/main/README.md",
    github: "https://github.com/ChiragG2101/hardhat-fund-me",
  },
  {
    title: "Modern dashboard",
    desc: [
      "ZuAI is a modern, fully responsive dashboard built using Next.js, TailwindCSS, ShadCN and NextAuth for authentication and authorization. It provides a seamless user experience, with intuitive navigation and easy-to-use features.",
    ],
    image: "zu-ai.png",
    live: true,
    technologies: ["Next.js", "NextAuth", "ShadCN", "Tailwind CSS"],
    link: "https://zu-ai.vercel.app/",
    github: "https://github.com/ChiragG2101/zuAi",
  },
];

const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React JS",
      "Next JS",
      "Tailwind CSS",
      "Vue",
      "Redux",
      "Recharts",
      "Material UI",
      "Jest",
      "Babel",
      "Webpack",
      "Three JS",
      // "Angular",
      // "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      // "Springboot",
      "Node JS",
      "Express JS",
      "Fast API",
      "MongoDB",
      "PostgresSQL",
      "Chroma DB",
      "Firebase",
    ],
  },
  {
    title: "Languages",
    skills: ["C", "C++", "JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Github",
      "VS Code",
      "Figma",
      "Docker",
      "Postman",
      "MongoDB Compass",
      // "Spring Tool Suite",
    ],
  },
];
const socialLinks = [
  { link: "https://github.com/ChiragG2101", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/chirag-gupta-2101/",
    icon: IconBrandLinkedin,
  },
  { link: "https://www.instagram.com/chiragg_2101/", icon: IconBrandInstagram },
  { link: "https://x.com/Chirag_2101", icon: IconBrandTwitter },
  //   {
  //     link: "https://www.youtube.com/channel/UC1ki6jaFvFiH_E79b9FYptw",
  //     icon: IconBrandYoutube,
  //   },
  //   { link: "https://www.leetcode.com/u/CodeMars", icon: IconBrandLeetcode },
];

const ExperienceInfo = [
  {
    role: "Software Developer - Founder's Office",
    company: "Adaapt AI (formerly Terobots )",
    image: "adaapt.png",
    date: "Jan 2024 - Present",
    desc: [
      "Developed an AI-powered MongoDB query generator microservice, leveraging client metadata to gather and analyze data.",
      "mplemented a comprehensive authentication and role management module using Higher-Order Components, Next.js middleware, cookies, and Redux Toolkit.",
      "Revamped the platform’s frontend by integrating React Server Components, managing error/loading states, optimizing with caching and memoization and adding animations",
    ],
    skills: [
      "Next JS",
      "Typescript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Python",
      "Fast API",
      "MongoDB",
      "LLMs",
      "Microservices",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Adaapt AI (formerly Terobots )",
    image: "adaapt.png",
    date: "June 2023 - Dec 2023",
    desc: [
      "Created analytics dashboards % REST APIs to track bot performance across various hierarchy levels, including a global filter component and custom hook.",
      "Developed an end-to-end LinkedIn Automation microservice using Python FastAPI framework, MongoDB, and relevant libraries.",
      // "Developed an end-to-end LinkedIn Automation microservice using Python FastAPI framework, MongoDB, and relevant libraries",
    ],
    skills: [
      "Next JS",
      "Typescript",
      "Tailwind CSS",
      "Recoil",
      "Chart.js",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Microservices",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Finlight",
    image: "finlight.png",
    date: "Sept 2022 - Feb 2023",
    desc: [
      "Developed a dynamic, user-friendly & mobile-responsive Finlight community webpage, which garnered over 2000+ members on launch day",
      "Designed and implemented the coupon system in the admin panel, connecting it with frontend using REST APIs",
    ],
    skills: [
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Material UI(MUI)",
      "Node.js",
    ],
  },
];
const Slugs = [
  "typescript",
  "spring",
  "javascript",
  "dart",
  "java",
  "react",
  "angular",
  "flutter",
  "android",
  "html5",
  "css3",
  "springboot",
  "mongodb",
  "selenium",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "mysql",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };

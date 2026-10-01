export const profile = {
  name: "Chirag Gupta",
  title: "Full-Stack Product Engineer",
  location: "Gurgaon, India",
  remote: "Open to remote roles",
  email: "chiragg593@gmail.com",
  positioning:
    "I build systems that turn messy inputs into useful products.",
  summary:
    "Software engineer with about three years in production. I own systems end to end, from the data pipeline to the dashboard people use, and I am moving toward agentic and AI-native engineering.",
  links: {
    github: "https://github.com/ChiragG2101",
    linkedin: "https://www.linkedin.com/in/chirag-gupta-2101/",
    x: "https://x.com/Chirag_2101",
    resume: "/Chirag-Gupta-Resume.pdf",
  },
};

export type Job = {
  role: string;
  company: string;
  dates: string;
  place?: string;
  bullets: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    role: "Software Engineer",
    company: "Tortoise",
    dates: "Oct 2024 - Present",
    place: "Gurgaon, India",
    bullets: [
      "Rebuilt the AI cataloging pipeline end to end: ingestion from Amazon, Croma, VJ Sales and OEM sites, automatic variant grouping and compatibility mapping. About 100-200 SKUs a week, ~70% published with zero human touch.",
      "Own the CX and KAM operations dashboard (backend and frontend). Support and KAM queries dropped from ~200-300 to ~20-25 a week once order visibility, data-correction, cancellation and lease-deduction controls moved out of engineering.",
      "Core contributor to the workflow engine that runs the full order lifecycle across employers, lessees and suppliers: configuration-driven per stakeholder, persisted state, logged failures, exponential-backoff retries.",
      "Built the bulk data-import system used across the lifecycle: employer PII, lessee invoices, managed-asset states and supplier delivery feeds, validated and synced into core systems.",
      "Built the growth analytics stack: Mixpanel events into Metabase for the B2C growth team, with channel-level views across push, email and WhatsApp (Supersend, GalaBox).",
      "Set up the B2B outreach pipeline on HubSpot with automated sequences and AI-fed visibility into performance.",
      "Sole frontend engineer in a 5-person team. Consolidated 4 dashboards into a Turborepo monorepo with GitHub Actions CI/CD, migrated legacy React/Redux code to Next.js, and built a shared ~30-component design system.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Python", "Django REST", "PostgreSQL", "Turborepo", "Metabase", "Mixpanel", "HubSpot"],
  },
  {
    role: "Software Developer",
    company: "Adaapt AI (formerly Terobots)",
    dates: "Jan 2024 - Oct 2024",
    bullets: [
      "Built an AI-powered MongoDB query generator microservice that uses client metadata to gather and analyze data.",
      "Built the authentication and role-management module (Next.js middleware, cookies, Redux Toolkit).",
      "Rebuilt the platform frontend on React Server Components with structured error and loading states, caching and memoization.",
    ],
    stack: ["Next.js", "TypeScript", "Python", "FastAPI", "MongoDB", "LLMs"],
  },
  {
    role: "Software Developer Intern",
    company: "Adaapt AI (formerly Terobots)",
    dates: "Jun 2023 - Dec 2023",
    bullets: [
      "Built REST APIs for bot analytics across hierarchy levels, with a global filter component (Node.js, TypeScript, MongoDB).",
      "Built a LinkedIn automation microservice (Python, FastAPI, MongoDB).",
    ],
    stack: ["Node.js", "TypeScript", "MongoDB", "FastAPI"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Finlight",
    dates: "Sep 2022 - Feb 2023",
    bullets: [
      "Built the Finlight community webpage and the coupon system in the admin panel, wired to the frontend over REST APIs.",
    ],
    stack: ["React", "Next.js", "Redux", "Tailwind CSS"],
  },
];

export const projects = [
  {
    name: "Digiwhistle",
    kind: "Influencer management ERP",
    summary:
      "Influencer profiles, brand campaigns and employee operations in one app. Role-based auth with Next.js middleware and Redux Toolkit, social platform APIs for influencer stats, and payroll, invoicing and commissions through Zoho Books and Razorpay.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "TypeORM", "Docker"],
    live: "https://landing-page-frontend-sigma.vercel.app/",
    code: "https://github.com/DigiWhistle/landing-page-frontend",
  },
];

export const skills: Record<string, string[]> = {
  Frontend: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Redux"],
  Backend: ["Node.js", "Python", "FastAPI", "Django REST", "PostgreSQL", "MongoDB"],
  Data: ["Metabase", "Mixpanel", "HubSpot", "Chroma DB"],
  Tools: ["Git", "GitHub Actions", "Turborepo", "Docker"],
};

export function machineView(): string {
  const l: string[] = [];
  l.push(`# ${profile.name}`, `${profile.title} | ${profile.location} | ${profile.remote}`, "");
  l.push(profile.positioning, profile.summary, "");
  l.push("## Links");
  l.push(`- Email: ${profile.email}`, `- GitHub: ${profile.links.github}`, `- LinkedIn: ${profile.links.linkedin}`, `- Resume: ${profile.links.resume}`, "");
  l.push("## Experience");
  experience.forEach((j) => {
    l.push(`### ${j.role}, ${j.company} (${j.dates})`);
    j.bullets.forEach((b) => l.push(`- ${b}`));
    l.push(`Stack: ${j.stack.join(", ")}`, "");
  });
  l.push("## Projects");
  projects.forEach((p) => {
    l.push(`### ${p.name} - ${p.kind}`, p.summary, `Stack: ${p.stack.join(", ")}`, `Live: ${p.live}`, `Code: ${p.code}`, "");
  });
  l.push("## Skills");
  Object.entries(skills).forEach(([k, v]) => l.push(`- ${k}: ${v.join(", ")}`));
  return l.join("\n");
}

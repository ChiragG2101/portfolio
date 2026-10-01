import { renderToString } from "react-dom/server";
import App from "./App";
import { profile, experience, projects, skills, machineView } from "./content";

export const render = () => renderToString(<App />);

export const llmsTxt = () =>
  `# ${profile.name}\n\n> ${profile.title}. ${profile.positioning}\n\n${profile.summary}\n\n## Pages\n- [Home](/): full site, no JavaScript needed\n- [Resume JSON](/resume.json): structured resume\n- [Resume PDF](${profile.links.resume})\n- [AGENTS.md](/AGENTS.md)\n\n## Contact\n- ${profile.email}\n- ${profile.links.github}\n- ${profile.links.linkedin}\n\n## Full text\n\n${machineView()}\n`;

export const resumeJson = () =>
  JSON.stringify(
    {
      basics: {
        name: profile.name, label: profile.title, email: profile.email,
        summary: profile.summary, location: { city: "Gurgaon", countryCode: "IN" },
        profiles: [
          { network: "GitHub", url: profile.links.github },
          { network: "LinkedIn", url: profile.links.linkedin },
          { network: "X", url: profile.links.x },
        ],
      },
      work: experience.map((j) => ({ name: j.company, position: j.role, startDate: j.dates.split(" - ")[0], endDate: j.dates.split(" - ")[1], highlights: j.bullets, keywords: j.stack })),
      projects: projects.map((p) => ({ name: p.name, description: p.summary, url: p.live, keywords: p.stack })),
      skills: Object.entries(skills).map(([name, keywords]) => ({ name, keywords })),
    },
    null, 2
  );

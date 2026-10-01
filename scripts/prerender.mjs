import { build } from "esbuild";
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const root = process.cwd();
const out = path.join(root, "build", ".ssr.cjs");
await build({
  entryPoints: [path.join(root, "src", "ssr.tsx")],
  bundle: true, platform: "node", format: "cjs", outfile: out,
  jsx: "automatic", loader: { ".css": "empty" }, logLevel: "error",
});
const { render, llmsTxt, resumeJson } = (await import("module")).createRequire(import.meta.url)(out);
const htmlPath = path.join(root, "build", "index.html");
const html = fs.readFileSync(htmlPath, "utf8");
const ph = "<div id=\"root\"></div>"; if (!html.includes(ph)) throw new Error("placeholder missing");
fs.writeFileSync(htmlPath, html.replace(ph, `<div id="root">${render()}</div>`));
fs.writeFileSync(path.join(root, "build", "llms.txt"), llmsTxt());
fs.writeFileSync(path.join(root, "build", "resume.json"), resumeJson());
fs.rmSync(out);
console.log("prerendered build/index.html, llms.txt, resume.json");

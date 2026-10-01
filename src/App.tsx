import { useEffect, useRef, useState } from "react";
import { profile, experience, projects, skills, machineView } from "./content";

function PixelField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const size = 10;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let t = 0;
    const draw = () => {
      const w = (c.width = c.clientWidth);
      const h = (c.height = c.clientHeight);
      ctx.clearRect(0, 0, w, h);
      for (let x = 0; x < w; x += size) {
        for (let y = 0; y < h; y += size) {
          const v = Math.sin(x * 0.02 + t) + Math.cos(y * 0.025 - t * 0.7) + Math.sin((x + y) * 0.012 + t * 0.4);
          const a = (v + 3) / 6;
          if (a > 0.62) {
            ctx.fillStyle = `rgba(94, 234, 180, ${(a - 0.6) * 0.9})`;
            ctx.fillRect(x, y, size - 2, size - 2);
          }
        }
      }
      t += 0.012;
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} className="pixels" aria-hidden="true" />;
}

export default function App() {
  const [view, setView] = useState<"human" | "machine">("human");
  useEffect(() => {
    if (window.location.hash === "#machine") setView("machine");
  }, []);
  const choose = (v: "human" | "machine") => {
    setView(v);
    window.history.replaceState(null, "", v === "machine" ? "#machine" : "#");
  };

  return (
    <div className="page">
      <header className="top">
        <span className="mark">{profile.name}</span>
        <div className="toggle" role="group" aria-label="View">
          <button className={view === "human" ? "on" : ""} aria-pressed={view === "human"} onClick={() => choose("human")}>Human</button>
          <button className={view === "machine" ? "on" : ""} aria-pressed={view === "machine"} onClick={() => choose("machine")}>Machine</button>
        </div>
      </header>

      {view === "machine" ? (
        <main className="machine">
          <pre>{machineView()}</pre>
          <p className="note">Also at <a href="/llms.txt">/llms.txt</a>, <a href="/resume.json">/resume.json</a> and <a href="/AGENTS.md">/AGENTS.md</a>.</p>
        </main>
      ) : (
        <main>
          <section className="hero">
            <PixelField />
            <p className="eyebrow">{profile.title} - {profile.location}</p>
            <h1>{profile.name}</h1>
            <p className="lead">{profile.positioning}</p>
            <p className="sub">{profile.summary}</p>
            <p className="cta">
              <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
              <a className="link" href={profile.links.github}>GitHub</a>
              <a className="link" href={profile.links.linkedin}>LinkedIn</a>
            </p>
          </section>

          <section id="experience">
            <h2>Experience</h2>
            {experience.map((j) => (
              <article className="job" key={j.role + j.company}>
                <div className="when">{j.dates}</div>
                <div>
                  <h3>{j.role} <span>at {j.company}</span></h3>
                  <ul>{j.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                  <p className="tags">{j.stack.map((s) => <span key={s}>{s}</span>)}</p>
                </div>
              </article>
            ))}
          </section>

          <section id="projects">
            <h2>Project</h2>
            {projects.map((p) => (
              <article className="job" key={p.name}>
                <div className="when">{p.kind}</div>
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.summary}</p>
                  <p className="tags">{p.stack.map((s) => <span key={s}>{s}</span>)}</p>
                  <p><a className="link" href={p.live}>Live</a> <a className="link" href={p.code}>Code</a></p>
                </div>
              </article>
            ))}
          </section>

          <section id="skills">
            <h2>Skills</h2>
            <dl className="skills">
              {Object.entries(skills).map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v.join(", ")}</dd></div>
              ))}
            </dl>
          </section>
        </main>
      )}

      <footer>
        <a href={`mailto:${profile.email}`}>{profile.email}</a> - <a href="/llms.txt">llms.txt</a> - <a href="/resume.json">resume.json</a>
      </footer>
    </div>
  );
}

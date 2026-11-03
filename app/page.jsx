"use client";

import Image from "next/image";
import { useEffect } from "react";

const sections = [
  {
    id: "connect",
    number: "04 / 05 CONNECT",
    corner: "WORDS / WORK",
    title: ["less talk.", "more clarity."],
    description: "Good software starts with a clear understanding of the problem.",
    next: "home",
    nextLabel: "Back to top",
  },
];

const navigation = ["connect", "toolstack", "projects", "experience"];

const experience = [
  { role: "softwarE developmenT interN", dates: "Jan – Jun 2026", company: "nomurA holdingS, inC." },
  { role: "foundinG engineeR", dates: "Jul 2023 – Dec 2025", company: "indhaN paygatE pvT. ltD." },
  { role: "frontenD engineeR", dates: "Jan – Jun 2023", company: "enotebooK" },
];

const projects = [
  {
    category: "financiaL systemS",
    title: "centraliseD spoT exchangE",
    skills: ["typescript", "rust", "nextjs", "redis", "timescaledb", "grpc", "docker", "aws"],
  },
  {
    category: "generativE a.i.",
    title: "neuraL synthesis pipelinE",
    skills: ["python", "langchain", "langgraph", "unstructured.io", "chroma db"],
  },
  {
    category: "financiaL systemS",
    title: "perpetuaL cryptO exchangE",
    skills: ["typescript", "reactjs", "redis", "postgres", "kubernetes", "aws"],
  },
];

const toolGroups = [
  {
    name: "Language",
    start: 1,
    tools: [
      { symbol: "Ts", name: "TypeScript" },
      { symbol: "Py", name: "Python" },
      { symbol: "Rt", name: "Rust" },
      { symbol: "Cp", name: "C++" },
    ],
  },
  {
    name: "Frontend",
    start: 5,
    tools: [
      { symbol: "Nx", name: "Next.js" },
      { symbol: "Re", name: "React" },
    ],
  },
  {
    name: "Backend",
    start: 7,
    tools: [
      { symbol: "Nd", name: "Node.js" },
      { symbol: "Fl", name: "Flask" },
      { symbol: "Rd", name: "Redis" },
      { symbol: "Pg", name: "PostgreSQL" },
      { symbol: "Mo", name: "MongoDB" },
    ],
  },
  {
    name: "AI",
    start: 12,
    tools: [
      { symbol: "Lc", name: "LangChain" },
      { symbol: "Lg", name: "LangGraph" },
      { symbol: "Un", name: "Unstructured" },
      { symbol: "Ch", name: "ChromaDB" },
      { symbol: "Cc", name: "Claude Code" },
      { symbol: "Cx", name: "Codex" },
    ],
  },
  {
    name: "Infrastructure",
    start: 18,
    tools: [
      { symbol: "Gh", name: "GitHub" },
      { symbol: "Cd", name: "CI/CD" },
      { symbol: "Dc", name: "Docker" },
      { symbol: "Kn", name: "Kubernetes" },
      { symbol: "Aw", name: "AWS" },
      { symbol: "Gc", name: "GCP" },
    ],
  },
];

export default function HomePage() {
  useEffect(() => {
    const panels = [...document.querySelectorAll(".portfolio-panel")];
    const navLinks = [...document.querySelectorAll("[data-nav]")];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.2 }
    );

    panels.forEach((panel) => observer.observe(panel));

    const setActive = (id) => {
      document.documentElement.classList.toggle("is-section-view", id !== "home" || window.scrollY > 4);
      navLinks.forEach((link) => {
        if (link.dataset.nav === id) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };

    let scrollFrame;
    const updateActive = () => {
      scrollFrame = undefined;
      const midpoint = window.innerHeight / 2;
      const current = panels.find((panel) => {
        const { top, bottom } = panel.getBoundingClientRect();
        return top <= midpoint && bottom > midpoint;
      }) || panels[panels.length - 1];
      setActive(current.id);
    };
    const scheduleUpdate = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateActive);
    };
    const handleNavClick = (event) => setActive(event.currentTarget.dataset.nav);

    navLinks.forEach((link) => link.addEventListener("click", handleNavClick));
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("hashchange", scheduleUpdate);
    scheduleUpdate();

    return () => {
      observer.disconnect();
      navLinks.forEach((link) => link.removeEventListener("click", handleNavClick));
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
      window.cancelAnimationFrame(scrollFrame);
      document.documentElement.classList.remove("is-section-view");
    };
  }, []);

  useEffect(() => {
    const rail = document.querySelector(".identity-rail");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let idleTimer;

    const handlePointerMove = (event) => {
      if (!finePointer.matches || event.pointerType === "touch") return;

      rail.classList.add("is-pointer-active");
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        rail.classList.remove("is-pointer-active");
      }, 3000);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.clearTimeout(idleTimer);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <aside className="identity-rail" aria-label="Portfolio identity">
        <a className="identity-mark" href="#home" aria-label="Back to the top">
          <Image src="/znag.svg" alt="" width={512} height={456} priority />
        </a>
        <p className="identity-line">Opportunities present themselves to those who have prepared</p>
      </aside>

      <nav className="navigation-rail" aria-label="Portfolio sections">
        <div className="navigation-list">
          {navigation.map((id) => (
            <a href={`#${id}`} data-nav={id} key={id}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      <main id="main">
        <section className="portfolio-panel hero-panel" id="home" aria-labelledby="hero-title">
          <div className="panel-frame" aria-hidden="true" />
          <span className="panel-count">00 / 05 WHAT’S NEXT</span>
          <span className="panel-corner">CATS WARRIOR</span>
          <h1 id="hero-title"><span>portfoliO wheN</span><span>yoU havE tastE</span></h1>
          <div className="hero-contact">
            <span>Tell me about it.</span>
            <a href="mailto:3033.punit@gmail.com">3033.punit@gmail.com</a>
          </div>
        </section>

        <section className="portfolio-panel experience-panel" id="experience" aria-labelledby="experience-title">
          <div className="panel-frame" aria-hidden="true" />
          <span className="panel-count">01 / 05 Experience</span>
          <span className="panel-corner">S-400</span>
          <h2 className="experience-heading" id="experience-title">
            wherE i havE<br />workeD
          </h2>
          <div className="experience-aside" aria-hidden="true"><span>cubiclE</span><span>crusH</span></div>
          <ol className="experience-list">
            {experience.map(({ role, dates, company }) => (
              <li className="experience-item" key={company}>
                <p className="experience-role">{role}</p>
                <div className="experience-card">
                  <span className="experience-dates">{dates}</span>
                  <h3 className="experience-company">{company}</h3>
                </div>
              </li>
            ))}
          </ol>
          <a className="experience-back" href="#home">Back to top <span aria-hidden="true">↑</span></a>
        </section>

        <section className="portfolio-panel projects-panel" id="projects" aria-labelledby="projects-title">
          <div className="panel-frame" aria-hidden="true" />
          <span className="panel-count">02 / 05 Projects</span>
          <span className="panel-corner">TEJAS</span>
          <h2 className="projects-heading" id="projects-title">partimE<br />boB thE buildeR</h2>
          <div className="projects-aside" aria-hidden="true"><span>lonE</span><span>warriOR</span></div>
          <ol className="projects-list">
            {projects.map(({ category, title, skills }) => (
              <li className="projects-item" key={title}>
                <ul className="project-skills" aria-label={`Skills used for ${title}`}>
                  {skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
                <div className="project-card">
                  <span className="project-category">{category}</span>
                  <h3 className="project-title">{title}</h3>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="portfolio-panel toolstack-panel" id="toolstack" aria-labelledby="toolstack-title">
          <div className="panel-frame" aria-hidden="true" />
          <span className="panel-count">03 / 05 Toolbox</span>
          <span className="panel-corner">AMCA</span>
          <h2 className="toolstack-heading" id="toolstack-title">mY<br />arsenaL</h2>
          <div className="toolstack-aside" aria-hidden="true"><span>weapoN</span><span>masteR</span></div>
          <ol className="stack-groups">
            {toolGroups.map((group) => (
              <li className="stack-group" key={group.name}>
                <h3>{group.name}</h3>
                <ol className="stack-items" aria-label={`${group.name} tools`}>
                  {group.tools.map((tool, index) => (
                    <li key={tool.name}>
                      <span className="stack-number">{String(group.start + index).padStart(2, "0")}</span>
                      <strong className="stack-symbol">{tool.symbol}</strong>
                      <span className="stack-name">{tool.name}</span>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
          <a className="toolstack-next" href="#connect">Next: Connect <span aria-hidden="true">↗</span></a>
        </section>

        {sections.map((section) => (
          <section
            className="portfolio-panel content-panel"
            id={section.id}
            aria-labelledby={`${section.id}-title`}
            key={section.id}
          >
            <div className="panel-frame" aria-hidden="true" />
            <span className="panel-count">{section.number}</span>
            <span className="panel-corner">{section.corner}</span>
            <div className="section-content">
              <h2 id={`${section.id}-title`}>{section.title[0]}<br />{section.title[1]}</h2>
              <p>{section.description}</p>
            </div>
            <a className="next-link" href={`#${section.next}`}>
              {section.nextLabel} <span aria-hidden="true">{section.next === "home" ? "↑" : "↗"}</span>
            </a>
          </section>
        ))}
      </main>
    </>
  );
}

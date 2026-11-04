"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navigation = [
  { id: "connect", label: "Connect" },
  { id: "toolstack", label: "Toolstack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About me" },
];

const experience = [
  {
    id: "nomura",
    role: "softwarE developmenT interN",
    dates: "Jan – Jun 2026",
    company: "nomurA holdingS, inC.",
    details: [
      "Nomura Holdings, Inc. is a Japanese financial holding company and the parent company of the Nomura Group, Japan’s largest investment bank and brokerage group.",
      "At Nomura, I built AI-driven solutions that removed repetitive work across financial risk systems. I developed an autonomous AI agent that reduced risk data retrieval from three hours to 15 minutes, automated the migration of more than 10,000 legacy risk models into Jacobian Mesh, and engineered custom Claude Code tools for faster development.",
      "The work gave me hands-on experience with reliable AI automation, large-scale financial data, and engineering systems where accuracy and efficiency are critical.",
    ],
  },
  {
    id: "indhan",
    role: "foundinG engineeR",
    dates: "Jul 2023 – Dec 2025",
    company: "indhaN paygatE pvT. ltD.",
    details: [
      "InDhanPay is a complete fuel retail automation platform that unifies payments, invoicing, inventory, and analytics into a single intelligent system built specifically for Indian fuel stations.",
      "At InDhan Paygate, I built scalable backend systems focused on simplifying payments, strengthening security, and improving customer engagement.",
      "I engineered a unified payment module supporting Cash, UPI, and Card transactions, increasing successful checkouts by 14%. I developed secure authentication and RBAC systems protecting 1,500+ customer profiles, and built an event-driven AWS SNS pipeline that improved user engagement by 18%. I also developed an omnichannel notification service handling 10,000+ monthly communications across WhatsApp, SMS, and email.",
      "This experience strengthened my expertise in backend architecture, payment integrations, and security, while teaching me how to build reliable, production-ready systems that directly impact business operations and user experience.",
    ],
  },
  {
    id: "enotebook",
    role: "frontenD engineeR",
    dates: "Jan – Jun 2023",
    company: "enotebooK",
    details: [
      "The E-Notebook at SGSITS (Shri G.S. Institute of Technology and Science, Indore) is a digital tool and companion platform designed to assist students and research scholars. ",
      "At enotebook, I built responsive product interfaces and translated early design concepts into clear, usable experiences.",
      "I focused on component structure, interaction details, and layouts that remained consistent across screen sizes while connecting the interface to the application’s data and workflows.",
      "This experience established the frontend foundation I still use today: understand the user’s task, make the hierarchy obvious, and keep the implementation maintainable.",
    ],
  },
];

const projects = [
  {
    id: "spot",
    category: "financiaL systemS",
    title: "centraliseD spoT exchangE",
    skills: ["typescript", "node.js", "rust", "redis", "websockets"],
    details: [
      "I built CEX, a high-performance centralized cryptocurrency exchange using TypeScript, Node.js, Rust, Redis, and WebSockets, designed for low-latency trade execution and real-time order processing.",
      "I engineered a Rust-based matching engine with modular order books for deterministic trade execution and memory-efficient state management. I used Redis queues and Pub/Sub to decouple order processing from API requests, while WebSockets delivered real-time market updates to connected clients. I also implemented snapshot-based recovery to restore exchange state after failures and maintain data consistency.",
      "This project deepened my understanding of concurrency, asynchronous messaging, distributed system architecture, and fault tolerance, while teaching me how to design performance-critical systems that balance speed, consistency, and reliability.",
    ],
  },
  {
    id: "pipeline",
    category: "generativE a.i.",
    title: "neuraL synthesis pipelinE",
    skills: ["typescript", "postgresql", "pgvector", "rag", "embeddings"],
    details: [
      "I built a full-stack Retrieval-Augmented Generation system using TypeScript, PostgreSQL, and pgvector, designed to enable accurate, context-aware search across unstructured Markdown documents.",
      "I engineered an end-to-end document processing pipeline that parses, chunks, and generates vector embeddings, enabling semantic search through PostgreSQL’s pgvector extension with sub-100ms query latency. I implemented a sliding-window chunking strategy and metadata-based filtering to improve retrieval relevance, reduce token consumption, and minimize LLM hallucinations.",
      "This project deepened my understanding of vector databases, embedding models, semantic search, and LLM context management, while teaching me how to build efficient, scalable AI systems that prioritize retrieval accuracy and response reliability.",
    ],
  },
  {
    id: "perpetual",
    category: "financiaL systemS",
    title: "perpetuaL cryptO exchangE",
    skills: ["typescript", "rust", "redis", "websockets", "postgresql"],
    details: [
      "I extended the centralized spot exchange into a perpetual futures trading platform, reusing its TypeScript API layer, Rust matching engine, Redis messaging, and WebSocket feeds while introducing leveraged positions and contract markets.",
      "I designed margin and position accounting, funding-rate settlement, mark-price tracking, liquidation checks, reduce-only orders, and isolated risk controls. PostgreSQL stored durable account and trade history, while Redis coordinated real-time market state and background risk evaluation. The architecture kept derivatives logic separate from the spot core so both exchanges could share order-routing infrastructure without coupling their balance and risk rules.",
      "This project deepened my understanding of derivatives, margin systems, liquidation engines, and risk-aware exchange design, while teaching me how to extend an existing trading core without compromising deterministic execution or recoverability.",
    ],
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
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);

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
      document.documentElement.classList.toggle(
        "is-section-view",
        id !== "home" || window.scrollY > 4
      );
      navLinks.forEach((link) => {
        if (link.dataset.nav === id)
          link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };

    let scrollFrame;
    const updateActive = () => {
      scrollFrame = undefined;
      const midpoint = window.innerHeight / 2;
      const current =
        panels.find((panel) => {
          const { top, bottom } = panel.getBoundingClientRect();
          return top <= midpoint && bottom > midpoint;
        }) || panels[panels.length - 1];
      setActive(current.id);
    };
    const scheduleUpdate = () => {
      if (!scrollFrame)
        scrollFrame = window.requestAnimationFrame(updateActive);
    };
    const handleNavClick = (event) =>
      setActive(event.currentTarget.dataset.nav);

    navLinks.forEach((link) => link.addEventListener("click", handleNavClick));
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("hashchange", scheduleUpdate);
    scheduleUpdate();

    return () => {
      observer.disconnect();
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleNavClick)
      );
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
      window.cancelAnimationFrame(scrollFrame);
      document.documentElement.classList.remove("is-section-view");
    };
  }, []);

  useEffect(() => {
    const searchParams = new URL(window.location.href).searchParams;
    const requestedExperience = searchParams.get("experience");
    const requestedProject = searchParams.get("project");

    if (experience.some(({ id }) => id === requestedExperience)) {
      setExpandedExperience(requestedExperience);
    }
    if (projects.some(({ id }) => id === requestedProject)) {
      setExpandedProject(requestedProject);
    }
  }, []);

  const toggleExperience = (id) => {
    const next = expandedExperience === id ? null : id;
    const url = new URL(window.location.href);

    if (next) url.searchParams.set("experience", next);
    else url.searchParams.delete("experience");

    window.history.replaceState(
      {},
      "",
      `${url.pathname}${url.search}${url.hash}`
    );
    setExpandedExperience(next);

    if (next) {
      window.requestAnimationFrame(() => {
        const reducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        document.getElementById("experience")?.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
          block: "start",
        });
      });
    }
  };

  const toggleProject = (id) => {
    const next = expandedProject === id ? null : id;
    const url = new URL(window.location.href);

    if (next) url.searchParams.set("project", next);
    else url.searchParams.delete("project");

    window.history.replaceState(
      {},
      "",
      `${url.pathname}${url.search}${url.hash}`
    );
    setExpandedProject(next);

    if (next) {
      window.requestAnimationFrame(() => {
        const reducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        document.getElementById("projects")?.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
          block: "start",
        });
      });
    }
  };

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

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.clearTimeout(idleTimer);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <aside className="identity-rail" aria-label="Portfolio identity">
        <a className="identity-mark" href="#home" aria-label="Back to the top">
          <Image src="/znag.svg" alt="" width={512} height={456} priority />
        </a>
        <p className="identity-line">
          Opportunities present themselves to those who have prepared
        </p>
      </aside>

      <nav className="navigation-rail" aria-label="Portfolio sections">
        <div className="navigation-list">
          {navigation.map(({ id, label }) => (
            <a href={`#${id}`} data-nav={id} key={id}>
              {label}
            </a>
          ))}
        </div>
      </nav>

      <main id="main">
        <section
          className="portfolio-panel hero-panel"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="panel-frame" aria-hidden="true" />
          <span className="panel-count">00 / 05 WHAT’S NEXT</span>
          <span className="panel-corner">CATS WARRIOR</span>
          <h1 id="hero-title">
            <span>portfoliO wheN</span>
            <span>yoU havE tastE</span>
          </h1>
          <div className="hero-contact">
            <span>Tell me about it.</span>
            <a href="mailto:3033.punit@gmail.com">3033.punit@gmail.com</a>
          </div>
        </section>

        <section
          className="portfolio-panel about-panel"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="panel-frame" aria-hidden="true" />
          <span className="panel-count">01 / 05 Me</span>
          <span className="panel-corner">K4</span>
          <h2 className="about-heading" id="about-title">
            sO yoU wannA
            <br />
            knoW whO i aM?
          </h2>
          <div className="about-aside" aria-hidden="true">
            <span>cubiclE</span>
            <span>crusH</span>
          </div>
          <div className="about-cards">
            <article className="about-card about-name-card" tabIndex={0}>
              <p>
                <span>puniT</span>
                <span>pawaR.</span>
              </p>
            </article>
            <article className="about-card about-bio-card" tabIndex={0}>
              <p>
                Software engineer specializing in scalable backend systems,
                distributed architectures, and low-latency infrastructure.
                Builds high-performance services, real-time data pipelines, and
                event-driven systems using TypeScript, Node.js, and Rust.
                Experienced in engineering payment infrastructure, exchange
                matching engines, and fault-tolerant architectures, with a
                growing focus on AI agents, intelligent automation, and
                retrieval-augmented generation. Driven by curiosity and a
                passion for solving complex engineering problems through
                efficient, reliable, and thoughtfully designed software.
              </p>
            </article>
          </div>
        </section>

        <section
          className="portfolio-panel experience-panel"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="panel-frame" aria-hidden="true" />
          <span className="panel-count">
            {expandedExperience
              ? `Experience ${String(
                  experience.findIndex(({ id }) => id === expandedExperience) +
                    1
                ).padStart(2, "0")} / 03`
              : "02 / 05 Experience"}
          </span>
          <span className="panel-corner">S-400</span>
          <h2 className="experience-heading" id="experience-title">
            wherE i havE
            <br />
            workeD
          </h2>
          <div className="experience-aside" aria-hidden="true">
            <span>cubiclE</span>
            <span>crusH</span>
          </div>
          <ol
            className={`experience-list${
              expandedExperience ? " has-expanded" : ""
            }`}
          >
            {experience.map(({ id, role, dates, company, details }) => {
              const isExpanded = expandedExperience === id;

              return (
                <li
                  className={`experience-item${
                    isExpanded ? " is-expanded" : ""
                  }`}
                  key={company}
                >
                  <div className="item-hover-surface experience-surface">
                    <button
                      className="experience-trigger"
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={`experience-details-${id}`}
                      disabled={Boolean(expandedExperience && !isExpanded)}
                      onClick={() => toggleExperience(id)}
                    >
                      <span className="experience-role">{role}</span>
                      <span className="experience-card">
                        <span className="experience-dates">{dates}</span>
                        <span className="experience-company">{company}</span>
                      </span>
                      <span className="item-hover-arrow" aria-hidden="true">
                        {isExpanded ? "↗" : "↘"}
                      </span>
                    </button>
                    <div
                      className="experience-details-shell"
                      id={`experience-details-${id}`}
                      aria-hidden={!isExpanded}
                    >
                      <div className="experience-details">
                        <div className="experience-details-copy">
                          {details.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        <section
          className="portfolio-panel projects-panel"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="panel-frame" aria-hidden="true" />
          <span className="panel-count">
            {expandedProject
              ? `Project ${String(
                  projects.findIndex(({ id }) => id === expandedProject) + 1
                ).padStart(2, "0")} / 03`
              : "03 / 05 Projects"}
          </span>
          <span className="panel-corner">TEJAS</span>
          <h2 className="projects-heading" id="projects-title">
            partimE
            <br />
            boB thE buildeR
          </h2>
          <div className="projects-aside" aria-hidden="true">
            <span>lonE</span>
            <span>warriOR</span>
          </div>
          <ol
            className={`projects-list${expandedProject ? " has-expanded" : ""}`}
          >
            {projects.map(({ id, category, title, skills, details }) => {
              const isExpanded = expandedProject === id;

              return (
                <li
                  className={`projects-item${isExpanded ? " is-expanded" : ""}`}
                  key={id}
                >
                  <div className="item-hover-surface project-surface">
                    <button
                      className="project-trigger"
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={`project-details-${id}`}
                      disabled={Boolean(expandedProject && !isExpanded)}
                      onClick={() => toggleProject(id)}
                    >
                      <span
                        className="project-skills"
                        aria-label={`Skills used for ${title}`}
                      >
                        {skills.map((skill) => (
                          <span className="project-skill" key={skill}>
                            {skill}
                          </span>
                        ))}
                      </span>
                      <span className="project-card">
                        <span className="project-category">{category}</span>
                        <span className="project-title">{title}</span>
                      </span>
                      <span className="item-hover-arrow" aria-hidden="true">
                        {isExpanded ? "↗" : "↘"}
                      </span>
                    </button>
                    <div
                      className="project-details-shell"
                      id={`project-details-${id}`}
                      aria-hidden={!isExpanded}
                    >
                      <div className="project-details">
                        <div className="project-details-copy">
                          {details.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        <section
          className="portfolio-panel toolstack-panel"
          id="toolstack"
          aria-labelledby="toolstack-title"
        >
          <div className="panel-frame" aria-hidden="true" />
          <span className="panel-count">04 / 05 Toolbox</span>
          <span className="panel-corner">AMCA</span>
          <h2 className="toolstack-heading" id="toolstack-title">
            mY
            <br />
            everydaY carrY
          </h2>
          <div className="toolstack-aside" aria-hidden="true">
            <span>weapoN</span>
            <span>masteR</span>
          </div>
          <ol className="stack-groups">
            {toolGroups.map((group) => (
              <li className="stack-group" key={group.name}>
                <h3>{group.name}</h3>
                <ol className="stack-items" aria-label={`${group.name} tools`}>
                  {group.tools.map((tool, index) => (
                    <li key={tool.name}>
                      <span className="stack-number">
                        {String(group.start + index).padStart(2, "0")}
                      </span>
                      <strong className="stack-symbol">{tool.symbol}</strong>
                      <span className="stack-name">{tool.name}</span>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </>
  );
}

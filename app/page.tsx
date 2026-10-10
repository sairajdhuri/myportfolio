"use client";

import Image from "next/image";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import {
  ArrowUpRight,
  Atom,
  Braces,
  BrainCircuit,
  ChevronDown,
  Code2,
  Database,
  Github,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  Network,
  ServerCog,
  Sparkles,
  TerminalSquare,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

const projects = [
  {
    number: "01",
    title: "FitVision",
    eyebrow: "Computer vision · Applied AI",
    description:
      "A real-time biomechanics system that counts reps, evaluates movement, and turns camera input into useful form feedback.",
    stack: ["MediaPipe", "YOLOv8", "RTMPose"],
    metric: "96.4",
    metricLabel: "form confidence",
    tone: "blue",
    href: "https://fitvision.tech",
    preview: "/images/fitvision-site.webp",
  },
  {
    number: "02",
    title: "JanVaani",
    eyebrow: "Civic tech · Multilingual AI",
    description:
      "A multilingual civic platform that lets citizens report local needs by voice or text and routes each request to the officials who can act.",
    stack: ["Next.js", "AI Routing", "22 Languages"],
    metric: "22",
    metricLabel: "Indian languages",
    tone: "violet",
    href: "https://janvaani-mainframehustlers.vercel.app/",
    preview: "/images/janvaani-site.webp",
  },
  {
    number: "03",
    title: "Fitfeed",
    eyebrow: "Full stack · Product engineering",
    description:
      "A fast, responsive nutrition platform built to make everyday calorie and macro tracking feel effortless.",
    stack: ["Next.js", "TypeScript", "Product"],
    metric: "1.8k",
    metricLabel: "daily kcal view",
    tone: "green",
  },
];

const stack = [
  { label: "Next.js", icon: Layers3 },
  { label: "React", icon: Atom },
  { label: "TypeScript", icon: Braces },
  { label: "Python", icon: TerminalSquare },
  { label: "PyTorch", icon: BrainCircuit },
  { label: "PostgreSQL", icon: Database },
  { label: "Node.js", icon: Network },
  { label: "Docker", icon: ServerCog },
  { label: "Framer Motion", icon: Zap },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind"],
    index: "01",
  },
  {
    icon: ServerCog,
    title: "Backend",
    skills: ["Node.js", "Express.js", "Python", "Java", "PHP", "Netlify"],
    index: "02",
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
    index: "03",
  },
  {
    icon: Wrench,
    title: "DevOps and tools",
    skills: ["Docker", "Vercel", "Git", "GitHub"],
    index: "04",
  },
  {
    icon: Sparkles,
    title: "Animation and 3D",
    skills: ["GSAP", "Blender"],
    index: "05",
  },
];

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function TechBar() {
  const trackRef = useRef<HTMLElement>(null);
  const isVisible = useInView(trackRef);
  const repeated = [...stack, ...stack];

  return (
    <section ref={trackRef} className="stack-bar" aria-label="Technology stack">
      <div className="stack-label">
        <span className="live-dot" />
        Core stack
      </div>
      <div className="stack-window">
        <div
          className="stack-track"
          style={{ animationPlayState: isVisible ? "running" : "paused" }}
        >
          {repeated.map(({ label, icon: Icon }, index) => (
            <div className="stack-item" key={`${label}-${index}`} aria-hidden={index >= stack.length}>
              <Icon strokeWidth={1.6} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlassNavButton() {
  return (
    <a className="glass-ai-link" href="#contact" aria-label="Start a conversation">
      <span>Let&apos;s talk</span>
      <ArrowUpRight />
    </a>
  );
}

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  const reduceMotion = useReducedMotion();
  if (project.preview) {
    return (
      <div className="project-visual site-preview">
        <Image
          src={project.preview}
          alt={`${project.title} website homepage`}
          fill
          sizes="(max-width: 820px) calc(100vw - 56px), (max-width: 1100px) 44vw, 29vw"
        />
      </div>
    );
  }

  return (
    <div className={`project-visual ${project.tone}`}>
      <div className="visual-topline">
        <span>{project.number} / SYSTEM</span>
        <span className="visual-live"><i /> LIVE</span>
      </div>
      <div className="visual-orbit" aria-hidden="true">
        <i /><i /><i />
        <BrainCircuit />
      </div>
      <div className="visual-metric">
        <strong>{project.metric}</strong>
        <span>{project.metricLabel}</span>
      </div>
      <div className="visual-chart" aria-hidden="true">
        {[32, 51, 42, 68, 58, 79, 92].map((height, index) => (
          <motion.i
            key={index}
            style={{ height: `${height}%`, transformOrigin: "bottom" }}
            initial={reduceMotion ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.06, duration: 0.65, ease: "easeOut" }}
          />
        ))}
      </div>
    </div>
  );
}

function PageProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div aria-hidden="true" className="page-progress" style={{ scaleX: scrollYProgress }} />;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSkillGroup, setOpenSkillGroup] = useState<string | null>("Frontend");
  const [activeSection, setActiveSection] = useState("work");
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
      if (event.key === "Tab") {
        const links = Array.from(menuRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []);
        const controls = [...links, menuButtonRef.current].filter((item): item is HTMLAnchorElement | HTMLButtonElement => Boolean(item));
        const index = controls.indexOf(document.activeElement as HTMLAnchorElement | HTMLButtonElement);
        event.preventDefault();
        controls[(index + (event.shiftKey ? -1 : 1) + controls.length) % controls.length]?.focus();
      }
    };
    const handleResize = () => {
      if (window.innerWidth > 820) setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    window.addEventListener("resize", handleResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = ["work", "skills", "about"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-24% 0px -58%", threshold: [0, 0.15, 0.35] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
    <main>
      <PageProgress />

      <header className="nav-shell">
        <nav className={`glass-nav${menuOpen ? " menu-open" : ""}`} aria-label="Primary navigation">
          <div className="nav-top-row">
            <a className="brand" href="#top" onClick={closeMenu} aria-label="Sairaj Dhuri, home">
              <span>SD</span>
              <i />
              <small>AI Engineer</small>
            </a>

            <div className="desktop-links">
              {[
                ["Work", "work"],
                ["Skills", "skills"],
                ["About", "about"],
              ].map(([label, id]) => (
                <motion.a
                  href={`#${id}`}
                  className={activeSection === id ? "active" : ""}
                  aria-current={activeSection === id ? "location" : undefined}
                  onClick={() => setActiveSection(id)}
                  key={id}
                  whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                  transition={{ type: "spring", duration: 0.35, bounce: 0.2 }}
                >
                  {activeSection === id && (
                    <i
                      className="nav-glass-selection"
                    />
                  )}
                  <span>{label}</span>
                </motion.a>
              ))}
            </div>

            <div className="nav-actions">
              <GlassNavButton />
              <motion.button
                ref={menuButtonRef}
                className="menu-button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                whileTap={reduceMotion ? undefined : { scale: 0.9 }}
                transition={{ type: "spring", duration: 0.25, bounce: 0.2 }}
              >
                {[0, 1].map((bar) => (
                  <motion.span
                    className="menu-bar"
                    key={bar}
                    animate={{ y: menuOpen ? 0 : bar === 0 ? -4 : 4, rotate: menuOpen ? bar === 0 ? 45 : -45 : 0 }}
                    transition={{ type: "spring", duration: reduceMotion ? 0 : 0.45, bounce: 0.15 }}
                  />
                ))}
              </motion.button>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {menuOpen && (
              <motion.div
                ref={menuRef}
                id="mobile-navigation"
                role="dialog"
                aria-modal="true"
                aria-label="Navigation"
                className="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ type: "spring", duration: reduceMotion ? 0 : 0.45, bounce: 0.15 }}
              >
                <div className="mobile-menu-links">
                  {[
                    ["Work", "#work"],
                    ["Skills", "#skills"],
                    ["About", "#about"],
                    ["Contact", "#contact"],
                  ].map(([label, href], index) => (
                    <motion.a
                      href={href}
                      onClick={closeMenu}
                      key={href}
                      className={href === "#contact" ? "mobile-contact-link" : undefined}
                      initial={reduceMotion ? false : { opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.25, delay: reduceMotion ? 0 : index * 0.04 }}
                    >
                      {href === "#contact" ? "Let's talk" : label}
                      {href === "#contact" && <ArrowUpRight />}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.button
            className="mobile-menu-backdrop"
            aria-label="Close navigation"
            tabIndex={-1}
            onClick={closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          />
        )}
      </AnimatePresence>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-copy">
          <motion.div
            className="hero-overline"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <span>Software</span><i /> <span>AI</span><i /> <span>Ideas</span>
          </motion.div>
          <motion.h1
            className="hero-name"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.25, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>Sairaj</span><br /><span>Dhuri</span>
          </motion.h1>
          <motion.div
            className="hero-role"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.38, duration: 0.65 }}
          >
            <span>Full-stack developer</span><i /><span>AI engineer</span>
          </motion.div>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.42, duration: 0.7 }}
          >
            Engineering end-to-end web products at the intersection<br />of full-stack dev and machine learning.
          </motion.p>
          <motion.div
            className="hero-meta"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.55, duration: 0.65 }}
          >
            <span>B.Tech ECE · AI &amp; ML</span><i /><span>MIT-WPU</span><i /><span>India</span>
          </motion.div>
        </div>

        <motion.div
          className="portrait-stage"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.32, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-card">
            <Image
              src="/images/profile/IMG_1270.jpeg"
              alt="Portrait of Sairaj Dhuri"
              fill
              preload
              sizes="(max-width: 820px) 88vw, (max-width: 1100px) 38vw, 510px"
            />
            <div className="portrait-wash" />
            <div className="portrait-caption">
              <span>SAIRAJ<br />DHURI</span>
              <small>AI Engineer<br />Full-stack developer</small>
            </div>
          </div>
        </motion.div>

        <div className="hero-scroll-note"><span>Scroll to explore</span><i /></div>
      </section>

      <TechBar />

      <section className="work-section section-pad" id="work">
        <div className="section-heading">
          <Reveal className="section-kicker"><span>01</span> Selected systems</Reveal>
          <Reveal delay={0.08}>
            <h2>Work that thinks<br /><em>and performs.</em></h2>
          </Reveal>
          <Reveal className="section-intro" delay={0.14}>
            A selection of products where software engineering and AI solve a clear, real-world problem.
          </Reveal>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card liquid-glass"
              key={project.title}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.18 }}
              transition={{ duration: reduceMotion ? 0 : 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
            >
              {project.href && (
                <a
                  className="project-link-overlay"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} live website`}
                />
              )}
              <ProjectVisual project={project} />
              <div className="project-copy">
                <span className="project-eyebrow">{project.eyebrow}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <div>{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  {project.href && <span className="round-arrow" aria-hidden="true"><ArrowUpRight /></span>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="expertise-section section-pad" id="skills">
        <div className="expertise-top">
          <Reveal className="section-kicker light"><span>02</span> Skills</Reveal>
          <Reveal delay={0.08}><h2>Technologies I use<br />to bring ideas to life.</h2></Reveal>
          <Reveal className="expertise-summary" delay={0.14}>
            <p>A practical toolkit for building thoughtful interfaces, dependable systems, and polished digital experiences.</p>
            <span>Design → Build → Ship</span>
          </Reveal>
        </div>

        <div className="skills-list">
          {skillGroups.map(({ icon: Icon, title, skills, index }) => {
            const isOpen = openSkillGroup === title;
            const panelId = `skills-panel-${index}`;

            return (
              <motion.div
                className={`skill-group${isOpen ? " open" : ""}`}
                key={title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: reduceMotion ? 0 : 0.4 }}
              >
                <button
                  className="skill-trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenSkillGroup(isOpen ? null : title)}
                >
                  <span className="skill-index">{index}</span>
                  <span className="skill-icon"><Icon /></span>
                  <span className="skill-title">{title}</span>
                  <span className="skill-count">{skills.length.toString().padStart(2, "0")} skills</span>
                  <ChevronDown className="skill-chevron" />
                </button>

                <motion.div
                  id={panelId}
                  className="skill-panel"
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="skill-tags">
                    {skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={false}
                        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 8 }}
                        transition={{
                          duration: reduceMotion ? 0 : isOpen ? 0.24 : 0.16,
                          delay: reduceMotion || !isOpen ? 0 : skillIndex * 0.035,
                          ease: "easeOut",
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="about-orb"><span /><span /><BrainCircuit /></div>
        <Reveal className="section-kicker"><span>03</span> About my practice</Reveal>
        <Reveal className="about-statement" delay={0.08}>
          <p>&ldquo;I build for that moment when deep technical complexity dissolves into an <em>effortless user experience.</em>&rdquo;</p>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-note">
            <span>How I work</span>
            <p>I move fluidly from interface and product strategy to backend architecture, model integration, and deployment.</p>
          </Reveal>
          <Reveal className="about-note" delay={0.08}>
            <span>What I value</span>
            <p>Clear thinking, sharp craft, honest collaboration, and technology that earns its place in people&apos;s lives.</p>
          </Reveal>
          <Reveal className="about-facts" delay={0.16}>
            <div><small>Based in</small><strong>Pune / Mumbai</strong></div>
            <div><small>Studying</small><strong>B.Tech ECE · AI &amp; ML</strong></div>
            <div><small>Institution</small><strong>MIT-WPU</strong></div>
          </Reveal>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" />
        <Reveal className="contact-inner">
          <span className="contact-kicker"><i /> Have something in mind?</span>
          <h2>Let&apos;s build it<br /><em>the right way.</em></h2>
          <p>Open to ambitious products, thoughtful collaborations, and engineering challenges at the edge of AI and software.</p>
          <a
            className="contact-button"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sairajdhuri1@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Start a conversation <ArrowUpRight />
          </a>
        </Reveal>
        <footer>
          <a className="footer-brand" href="#top">SD<span>®</span></a>
          <p>Full-stack developer &amp; AI engineer<br />Based in India · Working globally</p>
          <div className="socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="https://www.instagram.com/sairaj.dhurii/?hl=en" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sairajdhuri1@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email Sairaj"
            ><Mail /></a>
            <a href="#top" className="back-top">Back to top <ArrowUpRight /></a>
          </div>
          <small>© 2026 Sairaj Dhuri</small>
        </footer>
      </section>
    </main>
    </MotionConfig>
  );
}

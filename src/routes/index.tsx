import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jahwanth Pulugujju — Brand Strategy & Creative Direction" },
      { name: "description", content: "Portfolio of Jahwanth Pulugujju — Creative Strategist, Brand Designer & Content Marketer based in Hyderabad." },
      { property: "og:title", content: "Jahwanth Pulugujju — Portfolio 2025" },
      { property: "og:description", content: "Brand Strategy · Content Systems · Creative Direction" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap" },
    ],
  }),
});

function Index() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Loader
    const t = setTimeout(() => {
      if (loaderRef.current) loaderRef.current.classList.add("loaded");
    }, 1200);

    // Custom cursor lerp
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let cx = mx, cy = my;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cx - 5}px, ${cy - 5}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const hoverables = document.querySelectorAll("a, button, .hoverable");
    const enter = () => cursorRef.current?.classList.add("expand");
    const leave = () => cursorRef.current?.classList.remove("expand");
    hoverables.forEach(el => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    // Scroll progress
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      if (progressRef.current) progressRef.current.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Reveal observer
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));

    return () => {
      clearTimeout(t);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      hoverables.forEach(el => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
      io.disconnect();
    };
  }, []);

  const marqueeItems = [
    "BRAND IDENTITY", "CONTENT STRATEGY", "REELS CREATION",
    "VISUAL SYSTEMS", "SOCIAL GROWTH", "NARICO NATURALS CASE STUDY",
  ];

  const capabilities = [
    { t: "Brand Identity Design", d: "Logos, marks, and visual systems built on strategic foundations — not trends." },
    { t: "Social Media Strategy", d: "Channel-native frameworks that turn followers into a community." },
    { t: "Content Systems & Pillars", d: "Repeatable content engines designed around audience psychology." },
    { t: "Reels & Video Editing", d: "Short-form storytelling crafted for retention, rhythm, and recall." },
    { t: "Visual Storytelling", d: "Layouts, type, and color that make every post feel like a chapter." },
    { t: "Audience Psychology", d: "Studying why people stop, save, and share — then designing for it." },
  ];

  const steps = [
    { n: "01", t: "Observe", d: "I study the brand, the audience, and what already exists." },
    { n: "02", t: "Identify", d: "I find the gap between what the brand says and what people feel." },
    { n: "03", t: "Build", d: "I create systems — not one-off posts." },
    { n: "04", t: "Refine", d: "I iterate based on what performs and what resonates." },
  ];

  return (
    <div className="jp-root">
      {/* SVG noise + grain filter defs */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0" />
        </filter>
      </svg>

      <div className="jp-noise" />
      <div className="jp-cursor" ref={cursorRef} />
      <div className="jp-progress" ref={progressRef} />

      <div className="jp-loader" ref={loaderRef}>
        <span>J</span>
      </div>

      {/* NAV */}
      <nav className="jp-nav" id="jpNav">
        <a href="#top" className="jp-nav-logo">JP</a>
        <div className="jp-nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="jp-hero reveal" id="top">
        <div className="jp-hero-grain" />
        <div className="jp-hero-vignette" />
        <div className="jp-hero-label">PORTFOLIO — 2025</div>
        <div className="jp-hero-center">
          <h1 className="jp-hero-name">
            <span className="word">JAH</span>
            <span className="word">WANTH</span>
          </h1>
          <div className="jp-hero-rule" />
          <div className="jp-hero-sub">Brand Strategy · Content Systems · Creative Direction</div>
        </div>
        <div className="jp-badge hoverable">
          <svg viewBox="0 0 200 200" className="jp-badge-svg">
            <defs>
              <path id="circ" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <text className="jp-badge-text">
              <textPath href="#circ">OPEN TO OPPORTUNITIES · HYDERABAD · OPEN TO OPPORTUNITIES · HYDERABAD ·</textPath>
            </text>
          </svg>
          <div className="jp-badge-dot" />
        </div>
      </section>

      {/* MARQUEE */}
      <section className="jp-marquee">
        <div className="jp-marquee-track">
          {[...Array(3)].map((_, k) => (
            <div className="jp-marquee-row" key={k}>
              {marqueeItems.map((m, i) => (
                <span key={i}>— {m}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="jp-about reveal" id="about">
        <div className="jp-about-bignum">01</div>
        <div className="jp-about-grid">
          <div className="jp-about-left">
            <div className="jp-eyebrow gold">ABOUT</div>
            <h2 className="jp-about-h">I don't just make content. I build brand languages.</h2>
          </div>
          <div className="jp-about-right">
            <p>
              I'm a Computer Science student who thinks like a brand strategist. I study what makes people stop scrolling, what makes them trust a brand, and what makes them come back. My work sits at the intersection of visual identity, content psychology, and digital storytelling — built for brands that want to mean something.
            </p>
            <div className="jp-stats">
              {[
                { n: "3+", l: "Brand Projects" },
                { n: "12+", l: "Months Building" },
                { n: "1", l: "Strong Case Study" },
              ].map((s, i) => (
                <div className="jp-stat" key={i}>
                  <div className="jp-stat-n">{s.n}</div>
                  <div className="jp-stat-l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="jp-work reveal" id="work">
        <div className="jp-work-inner">
          <div className="jp-eyebrow gold">FEATURED PROJECT — 01</div>
          <h2 className="jp-work-h">Narico Naturals</h2>
          <div className="jp-work-sub">Brand Identity · Social Strategy · Visual System</div>
          <div className="jp-work-card hoverable">
            <div className="jp-work-card-left">
              <div className="jp-mock">
                <div className="jp-mock-logo">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="46" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
                    <path d="M50 22 C30 32, 28 56, 50 78 C72 56, 70 32, 50 22 Z" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
                    <path d="M50 26 Q44 50, 50 76" fill="none" stroke="var(--gold)" strokeWidth="1.2" />
                    <path d="M50 40 Q40 46, 36 56" fill="none" stroke="var(--gold)" strokeWidth="1" opacity="0.7" />
                    <path d="M50 40 Q60 46, 64 56" fill="none" stroke="var(--gold)" strokeWidth="1" opacity="0.7" />
                  </svg>
                </div>
                <div className="jp-mock-posts">
                  <div className="jp-mock-post p1" />
                  <div className="jp-mock-post p2" />
                  <div className="jp-mock-post p3" />
                </div>
                <div className="jp-mock-swatches">
                  <span style={{ background: "#F5F0E8" }} />
                  <span style={{ background: "#1C3A2F" }} />
                  <span style={{ background: "#2D5A45" }} />
                  <span style={{ background: "#C9A84C" }} />
                  <span style={{ background: "#1A1A1A" }} />
                </div>
              </div>
            </div>
            <div className="jp-work-card-right">
              <p>
                A complete brand identity and content system for a natural wellness company — covering logo philosophy, color psychology, Instagram visual language, content pillars, and growth strategy.
              </p>
              <div className="jp-work-ctas">
                <a className="jp-btn primary" href="https://drive.google.com/drive/folders/13pzD6hyebdegqyj_L8J4gonft8e6r-PA?usp=sharing" target="_blank" rel="noopener noreferrer">VIEW CASE STUDY ↗</a>
                <a className="jp-btn ghost" href="https://linkedin.com/in/jahwanthpulugujju" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="jp-skills reveal">
        <div className="jp-skills-watermark">02</div>
        <h2 className="jp-skills-h">What I Bring</h2>
        <div className="jp-skills-list">
          {capabilities.map((c, i) => (
            <div className="jp-skill" key={i} style={{ marginLeft: i % 2 ? 80 : 0 }}>
              <div className="jp-skill-bar" />
              <div className="jp-skill-t">{c.t}</div>
              <div className="jp-skill-d">{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="jp-process reveal">
        <h2 className="jp-process-h">How I Think</h2>
        <div className="jp-process-row">
          {steps.map((s, i) => (
            <div className="jp-step" key={i} style={{ transitionDelay: `${i * 0.2}s` }}>
              <div className="jp-step-n">{s.n}</div>
              <div className="jp-step-t">{s.t}</div>
              <div className="jp-step-d">{s.d}</div>
              {i < steps.length - 1 && <div className="jp-step-line" />}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="jp-contact reveal" id="contact">
        <h2 className="jp-contact-h">
          Let's Build Something
          <br />
          <em>Real.</em>
        </h2>
        <p className="jp-contact-p">Open to internships, freelance, and creative collaborations.</p>
        <div className="jp-contact-btns">
          <a className="jp-pill" href="mailto:jahwanthpulugujju@gmail.com">jahwanthpulugujju@gmail.com</a>
          <a className="jp-pill" href="https://linkedin.com/in/jahwanthpulugujju" target="_blank" rel="noopener noreferrer">linkedin.com/in/jahwanthpulugujju</a>
        </div>
        <div className="jp-contact-meta">Based in Hyderabad · Open to relocation</div>
      </section>

      {/* FOOTER */}
      <footer className="jp-footer">
        <span>Jahwanth Pulugujju</span>
         <span>© 2026 Jahwanth Pulugujju — Built with intention.</span>
      </footer>
    </div>
  );
}

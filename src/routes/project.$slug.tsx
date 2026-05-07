import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { projects, type Project } from "../data/projects";
import ScrollProgress from "../components/ScrollProgress";
import CustomCursor from "../components/CustomCursor";

export const Route = createFileRoute("/project/$slug")({
  component: ProjectDetail,
  head: ({ params }: { params: { slug: string } }) => {
    const project = projects.find((p) => p.slug === params.slug);
    return {
      meta: [
        { title: project ? `${project.title} — Jahwanth Pulugujju` : "Project" },
        { name: "description", content: project?.summary ?? "" },
      ],
    };
  },
  loader: ({ params }: { params: { slug: string } }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    const currentIndex = projects.findIndex((p) => p.slug === params.slug);
    const nextProject = projects[(currentIndex + 1) % projects.length];
    return { project, nextProject };
  },
});

function ProjectDetail() {
  const { project, nextProject } = Route.useLoaderData() as { project: Project; nextProject: Project };

  return (
    <div className="jp-root">
      <ScrollProgress />
      <CustomCursor />
      <div className="jp-noise" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero */}
        <section style={{
          background: "var(--deep-green)", padding: "120px 80px 80px",
          color: "var(--cream)", position: "relative", overflow: "hidden",
          minHeight: "45vh", display: "flex", alignItems: "flex-end",
        }}>
          <div className="jp-hero-grain" />
          <div className="jp-hero-vignette" />
          <div style={{ position: "relative", zIndex: 2, maxWidth: 1400, width: "100%", margin: "0 auto" }}>
            <Link
              to="/"
              style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: 3,
                textTransform: "uppercase", color: "var(--gold)", textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 8,
                marginBottom: 48, transition: "opacity 0.3s",
              }}
              aria-label="Back to home"
            >
              ← BACK TO WORK
            </Link>
            <div style={{
              fontSize: 12, letterSpacing: 4, textTransform: "uppercase",
              color: "var(--gold)", marginBottom: 24, fontFamily: "'DM Sans', sans-serif",
            }}>
              {project.category} — {project.year}
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Playfair Display', serif", fontSize: 96,
                fontWeight: 700, color: "var(--cream)", lineHeight: 1,
                margin: "0 0 24px",
              }}
            >
              {project.title}
            </motion.h1>
            <div style={{
              fontSize: 14, letterSpacing: 2, textTransform: "uppercase",
              color: "rgba(245,240,232,0.6)", fontFamily: "'DM Sans', sans-serif",
            }}>
              {project.role}
            </div>
          </div>
        </section>

        {/* Body */}
        <section style={{ background: "var(--warm-white)", padding: "80px" }}>
          <div
            style={{
              maxWidth: 1400, margin: "0 auto",
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80,
            }}
            className="jp-detail-grid"
          >
            {/* Left */}
            <div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif", fontSize: 32,
                color: "var(--deep-green)", margin: "0 0 24px", fontWeight: 700,
              }}>
                Overview
              </h2>
              <p style={{
                fontSize: 17, lineHeight: 1.8, color: "var(--charcoal)", marginBottom: 48,
              }}>
                {project.description}
              </p>

              <h3 style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 11,
                letterSpacing: 4, textTransform: "uppercase",
                color: "var(--gold)", margin: "0 0 20px",
              }}>
                TOOLS & SKILLS
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 48 }}>
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    style={{
                      padding: "6px 18px", border: "1px solid rgba(201,168,76,0.4)",
                      borderRadius: 999, fontSize: 13, color: "var(--deep-green)",
                      fontFamily: "'DM Sans', sans-serif",
                      background: "rgba(201,168,76,0.06)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 11,
                letterSpacing: 4, textTransform: "uppercase",
                color: "var(--gold)", margin: "0 0 20px",
              }}>
                OUTCOMES
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {project.outcomes.map((o: string, i: number) => (
                  <li key={i} style={{
                    display: "flex", gap: 16, fontSize: 16,
                    color: "var(--charcoal)", lineHeight: 1.5,
                  }}>
                    <span style={{ color: "var(--gold)", flexShrink: 0 }}>→</span>
                    {o}
                  </li>
                ))}
              </ul>

              {project.links.length > 0 && (
                <div style={{ marginTop: 48, display: "flex", gap: 16, flexWrap: "wrap" }}>
                  {project.links.map((link: { label: string; url: string }) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="jp-btn primary"
                      aria-label={link.label}
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Right — media placeholders */}
            <div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif", fontSize: 32,
                color: "var(--deep-green)", margin: "0 0 24px", fontWeight: 700,
              }}>
                Project Assets
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
                {Array.from({ length: project.mediaPlaceholders }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      background: "var(--deep-green)",
                      aspectRatio: i === 0 ? "16/9" : "4/3",
                      gridColumn: i === 0 ? "1 / -1" : "auto",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      border: "1px solid rgba(201,168,76,0.15)",
                    }}
                    aria-label={`Project asset ${i + 1}`}
                  >
                    <div style={{
                      textAlign: "center", fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11, letterSpacing: 3, textTransform: "uppercase",
                      color: "rgba(201,168,76,0.4)",
                    }}>
                      ASSET {i + 1}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{
                marginTop: 16, fontSize: 11, letterSpacing: 2,
                color: "rgba(26,26,26,0.35)", fontFamily: "'DM Sans', sans-serif",
              }}>
                Place images in /public/media/{project.slug}/
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section style={{
          background: "var(--charcoal)", padding: "64px 80px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 24,
        }}>
          <Link
            to="/"
            style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: 3,
              textTransform: "uppercase", color: "var(--cream)", textDecoration: "none",
            }}
            aria-label="Back to all work"
          >
            ← ALL WORK
          </Link>
          <div style={{ textAlign: "right" }}>
            <div style={{
              fontSize: 11, letterSpacing: 3, textTransform: "uppercase",
              color: "rgba(245,240,232,0.4)", marginBottom: 8,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              NEXT PROJECT
            </div>
            <Link
              to="/project/$slug"
              params={{ slug: nextProject.slug }}
              style={{
                fontFamily: "'Playfair Display', serif", fontSize: 28,
                color: "var(--gold)", textDecoration: "none", fontWeight: 700,
              }}
              aria-label={`View next project: ${nextProject.title}`}
            >
              {nextProject.title} →
            </Link>
          </div>
        </section>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .jp-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

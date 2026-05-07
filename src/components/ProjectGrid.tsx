import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

type Filter = "all" | "brand" | "campaign" | "design";
const filters: { label: string; value: Filter }[] = [
  { label: "ALL", value: "all" },
  { label: "BRAND", value: "brand" },
  { label: "CAMPAIGNS", value: "campaign" },
  { label: "DESIGN", value: "design" },
];

export default function ProjectGrid() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="work"
      style={{
        background: "var(--warm-white)", padding: "120px 80px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Playfair Display', serif", fontSize: 80,
            color: "var(--deep-green)", fontWeight: 700, margin: "0 0 48px",
            lineHeight: 1,
          }}
        >
          Selected Work
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: "flex", gap: 32, marginBottom: 64, flexWrap: "wrap" }}
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              style={{
                background: "none", border: "none", cursor: "none",
                fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                letterSpacing: 4, textTransform: "uppercase",
                color: activeFilter === f.value ? "var(--deep-green)" : "rgba(26,26,26,0.4)",
                paddingBottom: 6, paddingLeft: 0, paddingRight: 0,
                borderBottom: activeFilter === f.value ? "1px solid var(--gold)" : "1px solid transparent",
                transition: "all 0.3s ease", fontWeight: activeFilter === f.value ? 500 : 400,
              }}
              aria-label={`Filter by ${f.label}`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 24,
          }}
          className="jp-project-grid"
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div style={{
            textAlign: "center", padding: "80px 0",
            fontFamily: "'DM Sans', sans-serif", color: "rgba(26,26,26,0.4)",
            fontSize: 16,
          }}>
            No projects in this category yet.
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .jp-project-grid { grid-template-columns: 1fr !important; }
          section[id="work"] { padding: 80px 24px !important; }
          section[id="work"] h2 { font-size: 52px !important; }
        }
      `}</style>
    </section>
  );
}

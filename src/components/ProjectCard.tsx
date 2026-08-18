import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      data-cursor="expand"
      style={{
        background: "var(--deep-green)",
        height: 360,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "36px 40px",
        position: "relative",
        border: "1px solid rgba(201,168,76,0.15)",
        cursor: "none",
      }}
      className="jp-project-card"
    >
      <div>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 24,
          }}
        >
          {project.category}
        </div>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 36,
            color: "var(--cream)",
            fontWeight: 700,
            lineHeight: 1.15,
            margin: "0 0 16px",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: 15,
            color: "rgba(245,240,232,0.7)",
            lineHeight: 1.6,
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.summary}
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div
          style={{
            fontSize: 13,
            color: "rgba(245,240,232,0.5)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <div>{project.year}</div>
          <div style={{ marginTop: 4 }}>{project.role}</div>
        </div>
        <Link
          to="/project/$slug"
          params={{ slug: project.slug }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            letterSpacing: 2,
            color: "var(--gold)",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
          aria-label={`View ${project.title} case study`}
        >
          VIEW →
        </Link>
      </div>

      <style>{`
        .jp-project-card:hover {
          box-shadow: 0 0 0 1px rgba(201,168,76,0.5);
        }
      `}</style>
    </motion.div>
  );
}

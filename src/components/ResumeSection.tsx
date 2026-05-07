import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { resumeData } from "../data/resume";

export default function ResumeSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="resume"
      style={{
        background: "var(--deep-green)", padding: "120px 80px",
        color: "var(--cream)", textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Playfair Display', serif", fontSize: 64,
            fontWeight: 700, margin: "0 0 64px", lineHeight: 1.1,
          }}
        >
          Built on Real Execution
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          style={{
            background: "var(--forest)", padding: "48px 56px",
            border: "1px solid rgba(201,168,76,0.2)", marginBottom: 56,
            textAlign: "left",
          }}
        >
          <p style={{
            fontSize: 16, lineHeight: 1.8, color: "rgba(245,240,232,0.85)",
            marginBottom: 40, fontFamily: "'DM Sans', sans-serif",
          }}>
            {resumeData.summary}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {resumeData.achievements.map((a, i) => (
              <div
                key={i}
                style={{
                  display: "flex", gap: 20, alignItems: "flex-start",
                  paddingTop: 20, borderTop: "1px solid rgba(201,168,76,0.12)",
                }}
              >
                <span style={{
                  color: "var(--gold)", fontSize: 18, flexShrink: 0, marginTop: 2,
                }}>→</span>
                <span style={{
                  fontSize: 16, color: "var(--cream)", lineHeight: 1.6,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {a}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}
        >
          <a
            href={resumeData.downloadUrl}
            download
            aria-label="Download Jahwanth's resume PDF"
            style={{
              display: "inline-block", padding: "20px 48px",
              background: "var(--gold)", color: "var(--deep-green)",
              textDecoration: "none", fontSize: 12, letterSpacing: 3,
              textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600, transition: "all 0.3s ease",
            }}
            className="jp-resume-btn"
          >
            DOWNLOAD RESUME (PDF)
          </a>
          <a
            href={resumeData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 15, color: "rgba(245,240,232,0.6)",
              textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
              transition: "color 0.3s ease",
            }}
            className="jp-linkedin-link"
          >
            or view full experience on LinkedIn →
          </a>
        </motion.div>
      </div>

      <style>{`
        .jp-resume-btn:hover { background: transparent; color: var(--gold); box-shadow: inset 0 0 0 1px var(--gold); }
        .jp-linkedin-link:hover { color: var(--gold); }
        @media (max-width: 768px) {
          section[id="resume"] { padding: 80px 24px !important; }
          section[id="resume"] h2 { font-size: 40px !important; }
          .jp-resume-btn { padding: 16px 32px !important; }
        }
      `}</style>
    </section>
  );
}

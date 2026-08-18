import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const swatches = ["#FAF8F4", "#2D5A45", "#C9A84C", "#1C3A2F", "#1A1A1A"];

const metrics = [
  { label: "Scope", value: "Logo · Color System · Instagram Visual Language" },
  { label: "Content", value: "Post templates · Reel thumbnails · Caption framework" },
  { label: "Deliverables", value: "5 content pillars · Full brand identity system" },
  { label: "Status", value: "Ongoing , sole brand designer & strategist" },
];

export default function CampaignSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{ background: "var(--charcoal)", padding: "120px 80px", color: "var(--cream)" }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 24,
              fontWeight: 500,
            }}
          >
            FEATURED PROJECT , 01
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 96,
              color: "var(--cream)",
              fontWeight: 700,
              margin: "0 0 16px",
              lineHeight: 1.0,
            }}
          >
            Narico Naturals
          </h2>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 40,
            }}
          >
            Brand Identity · Social Strategy · Visual System
          </div>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              maxWidth: 680,
              marginBottom: 64,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            A complete brand identity and content system for a natural wellness company , covering
            logo philosophy, color psychology, Instagram visual language, content pillars, and
            growth strategy.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
          className="jp-campaign-grid"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            style={{
              background: "var(--deep-green)",
              padding: "48px",
              border: "1px solid rgba(201,168,76,0.2)",
              display: "flex",
              flexDirection: "column",
              gap: 40,
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 32,
                width: "100%",
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  border: "2px solid var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <path
                    d="M20 4 C20 4 8 12 8 22 C8 30 13.5 36 20 36 C26.5 36 32 30 32 22 C32 12 20 4 20 4Z"
                    stroke="#C9A84C"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <line
                    x1="20"
                    y1="8"
                    x2="20"
                    y2="36"
                    stroke="#C9A84C"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                </svg>
              </div>

              <div style={{ position: "relative", width: 200, height: 130 }}>
                <div
                  style={{
                    position: "absolute",
                    left: 15,
                    top: 10,
                    width: 88,
                    height: 108,
                    background: "var(--cream)",
                    border: "1px solid rgba(201,168,76,0.25)",
                    transform: "rotate(-4deg)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 56,
                    top: 5,
                    width: 88,
                    height: 108,
                    background: "var(--forest)",
                    border: "1px solid rgba(201,168,76,0.4)",
                    transform: "rotate(0deg)",
                    zIndex: 2,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 97,
                    top: 10,
                    width: 88,
                    height: 108,
                    background: "var(--gold)",
                    border: "1px solid rgba(201,168,76,0.4)",
                    transform: "rotate(4deg)",
                    zIndex: 1,
                  }}
                />
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                {swatches.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: c,
                      border: "1px solid rgba(201,168,76,0.35)",
                    }}
                    aria-label={`Brand color ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div
              style={{
                fontSize: 11,
                letterSpacing: 2,
                color: "rgba(245,240,232,0.3)",
                fontFamily: "'DM Sans', sans-serif",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              NARICO NATURALS , BRAND SYSTEM
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            style={{
              background: "rgba(28,58,47,0.5)",
              padding: "40px",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {metrics.map((m, i) => (
                <div
                  key={i}
                  style={{ borderTop: "1px solid rgba(201,168,76,0.15)", padding: "22px 0" }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: 3,
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: 8,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {m.label}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      color: "var(--cream)",
                      lineHeight: 1.5,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a
                href="https://drive.google.com/drive/folders/13pzD6hyebdegqyj_L8J4gonft8e6r-PA?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "16px 28px",
                  border: "1.5px solid var(--gold)",
                  color: "var(--gold)",
                  textDecoration: "none",
                  fontSize: 12,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "all 0.3s ease",
                  borderRadius: 0,
                  fontWeight: 500,
                }}
                className="jp-campaign-cta"
                aria-label="View Narico Naturals case study"
              >
                VIEW CASE STUDY ↗
              </a>
              <a
                href="https://linkedin.com/in/jahwanthpulugujju"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "16px 28px",
                  border: "1.5px solid var(--gold)",
                  color: "var(--gold)",
                  textDecoration: "none",
                  fontSize: 12,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "all 0.3s ease",
                  borderRadius: 0,
                  fontWeight: 500,
                }}
                className="jp-campaign-cta"
                aria-label="View Jahwanth's LinkedIn profile"
              >
                LINKEDIN ↗
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .jp-campaign-cta:hover { background: var(--gold) !important; color: var(--deep-green) !important; }
        @media (max-width: 768px) {
          .jp-campaign-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

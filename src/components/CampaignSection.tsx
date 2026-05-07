import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { label: "Objectives", value: "Event awareness + ticket urgency" },
  { label: "Scope", value: "Instagram, WhatsApp, on-ground" },
  { label: "Assets Delivered", value: "3 posters · Story sequence · Full copy" },
  { label: "Results", value: "Full house — event sold out" },
];

const mockColors = [
  ["#1a1a1a", "#C9A84C"],
  ["#2D5A45", "#F5F0E8"],
  ["#1C3A2F", "#C9A84C"],
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
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12,
            letterSpacing: 4, textTransform: "uppercase",
            color: "var(--gold)", marginBottom: 24, fontWeight: 500,
          }}>
            FEATURED CAMPAIGN
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 72,
            color: "var(--cream)", fontWeight: 700, margin: "0 0 16px", lineHeight: 1.05,
          }}>
            Toastmasters<br />Murder Mystery Night
          </h2>
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, letterSpacing: 3,
            textTransform: "uppercase", color: "var(--gold)", marginBottom: 40,
          }}>
            Event Campaign Design · Content Strategy · Visual Identity
          </div>
          <p style={{
            fontSize: 17, lineHeight: 1.8, color: "rgba(245,240,232,0.8)",
            maxWidth: 680, marginBottom: 64,
          }}>
            Designed and executed the full creative campaign for a Toastmasters murder-mystery themed event — covering event poster series, social media content, narrative copy, and on-ground experience design.
          </p>
        </motion.div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 48, alignItems: "start",
        }} className="jp-campaign-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {mockColors.map(([bg, accent], i) => (
                <div
                  key={i}
                  style={{
                    background: bg, aspectRatio: "3/4",
                    border: `1px solid ${accent}40`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, letterSpacing: 2, color: accent,
                    textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif",
                    position: "relative", overflow: "hidden",
                  }}
                >
                  <div style={{
                    position: "absolute", inset: 0, display: "flex",
                    flexDirection: "column", alignItems: "center", justifyContent: "center",
                    gap: 8, padding: 16,
                  }}>
                    <div style={{ width: 32, height: 1, background: accent, opacity: 0.6 }} />
                    <div style={{ fontSize: 10, letterSpacing: 3, color: accent, textAlign: "center", lineHeight: 1.6 }}>
                      MURDER<br />MYSTERY<br />NIGHT
                    </div>
                    <div style={{ width: 32, height: 1, background: accent, opacity: 0.6 }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: 12, fontSize: 11, letterSpacing: 2,
              color: "rgba(245,240,232,0.35)", fontFamily: "'DM Sans', sans-serif",
            }}>
              POSTER SERIES — 3 DESIGNS
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            style={{
              background: "var(--deep-green)", padding: "40px",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {metrics.map((m, i) => (
                <div key={i} style={{ borderTop: "1px solid rgba(201,168,76,0.15)", paddingTop: 24 }}>
                  <div style={{
                    fontSize: 11, letterSpacing: 3, textTransform: "uppercase",
                    color: "var(--gold)", marginBottom: 8,
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {m.label}
                  </div>
                  <div style={{ fontSize: 16, color: "var(--cream)", lineHeight: 1.5 }}>
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" }); }}
              style={{
                display: "inline-block", marginTop: 40, padding: "16px 32px",
                border: "1px solid var(--gold)", color: "var(--gold)",
                textDecoration: "none", fontSize: 12, letterSpacing: 3,
                textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.3s ease",
              }}
              className="jp-campaign-cta"
            >
              VIEW FULL CAMPAIGN →
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        .jp-campaign-cta:hover { background: var(--gold); color: var(--deep-green); }
        @media (max-width: 768px) {
          .jp-campaign-grid { grid-template-columns: 1fr !important; }
          section[style*="charcoal"] { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}

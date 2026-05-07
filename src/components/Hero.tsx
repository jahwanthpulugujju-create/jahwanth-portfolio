import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="jp-hero reveal" id="top">
      <div className="jp-hero-grain" />
      <div className="jp-hero-vignette" />

      <div className="jp-hero-label">
        <div className="jp-available">
          <span className="jp-available-dot" />
          <span>CURRENTLY AVAILABLE FOR INTERNSHIPS</span>
        </div>
        <div>PORTFOLIO — 2026</div>
      </div>

      <motion.div
        className="jp-hero-center"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <h1 className="jp-hero-name">
          {["JAHWANTH", "PULUGUJJU"].map((word, i) => (
            <motion.span
              key={i}
              className="word"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.div
          className="jp-hero-rule"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
          }}
        />
        <motion.div
          className="jp-hero-sub"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8, delay: 0.45 } },
          }}
        >
          Brand Strategy · Content Systems · Creative Direction
        </motion.div>
      </motion.div>

      <div className="jp-badge hoverable" data-cursor="expand">
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

      <div className="jp-scroll-indicator">
        <span>SCROLL</span>
        <div className="jp-scroll-line" />
      </div>
    </section>
  );
}

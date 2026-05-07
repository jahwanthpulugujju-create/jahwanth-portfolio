import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { n: "3+", l: "Brand Projects" },
  { n: "12+", l: "Months Building" },
  { n: "1", l: "Strong Case Study" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="jp-about" id="about" ref={ref as React.RefObject<HTMLElement>}>
      <div className="jp-about-bignum" aria-hidden="true">01</div>
      <div className="jp-about-grid">
        <motion.div
          className="jp-about-left"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="jp-eyebrow gold">ABOUT</div>
          <h2 className="jp-about-h">I don't just make content. I build brand languages.</h2>
        </motion.div>

        <motion.div
          className="jp-about-right"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>
            I'm a Computer Science student at BVRIT Narsapur who thinks like a brand strategist. I study what makes people stop scrolling, what makes them trust a brand, and what makes them come back. My work sits at the intersection of visual identity, content psychology, and digital storytelling — built for brands that want to mean something. Before I design a post, I ask: what feeling should this create? That question is what separates content from communication.
          </p>
          <div className="jp-stats">
            {stats.map((s, i) => (
              <motion.div
                className="jp-stat"
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: "easeOut" }}
              >
                <div className="jp-stat-n">{s.n}</div>
                <div className="jp-stat-l">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

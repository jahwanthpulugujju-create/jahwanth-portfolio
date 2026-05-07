import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/skills";

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="jp-skills"
    >
      <div className="jp-skills-watermark" aria-hidden="true">02</div>
      <motion.h2
        className="jp-skills-h"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        What I Bring
      </motion.h2>
      <div className="jp-skills-list">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="jp-skill"
            style={{ marginLeft: i % 2 ? 80 : 0 }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: "easeOut" }}
            whileHover={{ backgroundColor: "var(--cream)" }}
          >
            <div className="jp-skill-bar" />
            <div className="jp-skill-t">{skill.title}</div>
            <div className="jp-skill-d">{skill.description}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

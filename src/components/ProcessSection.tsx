import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { n: "01", t: "Observe", d: "I study the brand, the audience, and what already exists." },
  { n: "02", t: "Identify", d: "I find the gap between what the brand says and what people feel." },
  { n: "03", t: "Build", d: "I create systems — not one-off posts." },
  { n: "04", t: "Refine", d: "I iterate based on what performs and what resonates." },
];

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="jp-process">
      <motion.h2
        className="jp-process-h"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        How I Think
      </motion.h2>
      <div className="jp-process-row">
        {steps.map((s, i) => (
          <motion.div
            className="jp-step"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
          >
            <div className="jp-step-n">{s.n}</div>
            <div className="jp-step-t">{s.t}</div>
            <div className="jp-step-d">{s.d}</div>
            {i < steps.length - 1 && <div className="jp-step-line" />}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

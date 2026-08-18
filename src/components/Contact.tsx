import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="jp-contact" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="jp-contact-h">
          Let's Build Something
          <br />
          <em>Real.</em>
        </h2>
        <p className="jp-contact-p">Open to internships, freelance, and creative collaborations.</p>
        <div className="jp-contact-btns">
          <a
            className="jp-pill"
            href="mailto:jahwanthpulugujju@gmail.com"
            aria-label="Email Jahwanth"
          >
            jahwanthpulugujju@gmail.com
          </a>
          <a
            className="jp-pill"
            href="https://linkedin.com/in/jahwanthpulugujju"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Jahwanth's LinkedIn profile"
          >
            linkedin.com/in/jahwanthpulugujju
          </a>
        </div>
        <div className="jp-contact-meta">Based in Hyderabad · Open to relocation</div>
      </motion.div>
    </section>
  );
}

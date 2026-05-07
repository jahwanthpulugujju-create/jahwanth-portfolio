import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    return !sessionStorage.getItem("jp_loaded");
  });

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("jp_loaded", "1");
    }, 1700);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
          style={{
            position: "fixed", inset: 0, background: "var(--deep-green)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 10002,
          }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 180, color: "var(--cream)", fontWeight: 700, lineHeight: 1,
            }}
          >
            J
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

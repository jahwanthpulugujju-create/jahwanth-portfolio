import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "RESUME", href: "#resume" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        ref={navRef}
        id="jpNav"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, height: 64,
          zIndex: 9998, display: "flex", alignItems: "center",
          justifyContent: "space-between", padding: "0 48px",
          background: scrolled ? "rgba(28,58,47,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "background 0.4s ease, backdrop-filter 0.4s ease",
        }}
      >
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); handleNav("#top"); }}
          style={{
            fontFamily: "'Playfair Display', serif", fontSize: 20,
            color: "var(--gold)", textDecoration: "none", fontWeight: 700,
          }}
        >
          JP
        </a>

        <nav className="jp-nav-links" style={{ display: "flex" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="jp-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          style={{
            background: "none", border: "none", cursor: "none",
            display: "none", flexDirection: "column", gap: 5, padding: 8,
          }}
        >
          <span style={{ display: "block", width: 24, height: 1.5, background: "var(--cream)", transition: "transform 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ display: "block", width: 24, height: 1.5, background: "var(--cream)", opacity: menuOpen ? 0 : 1, transition: "opacity 0.3s" }} />
          <span style={{ display: "block", width: 24, height: 1.5, background: "var(--cream)", transition: "transform 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed", inset: 0, background: "var(--deep-green)",
              zIndex: 9997, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: 48,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 48,
                  color: "var(--cream)", textDecoration: "none", fontWeight: 700,
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .jp-nav-links { display: none !important; }
          .jp-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}

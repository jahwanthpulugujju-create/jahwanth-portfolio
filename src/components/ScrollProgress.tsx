import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      if (barRef.current) barRef.current.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={barRef}
      style={{
        position: "fixed", top: 0, left: 0, height: 2, width: 0,
        background: "var(--gold)", zIndex: 9999, pointerEvents: "none",
        transition: "width 0.05s linear",
      }}
    />
  );
}

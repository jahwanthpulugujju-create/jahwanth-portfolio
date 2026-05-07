import { useEffect } from "react";

export function useCustomCursor(cursorRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let cx = mx, cy = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cx - 5}px, ${cy - 5}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const hoverables = document.querySelectorAll("a, button, [data-cursor='expand']");
    const enter = () => cursorRef.current?.classList.add("expand");
    const leave = () => cursorRef.current?.classList.remove("expand");
    hoverables.forEach(el => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      hoverables.forEach(el => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [cursorRef]);
}

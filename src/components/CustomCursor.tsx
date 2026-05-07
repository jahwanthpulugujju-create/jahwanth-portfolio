import { useRef } from "react";
import { useCustomCursor } from "../hooks/useCustomCursor";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  useCustomCursor(cursorRef);

  return <div className="jp-cursor" ref={cursorRef} />;
}

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const move = (e) => {
      const g = ref.current;
      if (!g) return;
      g.style.left = e.clientX + "px";
      g.style.top = e.clientY + "px";
    };
    document.addEventListener("pointermove", move);
    return () => document.removeEventListener("pointermove", move);
  }, []);
  return <div className="glow" ref={ref} />;
}

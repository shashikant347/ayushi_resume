import { useRef } from "react";
import Reveal from "./Reveal.jsx";

function count(el, n, suffix) {
  let t0 = null;
  const f = (t) => {
    t0 = t0 ?? t;
    const p = Math.min((t - t0) / 1200, 1);
    el.textContent = Math.round(n * p) + (p === 1 ? suffix : "");
    if (p < 1) requestAnimationFrame(f);
  };
  requestAnimationFrame(f);
}

export default function Stat({ n, suffix = "", label }) {
  const numRef = useRef(null);
  return (
    <Reveal className="stat" onReveal={() => numRef.current && count(numRef.current, n, suffix)}>
      <b ref={numRef}>0</b>
      <span>{label}</span>
    </Reveal>
  );
}

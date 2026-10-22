import { useEffect, useRef } from "react";

const EM = ["❤️", "✨", "💖", "⭐", "💫", "🌸"];
const SEL = "a,button,.tab,.card,.cc,.chip,.stat,.logo";

/** Full-screen canvas that sprays flame particles when the cursor touches interactive elements. */
export default function FireCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    const x = c.getContext("2d");
    let P = [], run = false, last = 0, raf = 0;

    const size = () => { c.width = innerWidth; c.height = innerHeight; };
    size();
    window.addEventListener("resize", size);

    if (matchMedia("(prefers-reduced-motion:reduce)").matches) {
      return () => window.removeEventListener("resize", size);
    }

    function burst(px, py, n, sp) {
      for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + (Math.random() - 0.5) * 2.2;
        const v = (0.6 + Math.random() * 2.6) * sp;
        P.push({
          x: px + (Math.random() - 0.5) * 10, y: py,
          vx: Math.cos(a) * v, vy: Math.sin(a) * v - 0.6,
          r: 7 + Math.random() * 8, e: EM[(Math.random() * EM.length) | 0], l: 0, m: 30 + Math.random() * 34,
        });
      }
      if (!run) { run = true; raf = requestAnimationFrame(tick); }
    }

    function tick() {
      x.clearRect(0, 0, c.width, c.height);
      for (let i = P.length - 1; i >= 0; i--) {
        const p = P[i];
        p.l++;
        const t = p.l / p.m;
        if (t >= 1) { P.splice(i, 1); continue; }
        p.x += p.vx + Math.sin(p.l / 5 + i) * 0.5;
        p.y += p.vy; p.vy -= 0.04; p.vx *= 0.97;
        x.globalAlpha = 1 - t * t; x.font = `${p.r * 2 * (1 - t * 0.4)}px serif`; x.textAlign = "center"; x.textBaseline = "middle"; x.fillText(p.e, p.x, p.y); x.globalAlpha = 1;
      }
      if (P.length) raf = requestAnimationFrame(tick);
      else { run = false; x.clearRect(0, 0, c.width, c.height); }
    }

    const down = (e) => { if (e.target.closest?.(SEL)) burst(e.clientX, e.clientY, 36, 1.2); };
    const move = (e) => {
      if (e.pointerType === "touch") return;
      const t = e.target.closest && e.target.closest(SEL);
      if (t && Date.now() - last > 40) { last = Date.now(); burst(e.clientX, e.clientY, 2, 0.7); }
    };
    document.addEventListener("pointerdown", down, true);
    document.addEventListener("pointermove", move);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
      document.removeEventListener("pointerdown", down, true);
      document.removeEventListener("pointermove", move);
    };
  }, []);

  return <canvas id="fx" ref={ref} />;
}

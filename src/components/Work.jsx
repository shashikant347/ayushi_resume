import { useState } from "react";
import Reveal from "./Reveal.jsx";
import WorkCard from "./WorkCard.jsx";
import Lightbox from "./Lightbox.jsx";
import { CATS, ITEMS } from "../data.js";

export default function Work() {
  const [cat, setCat] = useState("all");
  const [open, setOpen] = useState(null);

  const visible = ITEMS.filter((it) => cat === "all" || it.cat === cat);

  return (
    <section id="work">
      <Reveal as="h2">Social media <span className="grad">work</span></Reveal>
      <Reveal as="p" className="sub">
        Posters, videos, ad campaigns and reports, all in one place. Tap anything to see it full size.
      </Reveal>
      <Reveal className="tabs">
        {CATS.map(([id, label]) => (
          <button key={id} className={`tab${cat === id ? " on" : ""}`} onClick={() => setCat(id)}>
            {label}
          </button>
        ))}
      </Reveal>
      <div className="grid">
        {visible.map((it, i) => (
          <WorkCard key={`${cat}-${it.src}`} item={it} index={i} onOpen={setOpen} />
        ))}
      </div>
      <Lightbox item={open} onClose={() => setOpen(null)} />
    </section>
  );
}

import { LAB } from "../data.js";

export default function WorkCard({ item, index, onOpen }) {
  const onMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`;
  };
  const onLeave = (e) => { e.currentTarget.style.transform = ""; };

  let media;
  if (item.type === "img") {
    media = <img loading="lazy" alt={item.title} src={item.src} />;
  } else if (item.type === "loop") {
    media = <video src={item.src} poster={item.poster} autoPlay muted loop playsInline />;
  } else {
    media = <video src={`${item.src}#t=0.1`} poster={item.poster} preload="metadata" muted playsInline />;
  }

  return (
    <div
      className={`card${item.type === "video" ? " vid" : ""}`}
      style={{ animationDelay: `${index * 60}ms` }}
      onClick={() => onOpen(item)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <span className="badge">{LAB[item.cat]}</span>
      {media}
      <div className="cap">
        <b>{item.title}</b>
        <span>{item.client}</span>
      </div>
    </div>
  );
}

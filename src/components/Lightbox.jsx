import { useEffect } from "react";

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [item, onClose]);

  return (
    <div className={`lb${item ? " on" : ""}`} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <button aria-label="Close" onClick={onClose}>×</button>
      <div>
        {item && (item.type === "img" ? (
          <img alt="" src={item.src} />
        ) : (
          <video src={item.src} controls autoPlay playsInline loop={item.type === "loop"} style={{ maxHeight: "80vh" }} />
        ))}
      </div>
      <p>{item ? `${item.title} · ${item.client}` : ""}</p>
    </div>
  );
}

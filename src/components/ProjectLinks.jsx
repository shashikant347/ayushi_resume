import Reveal from "./Reveal.jsx";
import { LINK_GROUPS, linkKind } from "../data.js";

export default function ProjectLinks() {
  return (
    <section id="links">
      <Reveal as="h2">Project <span className="grad">links</span></Reveal>
      <Reveal as="p" className="sub">
        Live posts, reels, pages and creatives I’ve worked on. Each button opens in a new tab.
      </Reveal>
      <div className="lgrid">
        {LINK_GROUPS.map(([icon, title, subtitle, urls]) => {
          const counts = {};
          return (
            <Reveal key={title} className="lg">
              <div style={{ fontSize: "1.8rem" }}>{icon}</div>
              <h3>{title}</h3>
              <small>{subtitle}</small>
              <div className="chips">
                {urls.map((u) => {
                  const k = linkKind(u);
                  counts[k] = (counts[k] || 0) + 1;
                  return (
                    <a key={u} className="chip" target="_blank" rel="noopener noreferrer" href={u}>
                      {k}{urls.length > 1 ? ` ${counts[k]}` : ""} ↗
                    </a>
                  );
                })}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

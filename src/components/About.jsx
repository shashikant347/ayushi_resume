import Reveal from "./Reveal.jsx";
import { SKILL_CARDS } from "../data.js";

export default function About() {
  return (
    <section id="about">
      <Reveal as="h2">What I <span className="grad">do</span></Reveal>
      <Reveal as="p" className="sub">Search, paid media and social content, tied together by numbers I can show.</Reveal>
      <div className="cgrid">
        {SKILL_CARDS.map(([icon, title, text]) => (
          <Reveal key={title} className="cc">
            <div style={{ fontSize: "1.8rem" }}>{icon}</div>
            <b>{title}</b>
            <small style={{ marginTop: 6 }}>{text}</small>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import useTyped from "../hooks/useTyped.js";
import Stat from "./Stat.jsx";
import { ITEMS, ROLES, SKILLS_MARQUEE } from "../data.js";

export default function Hero() {
  const typed = useTyped(ROLES);

  const marquee = [...SKILLS_MARQUEE, ...SKILLS_MARQUEE];

  return (
    <section className="hero" id="top">
      <span className="tag"><i></i>Open to new opportunities</span>
      <h1>Hi, I’m <span className="grad">Ayushi Verma</span></h1>
      <div className="role">
        Digital Marketing Professional · <b>{typed}</b><span className="caret"></span>
      </div>
      <p className="lead">
        I’m a digital marketer with three years of hands-on work across search, social and paid media. I plan SEO
        strategies, build backlinks, run Meta and Google Ads, create AI-assisted content and turn the numbers into
        clear reports. Keyword research and competitor analysis sit behind every campaign I run.
      </p>
      <div className="btns">
        <a className="btn p" href="#work">View my work</a>
        <a className="btn" href="#contact">Get in touch</a>
      </div>
      <div className="stats">
        <Stat n={3} suffix="+" label="Years in digital marketing" />
        <Stat n={6} label="Social platforms managed" />
        <Stat n={2} label="Ad platforms: Google & Meta" />
        <Stat n={ITEMS.length} label="Portfolio pieces below" />
      </div>
      <div className="mq">
        <div>
          {marquee.map((s, i) => <span key={i}>{s}</span>)}
        </div>
      </div>
    </section>
  );
}
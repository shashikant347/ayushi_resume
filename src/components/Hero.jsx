import { useState } from "react";
import useTyped from "../hooks/useTyped.js";
import Stat from "./Stat.jsx";
import { ITEMS, ROLES, SKILLS_MARQUEE } from "../data.js";

export default function Hero() {
  const typed = useTyped(ROLES);
  const [shareLabel, setShareLabel] = useState("🔗 Share portfolio");

  const share = () => {
    const url = location.href.split("#")[0];
    if (navigator.share) {
      navigator.share({ title: document.title, url }).catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => setShareLabel("✅ Link copied")).catch(() => {});
    }
  };

  const marquee = [...SKILLS_MARQUEE, ...SKILLS_MARQUEE];

  return (
    <section className="hero" id="top">
      <span className="tag"><i></i>Open to new opportunities</span>
      <span className="hi">hey, I’m</span>
      <h1>Ayushi<br /><em>Verma</em></h1>
      <div className="serp" aria-label="Search result style preview">
        <div className="bar"><span aria-hidden="true">🔍</span><b>{typed}</b><span className="caret"></span></div>
        <div className="res">
          <small>ayushi-verma.portfolio › digital-marketing</small>
          <h3>Ayushi Verma – Digital Marketing Professional</h3>
          <p>SEO, Google and Meta Ads, social media and AI-assisted content. Based in Noida, Delhi NCR.</p>
          <span className="rank">Ranked #1 for your next hire</span>
          <div className="mini" aria-hidden="true">
            {[30, 45, 38, 60, 52, 78, 95].map((h, i) => <i key={i} style={{ height: h + "%", animationDelay: i * 90 + "ms" }} />)}
          </div>
          <span className="fl f1" aria-hidden="true">❤️ 2.4K likes</span>
          <span className="fl f2" aria-hidden="true">📈 Rank #1</span>
          <span className="fl f3" aria-hidden="true">🔔 New lead!</span>
        </div>
      </div>
      <p className="lead">
        I’m a digital marketer with three years of hands-on work across search, social and paid media. I plan SEO
        strategies, build backlinks, run Meta and Google Ads, create AI-assisted content and turn the numbers into
        clear reports. Keyword research and competitor analysis sit behind every campaign I run.
      </p>
      <div className="btns">
        <a className="btn p" href="#work">View my work</a>
        <a className="btn" href="#contact">Get in touch</a>
        <button className="btn" onClick={share}>{shareLabel}</button>
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

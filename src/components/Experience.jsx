import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="exp">
      <Reveal as="h2">Experience</Reveal>
      <Reveal as="p" className="sub">Where I’ve been putting these skills to work.</Reveal>
      <div className="tl">
        <Reveal className="job">
          <h3>Social Media Manager</h3>
          <div className="meta">Corporates Group Of Companies · Virtual · Part-time</div>
          <p>I look after the group’s social presence from content to conversation:</p>
          <ul>
            <li>Designing banners, videos, articles and company profile material</li>
            <li>Publishing across Facebook, Instagram, Threads, X, YouTube and LinkedIn</li>
            <li>Replying to audience questions and comments</li>
            <li>Running Meta Ads campaigns and extending reach with Google Ads</li>
            <li>Keeping reports, trackers and graphs current for the team</li>
          </ul>
        </Reveal>
        <Reveal className="job">
          <h3>SEO Executive</h3>
          <div className="meta">Wagman Digital · Virtual</div>
          <p>I spent over two years helping client websites get found and get leads:</p>
          <ul>
            <li><b>SEO</b><small>On-page, off-page and technical work to lift organic visibility</small></li>
            <li><b>Google Ads</b><small>Search and Display campaigns built and tuned for performance</small></li>
            <li><b>Meta Ads</b><small>Targeted Facebook and Instagram campaigns</small></li>
            <li><b>Social media</b><small>Content and engagement across several platforms</small></li>
            <li><b>Google Analytics</b><small>Tracking results and finding what to improve</small></li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

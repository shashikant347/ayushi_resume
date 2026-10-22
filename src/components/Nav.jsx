const LINKS = [
  ["#about", "About"],
  ["#exp", "Experience"],
  ["#work", "Work"],
  ["#links", "Links"],
  ["#contact", "Contact"],
];

export default function Nav() {
  return (
    <nav>
      <a className="logo" href="#top">AV<span>.</span></a>
      <div className="links">
        {LINKS.map(([href, label]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </div>
    </nav>
  );
}

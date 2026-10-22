import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <section id="contact">
      <Reveal as="h2">Let’s <span className="grad">connect</span></Reveal>
      <Reveal as="p" className="sub">Have a brand to grow? I’d love to hear about it.</Reveal>
      <div className="cgrid">
        <Reveal
          as="a"
          className="cc"
          href="https://www.linkedin.com/in/ayushi-verma-b5346a13a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <small>LinkedIn</small><b>View my LinkedIn profile ↗</b>
        </Reveal>
        <Reveal as="a" className="cc" href="mailto:ayushiv66@gmail.com">
          <small>Email</small><b>ayushiv66@gmail.com</b>
        </Reveal>
        <Reveal as="a" className="cc" href="tel:+919667590441">
          <small>Phone</small><b>+91 96675 90441</b>
        </Reveal>
        <Reveal className="cc">
          <small>Based in</small><b>Noida, Delhi NCR</b>
        </Reveal>
      </div>
    </section>
  );
}

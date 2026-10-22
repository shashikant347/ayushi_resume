import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Work from "./components/Work.jsx";
import ProjectLinks from "./components/ProjectLinks.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import FireCanvas from "./components/FireCanvas.jsx";

export default function App() {
  return (
    <>
      <div className="blob b1"></div>
      <div className="blob b2"></div>
      <div className="blob b3"></div>
      <CursorGlow />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Work />
      <ProjectLinks />
      <Contact />
      <Footer />
      <FireCanvas />
    </>
  );
}

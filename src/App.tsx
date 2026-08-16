import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import ResumeSection from "./sections/ResumeSection";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Sync active section on scroll
  useEffect(() => {
    const sections = ["home", "about", "skills", "experience", "projects", "education", "resume", "contact"];
    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-45% 0px -45% 0px" // Triggers when section is centered in viewport
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach(obs => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  // Track mouse coordinates for premium radial glow background effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-900 dark:bg-obsidian-900 dark:text-gray-100 transition-colors duration-300 font-sans overflow-x-hidden">
      {/* Dynamic mouse-following background glow */}
      <div className="radial-glow pointer-events-none fixed inset-0 z-10" />

      {/* Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={handleScrollTo} />

      {/* Main Sections */}
      <main className="relative z-20">
        <Hero
          onViewProjects={() => handleScrollTo("projects")}
          onViewResume={() => handleScrollTo("resume")}
        />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

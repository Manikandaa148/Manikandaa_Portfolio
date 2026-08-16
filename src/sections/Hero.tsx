import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../components/Icons";
import { personalInfo } from "../data/profileData";


interface HeroProps {
  onViewProjects: () => void;
  onViewResume: () => void;
}

export default function Hero({ onViewProjects, onViewResume }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Auto-rotating title card
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex(prev => (prev + 1) % personalInfo.titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Neural Network animated background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const maxParticles = Math.min(60, Math.floor((width * height) / 20000));
    const connectionDistance = 120;
    let mouse = { x: -1000, y: -1000, radius: 150 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Push away slightly from mouse
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x += (dx / dist) * force * 1.5;
          this.y += (dy / dist) * force * 1.5;
        }
      }

      draw(isDark: boolean) {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "rgba(6, 182, 212, 0.6)" : "rgba(59, 130, 246, 0.5)";
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.classList.contains("dark");

      particles.forEach(p => {
        p.update();
        p.draw(isDark);
      });

      // Connect nodes
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark
              ? `rgba(6, 182, 212, ${alpha})`
              : `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gray-50 dark:bg-obsidian-900 grid-lines"
    >
      {/* Neural net background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Radial glow background effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-blue/10 dark:bg-cyber-cyan/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Intro Tag */}
        <div className="inline-flex items-center space-x-2 bg-cyber-cyan/10 text-cyber-cyan dark:text-cyan-400 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border border-cyber-cyan/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
          <span>Actively Seeking Entry-Level Opportunities</span>
        </div>

        {/* Full Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold tracking-tight text-gray-900 dark:text-white leading-none">
          {personalInfo.name}
        </h1>

        {/* Dynamic Title Slider */}
        <div className="h-12 sm:h-16 flex items-center justify-center overflow-hidden mb-6">
          <div className="text-xl sm:text-3xl md:text-4xl font-mono font-bold text-gray-700 dark:text-gray-300">
            <span>Specializing in </span>
            <span className="text-cyber-cyan dark:text-cyber-cyan transition-all duration-300">
              {personalInfo.titles[currentTitleIndex]}
            </span>
          </div>
        </div>

        {/* Quick Statement */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10 font-sans font-medium">
          M.Sc. Data Science graduate with a strong statistical foundation (B.Sc. Statistics). Experienced in translating raw data inputs into operational machine learning pipelines, structured databases, and interactive analytics.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onViewProjects}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyber-cyan to-cyber-blue hover:from-cyber-blue hover:to-cyber-cyan text-white font-semibold rounded-lg shadow-lg hover:shadow-cyber-cyan/20 transition-all flex items-center justify-center space-x-2 group"
          >
            <span>View Projects</span>
            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onViewResume}
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-obsidian-800 border border-gray-300 dark:border-obsidian-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-obsidian-700/50 font-semibold rounded-lg transition-all flex items-center justify-center space-x-2"
          >
            <Download className="h-5 w-5" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Quick Contacts */}
        <div className="flex items-center justify-center space-x-6">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A66C2] hover:scale-110 transition-transform duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#24292F] dark:text-white hover:scale-110 transition-transform duration-200"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-[#EA4335] hover:scale-110 transition-transform duration-200"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

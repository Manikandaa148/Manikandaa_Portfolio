import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./Icons";

import { personalInfo } from "../data/profileData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-white dark:bg-obsidian-900 border-t border-gray-200 dark:border-obsidian-800 transition-colors py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="absolute -top-16 left-1/2 -translate-x-1/2 p-3 bg-white dark:bg-obsidian-800 rounded-full border border-gray-200 dark:border-obsidian-700 shadow-md hover:bg-gray-50 dark:hover:bg-obsidian-700 hover:text-cyber-cyan hover:-translate-y-1 transition-all duration-300"
          aria-label="Back to Top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>

        <div className="flex justify-center space-x-6 mb-6">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A66C2] hover:scale-110 transition-transform duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#24292F] dark:text-white hover:scale-110 transition-transform duration-200"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-[#EA4335] hover:scale-110 transition-transform duration-200"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <p className="text-gray-900 dark:text-gray-300 font-medium mb-2">
          {personalInfo.name} — Data Scientist & AI/ML Engineer
        </p>
        
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        
        <p className="text-gray-400 dark:text-gray-500 text-xs font-mono">
          Built with React &bull; TypeScript &bull; Tailwind CSS &bull; Framer Motion
        </p>
      </div>
    </footer>
  );
}

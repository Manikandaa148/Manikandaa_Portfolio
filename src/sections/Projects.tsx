import { useState } from "react";
import { ExternalLink, ArrowUpRight, Search } from "lucide-react";
import { GithubIcon as Github } from "../components/Icons";
import { projectsData } from "../data/projectsData";
import type { ProjectItem } from "../data/projectsData";

import ProjectModal from "../components/ProjectModal";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Machine Learning & AI", "Data Engineering & ETL", "Data Analytics & BI"];

  // Filter projects by category and query string
  const filteredProjects = projectsData.filter(proj => {
    const matchesCategory = activeCategory === "All" || proj.category === activeCategory;
    const matchesSearch =
      proj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-obsidian-900 grid-lines transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-cyber-cyan mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Explore a curated selection of projects demonstrating end-to-end ML model design, ETL logging pipelines, and visual analytics dashboards.
          </p>
        </div>

        {/* Filter controls and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                }}
                className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-cyber-cyan/15 text-cyber-cyan border-cyber-cyan/40 shadow-sm"
                    : "bg-white dark:bg-obsidian-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-obsidian-700 hover:border-cyber-cyan/35"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:max-w-xs">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Search tech or project..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-obsidian-700 rounded-lg bg-white dark:bg-obsidian-800 placeholder-gray-400 text-sm text-gray-900 dark:text-white focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan focus:outline-none"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between bg-white dark:bg-obsidian-800 rounded-2xl border border-gray-200/70 dark:border-obsidian-800/80 hover:border-cyber-cyan/20 dark:hover:border-cyber-cyan/25 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="h-1.5 w-full bg-gradient-to-r from-cyber-cyan to-cyber-blue opacity-80" />

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header line */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-cyber-cyan uppercase px-2 py-0.5 bg-cyber-cyan/10 dark:bg-cyber-cyan/5 rounded">
                        {project.category}
                      </span>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-gray-400 hover:text-cyber-cyan p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-obsidian-900 transition-colors"
                        aria-label="View Project Details"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Project Title */}
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white mb-3 font-sans hover:text-cyber-cyan cursor-pointer leading-snug"
                    >
                      {project.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-gray-650 dark:text-gray-400 mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-xs font-mono font-medium rounded bg-gray-100 dark:bg-obsidian-900 text-gray-500 dark:text-gray-400 border border-gray-200/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Summary Block */}
                  <div className="border-t border-gray-100 dark:border-obsidian-750/50 pt-4 mt-auto">
                    <div className="grid grid-cols-3 gap-2 text-center text-[11px] sm:text-xs">
                      <div>
                        <span className="block font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider scale-90 mb-0.5">
                          Problem
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 line-clamp-2">
                          {project.problem}
                        </span>
                      </div>
                      <div className="border-x border-gray-100 dark:border-obsidian-750/50 px-1">
                        <span className="block font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider scale-90 mb-0.5">
                          Approach
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 line-clamp-2">
                          {project.approach}
                        </span>
                      </div>
                      <div>
                        <span className="block font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider scale-90 mb-0.5">
                          Result
                        </span>
                        <span className="text-emerald-700 dark:text-emerald-450 font-medium line-clamp-2">
                          {project.result}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="flex border-t border-gray-100 dark:border-obsidian-750/50 bg-gray-50 dark:bg-obsidian-850 p-4 justify-between items-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 text-xs font-extrabold text-white bg-blue-600 border-2 border-white rounded-lg shadow-[0_4px_0_0_#1d4ed8] hover:shadow-[0_2px_0_0_#1d4ed8] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] transition-all cursor-pointer font-sans"
                  >
                    View Case Study
                  </button>

                  <div className="flex items-center space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded bg-white dark:bg-obsidian-800 hover:bg-gray-100 dark:hover:bg-obsidian-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-obsidian-700 hover:text-cyber-cyan transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded bg-white dark:bg-obsidian-800 hover:bg-gray-100 dark:hover:bg-obsidian-700 text-gray-650 dark:text-gray-300 border border-gray-200 dark:border-obsidian-700 hover:text-cyber-cyan transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-450">
              No projects found matching the criteria. Try a different search term or category.
            </p>
          </div>
        )}

        {/* Detailed case study Modal */}
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { X, ExternalLink, Database, Cpu, Compass, CheckCircle } from "lucide-react";
import { GithubIcon as Github } from "../components/Icons";
import type { ProjectItem } from "../data/projectsData";



interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "preprocessing" | "modeling" | "results">("overview");

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  const tabs = [
    { id: "overview" as const, label: "Overview", icon: <Compass className="h-4 w-4" /> },
    { id: "preprocessing" as const, label: "Data & ETL", icon: <Database className="h-4 w-4" /> },
    { id: "modeling" as const, label: "ML & Evaluation", icon: <Cpu className="h-4 w-4" /> },
    { id: "results" as const, label: "Results & Scope", icon: <CheckCircle className="h-4 w-4" /> }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-900/60 backdrop-blur-md transition-opacity">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-white border border-gray-250 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-250 bg-gray-50">
          <div>
            <span className="text-xs font-mono font-bold tracking-wider text-cyber-cyan uppercase px-2.5 py-1 bg-cyber-cyan/10 rounded-md">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-black mt-2.5 font-sans leading-tight">
              {project.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
            aria-label="Close Modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 overflow-x-auto bg-white">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-cyber-cyan text-cyber-cyan bg-cyber-cyan/5"
                  : "border-transparent text-gray-600 hover:text-cyber-cyan hover:bg-gray-50"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-6 bg-white">
          {activeTab === "overview" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Project Description
                </h4>
                <p className="text-black leading-relaxed font-sans text-base sm:text-lg">
                  {project.details.overview}
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <h4 className="text-sm font-bold text-black mb-2">
                  The Problem Solved
                </h4>
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  {project.details.problemStatement}
                </p>
              </div>

              {project.details.dataset && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Dataset Source
                  </h4>
                  <p className="text-black leading-relaxed text-sm font-sans">
                    {project.details.dataset}
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "preprocessing" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Data Cleaning & Pipeline Preprocessing
                </h4>
                <ul className="space-y-3">
                  {project.details.preprocessing.map((step, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-black text-sm sm:text-base">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyber-cyan/15 text-cyber-cyan flex items-center justify-center text-xs font-bold font-mono">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "modeling" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Model Architecture & Engineering Approach
                </h4>
                <ul className="space-y-3">
                  {project.details.modeling.map((step, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-black text-sm sm:text-base">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-2" />
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Evaluation Strategy
                </h4>
                <ul className="space-y-3">
                  {project.details.evaluation.map((step, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-black text-sm sm:text-base">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-blue mt-2" />
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "results" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                <h4 className="text-sm font-bold text-emerald-800 mb-2">
                  Key Metrics & Results
                </h4>
                <p className="text-sm sm:text-base text-black leading-relaxed font-sans font-medium">
                  {project.details.results}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Future Scope & Enhancements
                </h4>
                <ul className="space-y-3">
                  {project.details.futureScope.map((step, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-black text-sm sm:text-base">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-2" />
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-6 border-t border-gray-250 bg-gray-50">
          {/* Tech tags */}
          <div className="hidden sm:flex flex-wrap gap-1.5 max-w-[50%]">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-xs font-mono font-medium rounded bg-gray-200 text-gray-600 border border-gray-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-5 py-2.5 bg-white border border-gray-250 hover:bg-gray-100 text-gray-800 font-semibold rounded-lg text-sm transition-all"
            >
              <Github className="h-4 w-4" />
              <span>View GitHub</span>
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-cyber-cyan to-cyber-blue hover:from-cyber-blue hover:to-cyber-cyan text-white font-semibold rounded-lg text-sm shadow-sm hover:shadow-cyber-cyan/10 transition-all"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

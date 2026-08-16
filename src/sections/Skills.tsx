import { useState } from "react";
import { skillsData } from "../data/profileData";
import { Database, Code, ShieldCheck, BarChart3, Binary, Settings } from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillsData.map(c => c.category)];

  // Get icon representing each category for visual appeal
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return <Code className="h-5 w-5" />;
      case "Machine Learning & Deep Learning":
        return <Binary className="h-5 w-5" />;
      case "Data Engineering":
        return <Database className="h-5 w-5" />;
      case "Model Evaluation & Analytics":
        return <ShieldCheck className="h-5 w-5" />;
      case "Data Visualization & BI":
        return <BarChart3 className="h-5 w-5" />;
      default:
        return <Settings className="h-5 w-5" />;
    }
  };

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-obsidian-900 grid-lines transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-cyber-cyan mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A comprehensive overview of my core competencies, focusing on data science, machine learning models, statistical inference, and software tools.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
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

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-obsidian-800 rounded-xl p-6 border border-gray-200/60 dark:border-obsidian-800 shadow-sm hover:shadow-md hover:border-cyber-cyan/20 transition-all duration-300"
            >
              {/* Card Title */}
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-100 dark:border-obsidian-700/50">
                <div className="p-2.5 bg-cyber-cyan/10 text-cyber-cyan dark:bg-cyber-cyan/5 rounded-lg">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white font-sans">
                  {cat.category}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 text-xs sm:text-sm font-mono font-medium rounded-md bg-gray-50 dark:bg-obsidian-900 border border-gray-200/50 dark:border-obsidian-900 text-gray-700 dark:text-gray-300 hover:border-cyber-cyan/30 dark:hover:border-cyber-cyan/40 hover:text-cyber-cyan transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Calendar, Briefcase, MapPin } from "lucide-react";
import { experienceData } from "../data/profileData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-obsidian-900 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-cyber-cyan mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            My professional background including industry internships and data analytics consulting for government services.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-gray-200 dark:border-obsidian-800 ml-4 sm:ml-6 space-y-12">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10">
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[11px] top-1.5 bg-cyber-cyan text-white p-1 rounded-full border-4 border-white dark:border-obsidian-900 shadow-md">
                <Briefcase className="h-3 w-3" />
              </div>

              {/* Entry Content Card */}
              <div className="bg-gray-50 dark:bg-obsidian-800 rounded-xl p-6 sm:p-8 border border-gray-150 dark:border-obsidian-800/80 hover:border-cyber-cyan/15 dark:hover:border-cyber-cyan/15 hover:shadow-sm transition-all duration-300">
                {/* Meta details */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white font-sans">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-cyber-cyan font-sans mt-0.5">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 font-mono">
                    <span className="flex items-center space-x-1.5">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>{exp.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Job Accomplishments */}
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-6">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="leading-relaxed">
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* Applied Technologies */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
                    Technologies Applied
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs font-mono font-medium rounded bg-white dark:bg-obsidian-900 border border-gray-200/50 dark:border-obsidian-800 text-gray-600 dark:text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Calendar, GraduationCap, MapPin, BookOpen } from "lucide-react";
import { educationData } from "../data/profileData";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-obsidian-900 grid-lines transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-16 h-1 bg-cyber-cyan mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            My academic timeline, detailing coursework and credentials in data science and mathematical statistics.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-obsidian-800 rounded-xl p-6 sm:p-8 border border-gray-200/60 dark:border-obsidian-800 shadow-sm hover:shadow-md hover:border-cyber-cyan/15 dark:hover:border-cyber-cyan/15 flex flex-col justify-between transition-all duration-300"
            >
              {/* Top Section */}
              <div>
                {/* Degree and Institution Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-cyber-cyan/10 text-cyber-cyan dark:bg-cyber-cyan/5 rounded-lg flex-shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight font-sans">
                      {edu.degree}
                    </h3>
                    <p className="text-base font-semibold text-cyber-cyan mt-1 font-sans">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                {/* Meta location and dates */}
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-mono mb-6">
                  <span className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span>{edu.duration}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>{edu.location}</span>
                  </span>
                  {edu.grade && (
                    <span className="px-2.5 py-0.5 rounded bg-cyber-cyan/10 text-cyber-cyan font-bold text-xs sm:text-sm">
                      Grade: {edu.grade}
                    </span>
                  )}
                </div>

                {/* Coursework */}
                <div>
                  <h4 className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                    <BookOpen className="h-3.5 w-3.5 text-cyber-cyan" />
                    <span>Core Coursework</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 text-xs font-mono font-medium rounded bg-gray-50 dark:bg-obsidian-900 border border-gray-200/40 dark:border-obsidian-900 text-gray-650 dark:text-gray-400"
                      >
                        {course}
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

import { GraduationCap, Award, Brain, Code } from "lucide-react";


export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6 text-cyber-cyan" />,
      title: "Strong Educational Foundation",
      description: "Holds an M.Sc. in Data Science and a B.Sc. in Statistics, offering a solid blend of probability theory, statistical computing, and predictive modeling."
    },
    {
      icon: <Brain className="h-6 w-6 text-cyber-cyan" />,
      title: "Practical Machine Learning",
      description: "Hands-on experience developing classical ML classifiers, recommendation engines, and computer vision models (CNNs) using Scikit-learn and TensorFlow."
    },
    {
      icon: <Code className="h-6 w-6 text-cyber-cyan" />,
      title: "Modular Code Design",
      description: "Comfortable writing clean, modular Python and React/JS code. Follows single-responsibility principles for ETL data pipeline construction and analytics interfaces."
    },
    {
      icon: <Award className="h-6 w-6 text-cyber-cyan" />,
      title: "Real-World Experience",
      description: "Practiced skills via structured data internships, working on both commercial business telemetry and large-scale public sector datasets."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-obsidian-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-cyber-cyan mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio text */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-sans font-bold text-gray-900 dark:text-white">
              Data Science Graduate combining mathematical rigor with end-to-end system design.
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
              Hello! I am Manikandaa S, a Data Science professional based in Tiruchirappalli, Tamil Nadu, India. Having completed my B.Sc. in Statistics followed by an M.Sc. in Data Science, I bridges the gap between pure statistical inference and software engineering.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
              My core capability lies in translating complex, raw data streams into decision-ready assets. Whether that is engineering an ETL server-telemetry pipeline, tuning hyperparameters of a random forest model to hit 87% accuracy, or building a Vercel-deployed React dashboard, I aim to create robust, well-documented code.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
              I am actively seeking entry-level roles in **Data Science, Machine Learning Engineering, and Data Analytics** where I can apply my analytical skills, automate pipelines, and help teams build intelligent products.
            </p>
          </div>

          {/* Quick highlights grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-start space-x-4 p-5 bg-gray-50 dark:bg-obsidian-800 rounded-xl border border-gray-100 dark:border-obsidian-800 hover:border-cyber-cyan/30 dark:hover:border-cyber-cyan/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 p-3 bg-cyber-cyan/10 dark:bg-cyber-cyan/5 rounded-lg">
                  {h.icon}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {h.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Download, FileText, ExternalLink } from "lucide-react";

export default function ResumeSection() {
  const resumeVersions = [
    {
      title: "AI / ML Engineer Resume",
      description: "Optimized for Machine Learning Engineering, NLP pipelines, neural networks, and computer vision positions.",
      fileName: "Manikandaa_S_AI_ML_Engineer_Resume.pdf",
      skills: ["TensorFlow", "Scikit-learn", "Keras", "Model Pipelines", "Python"]
    },
    {
      title: "Data Scientist Resume",
      description: "Focused on statistical modeling, EDA, feature engineering, classification, and predictive analytics.",
      fileName: "Manikandaa_S_Data_Scientist_ML_Resume.pdf",
      skills: ["Statistical Inference", "Random Forest", "Logistic Regression", "EDA", "Python"]
    },
    {
      title: "Data Analyst Resume",
      description: "Tailored for business intelligence, ETL logging processes, dashboard reporting, and Excel data products.",
      fileName: "Manikandaa_S_Data_Analyst_Resume.pdf",
      skills: ["SQL (MySQL)", "Power BI", "Pandas", "Advanced Excel", "ETL"]
    }
  ];

  return (
    <section id="resume" className="py-24 bg-white dark:bg-obsidian-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-gray-900 dark:text-white mb-4">
            Resume Portal
          </h2>
          <div className="w-16 h-1 bg-cyber-cyan mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Select and download the specific resume version that matches your active opening. You can view them online or download the PDFs.
          </p>
        </div>

        {/* Portal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resumeVersions.map((resume, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-obsidian-800 rounded-xl p-6 sm:p-8 border border-gray-150 dark:border-obsidian-800 hover:border-cyber-cyan/15 dark:hover:border-cyber-cyan/15 hover:shadow-md flex flex-col justify-between transition-all duration-300"
            >
              {/* Top part */}
              <div>
                {/* Icon & Title */}
                <div className="flex items-center space-x-3.5 mb-5">
                  <div className="p-3 bg-cyber-cyan/10 text-cyber-cyan dark:bg-cyber-cyan/5 rounded-lg flex-shrink-0">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white font-sans leading-tight">
                    {resume.title}
                  </h3>
                </div>

                <p className="text-gray-605 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                  {resume.description}
                </p>

                {/* Subtech keywords */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
                    Key Highlights
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {resume.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 text-xs font-mono font-medium rounded bg-white dark:bg-obsidian-900 border border-gray-200/50 dark:border-obsidian-850 text-gray-600 dark:text-gray-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-150 dark:border-obsidian-750/50">
                <a
                  href={`/resumes/${resume.fileName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-white dark:bg-obsidian-900 border border-gray-200 dark:border-obsidian-700 hover:bg-gray-100 dark:hover:bg-obsidian-750 text-gray-700 dark:text-gray-200 font-semibold rounded-lg text-sm transition-all"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>View Online</span>
                </a>

                <a
                  href={`/resumes/${resume.fileName}`}
                  download={resume.fileName}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-cyber-cyan to-cyber-blue hover:from-cyber-blue hover:to-cyber-cyan text-white font-semibold rounded-lg text-sm shadow-sm hover:shadow-cyber-cyan/10 transition-all"
                >
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

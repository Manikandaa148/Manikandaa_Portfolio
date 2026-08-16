export interface PersonalInfo {
  name: string;
  titles: string[];
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  summary: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  organization: string;
  role: string;
  duration: string;
  location: string;
  points: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  grade?: string;
  coursework: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  link?: string;
}

export const personalInfo: PersonalInfo = {
  name: "MANIKANDAA S",
  titles: [
    "Data Scientist",
    "Machine Learning Engineer",
    "Data Analyst"
  ],
  location: "Tiruchirappalli, Tamil Nadu, India",
  phone: "+91-9445219410",
  email: "manikandaa944@gmail.com",
  github: "https://github.com/Manikandaa148",
  linkedin: "https://linkedin.com/in/manikandaa-s",
  summary: "Data Science graduate specializing in building machine learning systems end-to-end, from data pipelines and model training to integration into working applications. Hands-on experience with classical ML (Scikit-learn) and deep learning (TensorFlow/Keras), achieving up to 87% accuracy on healthcare prediction tasks. Comfortable writing modular, well-structured Python code and organizing ML workflows for maintainability. Strong statistical and data-engineering foundation, built through an M.Sc. in Data Science and hands-on internship experience with real-world government datasets."
};

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: ["Python", "R", "SQL (MySQL)", "JavaScript", "TypeScript"]
  },
  {
    category: "Machine Learning & Deep Learning",
    items: [
      "Scikit-learn", 
      "TensorFlow", 
      "Keras", 
      "Logistic Regression", 
      "Random Forest", 
      "Convolutional Neural Networks (CNN)", 
      "Natural Language Processing (NLP)",
      "Cosine Similarity Matching"
    ]
  },
  {
    category: "Data Engineering",
    items: [
      "ETL Pipelines", 
      "Data Cleaning", 
      "Data Preprocessing", 
      "Feature Engineering", 
      "Pandas", 
      "NumPy"
    ]
  },
  {
    category: "Model Evaluation & Analytics",
    items: [
      "Cross-Validation", 
      "Accuracy", 
      "ROC-AUC", 
      "Confusion Matrix", 
      "Precision & Recall", 
      "F1-Score",
      "Statistical Modeling",
      "Exploratory Data Analysis (EDA)"
    ]
  },
  {
    category: "Data Visualization & BI",
    items: ["Power BI", "Matplotlib", "Seaborn", "Excel (Advanced Pivot Tables/Formulas)"]
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "Jupyter Notebook", "Google Colab", "VS Code", "Vercel", "SPSS"]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    organization: "Analytics Career Connect",
    role: "Data Science Intern",
    duration: "Apr 2024 – May 2026",
    location: "Remote",
    points: [
      "Performed detailed data cleaning, preprocessing, and exploratory data analysis (EDA) on real-world datasets using Python, Pandas, and NumPy.",
      "Built interactive Power BI dashboards and custom data visualizations using Matplotlib and Seaborn to track business KPIs and uncover actionable trends.",
      "Applied statistical analysis and supervised machine learning techniques (such as logistic regression and random forest classification) to extract business insights.",
      "Generated detailed reports translating complex technical ML findings into stakeholder-ready summaries to support data-driven decisions."
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Power BI", "Matplotlib", "Seaborn"]
  },
  {
    organization: "District Statistical Office",
    role: "Government Data Analyst Intern",
    duration: "May 2024 – Jun 2024",
    location: "Tiruchirappalli, Tamil Nadu",
    points: [
      "Completed a government data analysis internship focusing on structured datasets across 10+ public programs.",
      "Applied statistical inference and data reconciliation workflows to ensure accuracy of government records and reports.",
      "Presented analytical findings and reports translating metrics into clear summaries for district administrators."
    ],
    technologies: ["SPSS", "Excel", "Data Reconciliation", "Statistical Analysis", "Reporting"]
  }
];

export const educationData: EducationItem[] = [
  {
    institution: "Bharathidasan University",
    degree: "M.Sc. Data Science",
    duration: "2024 – 2026",
    location: "Tiruchirappalli, Tamil Nadu",
    coursework: ["Machine Learning", "Deep Learning", "Big Data Analytics", "Data Mining", "Natural Language Processing (NLP)", "Statistical Computing"]
  },
  {
    institution: "St. Joseph's College",
    degree: "B.Sc. Statistics",
    duration: "2021 – 2024",
    location: "Tiruchirappalli, Tamil Nadu",
    grade: "77.32%",
    coursework: ["Probability Theory", "Statistical Inference", "Operations Research", "Statistical Methods"]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    name: "Data Analytics using Python",
    issuer: "NPTEL / Coursera / University (Verified Coursework)"
  },
  {
    name: "Power BI - SkillNation",
    issuer: "SkillNation"
  },
  {
    name: "SPSS Certification & Data Mining Workshop",
    issuer: "St. Joseph's College / Partner Organization"
  },
  {
    name: "Fundamentals of Python",
    issuer: "Guvi / Coursera / Technical Academy"
  }
];

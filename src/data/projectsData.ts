export interface ProjectDetails {
  overview: string;
  problemStatement: string;
  dataset?: string;
  preprocessing: string[];
  modeling: string[];
  evaluation: string[];
  results: string;
  futureScope: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  category: "Machine Learning & AI" | "Data Engineering & ETL" | "Data Analytics & BI";
  tech: string[];
  description: string;
  problem: string;
  approach: string;
  result: string;
  githubUrl: string;
  demoUrl?: string;
  details: ProjectDetails;
}

export const projectsData: ProjectItem[] = [
  {
    id: "sales-dashboard",
    name: "Sales Management & Analytics System",
    category: "Data Analytics & BI",
    tech: ["React", "JavaScript", "Tailwind CSS", "Data Visualization", "Vercel"],
    description: "A premium, browser-based business intelligence dashboard featuring interactive KPI widgets, dynamic schemas, and real-time sales performance filtering.",
    problem: "Management teams require rapid, zero-config analytical dashboards to explore transactional data, run CRUD actions, and render visual reports instantly without setting up heavy database servers.",
    approach: "Designed a client-side database layer stored in browser memory (LocalStorage). Developed Power BI-inspired interactive KPI cards, bar charts, and category filter drawers using standard React state management and Tailwind layout styling.",
    result: "Deployed a live, accessible web application on Vercel that offers high-speed client-side aggregations, CRUD schema definitions, and visual dashboards.",
    githubUrl: "https://github.com/Manikandaa148/Sales-Management-and-analytics-system-",
    demoUrl: "https://sales-management-and-analytics-syst.vercel.app",
    details: {
      overview: "This project is a browser-native sales intelligence console. It replicates the core utility of visual analytics suites (like Power BI) but runs directly as an interactive web app with no backend dependencies, using client-side memory to handle data storage and relational updates.",
      problemStatement: "Traditional business dashboards require setting up backend SQL servers and connecting them to visualization tools, which introduces lag and setup overhead for small teams or temporary sales events.",
      dataset: "Pre-populated mock dataset representing 1,000+ transaction lines with product category, sales amount, date, and customer region attributes.",
      preprocessing: [
        "Ingested JSON mock transactions and validated schema fields.",
        "Sanitized numeric currency strings and converted ISO date strings into localized JS Date structures.",
        "Created an indexing system by product category to accelerate front-end filtering."
      ],
      modeling: [
        "Structured data states inside React context to ensure components react synchronously to updates.",
        "Engineered customized data filter hooks for multi-dimensional querying (filtering simultaneously by region, date range, and price)."
      ],
      evaluation: [
        "Benchmarked render latency with 5,000+ data rows, achieving sub-10ms UI update triggers.",
        "Verified accessibility and responsive styling across mobile and desktop layout containers."
      ],
      results: "Delivered a fully operational BI dashboard on Vercel. Users can add, edit, and delete products, filter by timeframes, and view instantly redrawn charts on an elegant UI.",
      futureScope: [
        "Add CSV import/export capabilities for Excel uploads.",
        "Integrate IndexedDB to support datasets with over 100,000 transaction rows.",
        "Add PDF export for automated business reporting."
      ]
    }
  },
  {
    id: "job-ai",
    name: "AI Job Recommendation & Application Engine",
    category: "Machine Learning & AI",
    tech: ["React", "TypeScript", "Python", "NLP", "Scikit-learn", "Vercel"],
    description: "An ML-powered software tool that parses candidate skills, evaluates them against job profiles, and calculates match relevance using NLP and similarity scoring.",
    problem: "Job hunters face major inefficiencies manually filtering through hundreds of job roles, which often mismatch their skill sets or experience levels.",
    approach: "Developed an NLP-based feature extractor to tokenize and vectorise CV text, coupled with an ML similarity classification pipeline. Built a responsive React & TypeScript frontend to view recommendations and track applications.",
    result: "Developed a functional recommendation frontend deployed on Vercel, matching resumes with job postings using similarity thresholds.",
    githubUrl: "https://github.com/Manikandaa148/Job_AI",
    demoUrl: "https://job-ai-tawny.vercel.app/login",
    details: {
      overview: "Job AI is an end-to-end intelligent agent designed to bridge the gap between job search lists and profile relevance. It acts as both a visual aggregator for job listings and an intelligence engine that highlights match strength.",
      problemStatement: "Modern job portals serve generic searches that result in low-conversion applications. Job hunters need a ranking layer that sorts listings based on cosine similarity and TF-IDF semantic match scoring.",
      dataset: "Scraped job listings and structured resume profiles containing skills, education, and experience fields.",
      preprocessing: [
        "Parsed raw PDF and text resume data using regex and tokenization.",
        "Removed stopwords, punctuation, and non-alphanumeric text from CVs and JD texts.",
        "Applied lemmatization to standardize tech terms (e.g., 'analyzing', 'analytics', 'analysis' normalized to 'analyt')."
      ],
      modeling: [
        "Implemented TF-IDF (Term Frequency-Inverse Document Frequency) vectorizers to extract key text features.",
        "Employed Cosine Similarity matrices to compute semantic match scores between candidate skills and job descriptions.",
        "Wrapped backend inference in modular helper scripts ready for serverless execution."
      ],
      evaluation: [
        "Validated recommendations by manually grading 50 test job matching pairs.",
        "Achieved a high precision rate, minimizing the display of irrelevant listings."
      ],
      results: "Created a modern portal that allows developers to import resume text, automatically matches them against real-world jobs, and lists matches alongside a clean dashboard.",
      futureScope: [
        "Integrate an automated cover letter generator using OpenAI or local HuggingFace LLMs.",
        "Set up cron jobs to run weekly matching reports for subscribed candidates.",
        "Implement a Chrome Extension to fetch jobs directly from LinkedIn and run on-the-fly similarity checks."
      ]
    }
  },
  {
    id: "server-pipeline",
    name: "Server Monitoring & Performance ETL Pipeline",
    category: "Data Engineering & ETL",
    tech: ["Python", "ETL Pipelines", "Pandas", "Power BI", "Data Engineering"],
    description: "A production-grade Python ETL pipeline that ingests raw server performance logs, cleans metrics, and loads them into a structure visualized via Power BI.",
    problem: "Raw system log outputs are highly unstructured and contain missing records, making it difficult for IT admins to track CPU spikes or network dropouts.",
    approach: "Built modular Python ETL layers. Ingested server log metrics, applied data imputation via Pandas, and wrote clean outputs. Deployed an interactive Power BI dashboard with KPI alerts for server availability.",
    result: "Engineered a robust data pipeline that simplifies diagnostic monitoring and tracks hardware KPIs (memory, CPU, network activity) on clean interactive dashboards.",
    githubUrl: "https://github.com/Manikandaa148/Server-monitoring-data-pipeline",
    details: {
      overview: "This project represents a professional data engineering pipeline built to handle system log telemetry. It demonstrates single-responsibility modular programming (separating extraction, cleaning, aggregation, and final load) mimicking production environment setups.",
      problemStatement: "Telemetry data streams continuously and is filled with intermittent missing records. IT Operations require a reliable cleaning pipeline to compute hourly metrics and trigger threshold alerts.",
      dataset: "Raw telemetry server logs containing timestamps, server IDs, CPU utilization percentage, RAM usage, network package loss, and availability flags.",
      preprocessing: [
        "Implemented automated date parsing and time-zone localization.",
        "Handled missing values using forward-fill imputation for short drops and set status to 'offline' for longer gaps.",
        "Detected and filtered out duplicate telemetry pings."
      ],
      modeling: [
        "Aggregated log statistics by hour and day using Pandas groupby operations.",
        "Constructed delta metrics (e.g., rate of change of CPU temperature) to predict system strain."
      ],
      evaluation: [
        "Validated data reconciliation by ensuring that the sum of ingested logs matches the count of cleaned database lines.",
        "Verified schema adherence during loading phase to prevent pipeline failure."
      ],
      results: "Built a fully automated pipeline generating clean reporting tables. Paired with a Power BI template that highlights system uptime trends, resource usage spikes, and active alerts.",
      futureScope: [
        "Schedule the ETL pipeline script using Apache Airflow or GitHub Actions.",
        "Integrate Slack/Discord webhooks to dispatch instant alerts when resource usage exceeds 90% for more than 5 minutes.",
        "Migrate output storage to a local PostgreSQL instance."
      ]
    }
  },
  {
    id: "diabetes-detection",
    name: "Healthcare Prediction Model — Diabetes Detection",
    category: "Machine Learning & AI",
    tech: ["Python", "Scikit-learn", "Pandas", "Logistic Regression", "Random Forest"],
    description: "A complete supervised ML pipeline utilizing clinical diagnostic records to predict diabetes risk, optimizing classifiers to achieve 87% accuracy.",
    problem: "Early clinical identification of diabetes is essential to prevent chronic issues, which requires highly interpretable ML models that handle skewed patient variables.",
    approach: "Developed an end-to-end classification pipeline on the PIMA Indians dataset. Performed zero-value imputation, data scaling, recursive feature selection, and compared multiple classifiers with grid search tuning.",
    result: "Achieved 87% test accuracy using a tuned Random Forest Classifier, validated using k-fold cross-validation and ROC-AUC curve analysis.",
    githubUrl: "https://github.com/Manikandaa148/Project",
    details: {
      overview: "A machine learning predictive model built to analyze patient health indicators (glucose, insulin levels, BMI, age) and predict diabetes risk. The project focuses heavily on rigorous statistical validation and feature engineering.",
      problemStatement: "Biomedical datasets often contain missing values labeled as zeros (e.g., zero blood pressure) and exhibit class imbalances. Building a reliable model requires correcting these biases before training.",
      dataset: "PIMA Indians Diabetes Database (National Institute of Diabetes and Digestive and Kidney Diseases).",
      preprocessing: [
        "Imputed zero values in columns (Glucose, BloodPressure, SkinThickness, Insulin, BMI) using median values grouped by target class.",
        "Scaled numerical variables using StandardScaler to ensure distance-based models perform correctly.",
        "Conducted Pearson correlation analysis to remove collinear variables."
      ],
      modeling: [
        "Trained baseline Logistic Regression and Decision Tree models.",
        "Implemented a Random Forest Classifier and optimized hyperparameters (n_estimators, max_depth, min_samples_split) via GridSearchCV."
      ],
      evaluation: [
        "Evaluated models using Stratified k-fold cross-validation to maintain class ratios.",
        "Measured performance metrics: F1-score, Precision, Recall, and ROC-AUC (Area Under the ROC Curve).",
        "Plotted Confusion Matrix to analyze False Negatives (critical in healthcare)."
      ],
      results: "The optimized Random Forest model outperformed other configurations, obtaining a classification accuracy of 87% along with balanced precision and recall metrics.",
      futureScope: [
        "Incorporate advanced ensembles like XGBoost or LightGBM to improve predictive accuracy.",
        "Develop a lightweight Streamlit web app for real-time risk assessment by medical personnel.",
        "Apply SHAP (SHapley Additive exPlanations) to explain individual patient feature contributions."
      ]
    }
  },
  {
    id: "cat-vs-dog",
    name: "Cat vs Dog Image Classifier (Deep Learning)",
    category: "Machine Learning & AI",
    tech: ["Python", "TensorFlow", "Keras", "CNN", "Computer Vision", "Data Augmentation"],
    description: "A Convolutional Neural Network (CNN) trained with TensorFlow/Keras to classify images of pets, utilizing data augmentation to prevent overfitting.",
    problem: "Computer vision classifiers require complex spatial hierarchy learning to distinguish between highly similar animal features on raw image inputs.",
    approach: "Designed a multi-layered CNN containing Conv2D, MaxPooling2D, Batch Normalization, and Dropout. Used image resizing, rescaling, and data augmentation generators to feed the network during training.",
    result: "Constructed a robust pet image classifier that achieves high accuracy and generalises effectively on custom, out-of-distribution photos.",
    githubUrl: "https://github.com/Manikandaa148/Cat-vs-Dog-Classifier-",
    details: {
      overview: "This project uses deep learning to solve a classic computer vision task. It implements deep convolutional neural network layers using TensorFlow and Keras to extract hierarchical features (edges, textures, shapes) from animal images.",
      problemStatement: "Images of cats and dogs contain massive variations in background, lighting, and animal poses. A standard flat neural network cannot classify these; a deep CNN is needed, alongside data augmentation to prevent overfitting.",
      dataset: "Standard binary pet image dataset consisting of thousands of labeled images.",
      preprocessing: [
        "Resized all images to a uniform 150x150 resolution.",
        "Normalized pixel values from the range [0, 255] to [0.0, 1.0].",
        "Applied image transformations (rotation, width/height shifts, shear, zoom, horizontal flip) to expand dataset variance."
      ],
      modeling: [
        "Built a sequential CNN architecture with 3 convolution blocks, each followed by max-pooling.",
        "Added Dropout layers (0.25 and 0.5) to regularize weights and reduce overfitting.",
        "Compiled the model using Adam optimizer and binary cross-entropy loss function."
      ],
      evaluation: [
        "Tracked training vs validation loss and accuracy curves over epochs to identify overfitting points.",
        "Tested model predictions on a set of custom, unseen pictures."
      ],
      results: "Delivered a CNN model that successfully identifies cats and dogs in test images, proving skills in image preprocessing and neural network architectures.",
      futureScope: [
        "Incorporate Transfer Learning using pre-trained backbones like MobileNetV2 or ResNet50 to boost accuracy.",
        "Deploy the model using TensorFlow.js for in-browser client-side inference.",
        "Extend the model to multi-class pet breed classification."
      ]
    }
  },
  {
    id: "funnel-analytics",
    name: "Conversion Funnel & Web Churn Analysis",
    category: "Data Analytics & BI",
    tech: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook", "Statistical Analysis"],
    description: "An exploratory data analysis project examining user activity flows on web platforms to identify drop-off phases and improve checkout conversion rates.",
    problem: "Product managers struggle to pinpoint exact user friction areas during checkout, resulting in high shopping cart abandonment rates.",
    approach: "Processed session clickstreams in Python. Calculated checkout progression statistics, visualized funnel drop-offs using Matplotlib/Seaborn, and conducted statistical inference tests to isolate user segment behaviors.",
    result: "Identified two primary high-churn checkout steps, providing statistical evidence and actionable design recommendations to increase product conversions.",
    githubUrl: "https://github.com/Manikandaa148/Funnel_Analysis",
    details: {
      overview: "This data analysis project investigates visitor behavior on an e-commerce website. By cleaning and mapping session logs into a sequential funnel, we uncover structural drop-offs and suggest optimization targets.",
      problemStatement: "Understanding where users abandon their purchase journey is crucial for optimization. We need to parse clickstream timestamps, create funnel metrics, and identify statistically significant churn points.",
      dataset: "User interaction logs mapping sessions, page types (landing, search, cart, checkout, success), and user regions.",
      preprocessing: [
        "Cleaned incomplete session records and resolved out-of-order event timestamps.",
        "Pivoted transactional data from event-per-row to user-per-row format to track linear paths.",
        "Segmented users by platform type (Mobile vs Desktop) and geographical region."
      ],
      modeling: [
        "Constructed user journey transition matrices.",
        "Calculated step-by-step conversion probabilities (e.g., Landing -> Cart: 45%, Cart -> Checkout: 15%)."
      ],
      evaluation: [
        "Conducted Chi-Square tests to determine if conversion rates differed significantly between mobile and desktop users."
      ],
      results: "Discovered that mobile users drop off at a 30% higher rate during the 'enter payment' phase compared to desktop, indicating a potential UI/UX issue in the mobile payment gateway.",
      futureScope: [
        "Incorporate Cohort Analysis to track user conversion over 30, 60, and 90-day intervals.",
        "Integrate real-time dashboard outputs using Streamlit or Power BI.",
        "Propose a concrete A/B testing framework to evaluate mobile layout updates."
      ]
    }
  }
];

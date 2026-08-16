# Manikandaa S — Data Science & AI/ML Portfolio Website

This is a premium, high-performance, recruiter-focused personal portfolio website. It is built using **React + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide Icons**. It positions you as an entry-level Data Science / AI / Machine Learning professional by showing structured case studies, technical skill tag groups, and downloadable tailored resumes.

---

## 🛠️ Tech Stack & Key Features

* **Framework**: React 19 (via Vite)
* **Language**: TypeScript
* **Styling**: Tailwind CSS v4 (with `@tailwindcss/vite` compiling)
* **Animations**: Canvas Particle Node System (interactive Hero background) + standard CSS transitions
* **Icons**: Lucide React
* **Resume Portal**: Interactive center containing three targeted download variants:
  1. AI / ML Engineer Resume
  2. Data Scientist Resume
  3. Data Analyst Resume
* **Contact Form**: Direct email routing using client-side **Web3Forms** (no server backend needed).
* **Theme System**: Persisted Dark/Light mode toggle. Dark mode uses a custom "Deep Obsidian" and "Cyber Cyan" color palette.

---

## 📂 Project Structure

```text
pirtfolio/
├── public/
│   └── resumes/
│       ├── Manikandaa_S_AI_ML_Engineer_Resume.pdf
│       ├── Manikandaa_S_Data_Analyst_Resume.pdf
│       └── Manikandaa_S_Data_Scientist_ML_Resume.pdf
├── src/
│   ├── components/
│   │   ├── Icons.tsx           # Custom brand SVG icons (GitHub, LinkedIn)
│   │   ├── Navbar.tsx          # Sticky navigation with theme toggle & observer
│   │   ├── ProjectModal.tsx    # Tabbed in-depth project detail pop-up overlay
│   │   └── Footer.tsx          # Footnote with copyright, links, and back-to-top
│   ├── data/
│   │   ├── profileData.ts      # Seeding data for education, skills, experience
│   │   └── projectsData.ts     # Metadata for the 6 featured projects
│   ├── sections/
│   │   ├── About.tsx           # About Me section bridging stats & code
│   │   ├── Skills.tsx          # Interactive skills categories tags Cloud
│   │   ├── Experience.tsx      # Vertical timeline for internships
│   │   ├── Education.tsx       # Academic coursework & scores
│   │   ├── ResumeSection.tsx   # Targeted CV download center
│   │   └── Contact.tsx         # Validated message submission form
│   ├── App.tsx                 # Core page coordinator and radial glow listener
│   ├── index.css               # Global Tailwind CSS configurations
│   └── main.tsx                # React injection entry point
├── index.html                  # SEO head definitions & Google Fonts link
├── tailwind.config.js          # Tailwind styling rules (if needed, v4 is in CSS)
└── vite.config.ts              # Vite plugins configuration (registers Tailwind v4)
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js** (v18+) and **npm** installed.

### 2. Installation
Clone your repository or enter the project folder, then install dependencies:
```bash
npm install
```

### 3. Running Locally
Run the development server locally:
```bash
npm run dev
```
The application will start at `http://localhost:5173/`.

### 4. Build for Production
Build the optimized static assets:
```bash
npm run build
```
This outputs compiled, minimized assets to the `dist/` directory, ready to serve.

---

## ⚙️ Environment Variables (Contact Form Setup)

To allow recruiters to submit messages through the contact form directly to your email inbox:

1. Visit [Web3Forms](https://web3forms.com/) (completely free).
2. Enter your email address to receive your private **Access Key**.
3. Create a `.env` file in the root of the project:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
4. Restart your development server. If the key is not present, the form will run in an **offline simulation mode** (useful for local testing without dispatching emails).

---

## 🔄 Content Management: How to Update

The portfolio separates content from logic, making updates extremely easy without touching UI files:

* **Update Skills, Experience, or Education**: Edit [profileData.ts](file:///d:/Resume/Pirtfolio/src/data/profileData.ts).
* **Update Featured Projects**: Edit [projectsData.ts](file:///d:/Resume/Pirtfolio/src/data/projectsData.ts) (change titles, descriptions, methodologies, results, GitHub links).
* **Replace Resume PDFs**: Replace the PDF files inside `public/resumes/` using the exact same filenames.

---

## 🌐 Deployment Instructions

### Deploying to Vercel (Recommended)
1. Install Vercel CLI: `npm install -g vercel`
2. Run `vercel` in the project root.
3. Follow the interactive prompts (select defaults, select current directory).
4. Add your `VITE_WEB3FORMS_ACCESS_KEY` to the Environment Variables settings in the Vercel Dashboard for production routing.

---

## 🔍 SEO Configuration

SEO is already pre-configured in [index.html](file:///d:/Resume/Pirtfolio/index.html):
* Semantic titles and meta description definitions.
* Preconnect references to Google Fonts to speed up typography loading.
* Lightweight markup to maximize Google Lighthouse metrics.

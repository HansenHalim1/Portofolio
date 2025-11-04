export const CV_CONTACT = {
  location: "Binus Square Hall of Residence",
  phone: "+62 823-8527-7069",
  email: "hansenhalim12223@gmail.com",
  linkedin: "https://www.linkedin.com/in/hansen-halim-2b7484274/",
  github: "https://github.com/HansenHalim1",
  kaggle: "https://www.kaggle.com/hansenhalim",
};

export const CV_SUMMARY =
  "Data Science undergraduate who prototypes end-to-end ML experiences—collecting data, training models, shipping FastAPI endpoints, and wrapping demos in Streamlit/Next.js.";

export const CV_EDUCATION = [
  {
    school: "Universitas Bina Nusantara (BINUS University)",
    program: "B.Sc. in Data Science",
    years: "2023 – 2027 (expected)",
    details:
      "Probability & Statistics, Linear Algebra, Machine Learning, Data Engineering, Software Engineering.",
  },
  { school: "SMA Sutomo 1 Medan", program: "Science Track", years: "2020 – 2023" },
  { school: "SMP Diponegoro Kisaran", years: "2017 – 2020" },
  { school: "SD Diponegoro Kisaran", years: "2011 – 2017" },
];

export const CV_PROJECTS = [
  {
    title: "SMS Spam Classifier",
    timeframe: "2025",
    bullets: [
      "Fine-tuned TF-IDF + Logistic Regression on Kaggle SMS Spam Collection; F1 ≥ 0.97 with artifact < 1 MB.",
      "FastAPI inference API on Render with latency logging, token-level debug info, and JSON-configured artifacts.",
      "Streamlit UI deployed to Hugging Face Spaces; embedded back into this Next.js portfolio with warm-up overlay.",
    ],
    link: "https://github.com/HansenHalim1/SMS-Spam-Classifier",
  },
  {
    title: "Demand Forecasting Pipeline",
    timeframe: "2025",
    bullets: [
      "Built Darts + XGBoost time-series pipeline that reduced MAPE from 21% to 12% on retail demand data.",
      "Scheduled retraining and ETL with Apache Airflow; tracked experiments in MLflow; surfaced insights via Power BI dashboard.",
      "Implemented CI checks and documentation to support hand-off to business stakeholders.",
    ],
    link: "https://github.com/HansenHalim1/retail-forecasting",
  },
  {
    title: "Ticket Triage Assistant",
    timeframe: "2025",
    bullets: [
      "Developed NLP classifier with SHAP explanations and FastAPI deployment, achieving +15 pts lift@10.",
      "Added observability hooks, regression tests, and guardrails for production readiness.",
    ],
    link: "https://github.com/HansenHalim1/ticket-triage",
  },
];

export const CV_SKILLS = [
  {
    label: "Languages",
    items: "Python, JavaScript/TypeScript, SQL",
  },
  {
    label: "ML & Data",
    items: "scikit-learn, pandas, NumPy, Darts, MLflow, SHAP, TF-IDF, Logistic Regression, Kaggle API",
  },
  {
    label: "Backend & Infra",
    items: "FastAPI, Uvicorn, Docker, Render, Hugging Face Spaces, GitHub Actions",
  },
  {
    label: "Frontend & UX",
    items: "Next.js (App Router), React, Tailwind CSS, Streamlit, Vercel",
  },
];

export const CV_EXTRAS = [
  "Open to AI/Data Science internships (Summer 2025 onward).",
  "Comfortable explaining models and metrics to non-technical stakeholders.",
  "Exploring NLP, forecasting, and end-to-end ML productization.",
];

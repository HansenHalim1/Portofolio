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
      "Statistics, Linear Algebra, Machine Learning, Deep Learning, Data Engineering, Software Engineering, Model Deployment.",
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
      "Blended Kaggle corpora (tinu10kumar/sms-spam-dataset + gevabriel/indonesian-sms-spam), cleaned + vectorised via TF-IDF Logistic Regression (F1 ≥ 0.97, artifact <1 MB).",
      "FastAPI inference service deployed on Render with latency telemetry, JSON artefacts, and top-token explanations for each prediction.",
      "Streamlit front-end on Hugging Face Spaces and embedded iframe inside this Next.js portfolio for live demo access.",
    ],
    link: "https://github.com/HansenHalim1/SMS-Spam-Classifier",
  },
  {
    title: "Demand Forecasting Pipeline",
    timeframe: "2025",
    bullets: [
      "Aggregated Walmart (Kaggle) weekly sales, engineered lag/rolling features, and trained Gradient Boosting regressor (MAPE ≈ 3%, MAE ≈ 1.4M).",
      "Saved compact joblib artifacts + metadata for reproducible forecasting and published CLI scripts for training and inference.",
      "Streamlit dashboard deployed to Hugging Face Spaces providing retrain + forecast buttons; documentation linked in portfolio README.",
    ],
    link: "https://github.com/HansenHalim1/demand-forecasting",
  },
  {
    title: "Support Copilot",
    timeframe: "2025",
    bullets: [
      "FastAPI microservice on Railway orchestrating Gemini 2.5 Flash with structured JSON schema for intent, sentiment, priority, and draft replies.",
      "Implements prompt grounding hooks, health checks, and configurable safety thresholds; ships with deployment-ready Dockerfile/Procfile.",
      "Streamlit UI on Hugging Face Spaces (TicketCoPilot) + embedded iframe in portfolio for real-time demonstrations.",
    ],
    link: "https://github.com/HansenHalim1/support_copilot",
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
  "Open to AI/Data Science internships.",
  "Comfortable explaining models and metrics to non-technical stakeholders.",
  "Exploring NLP, forecasting, and end-to-end ML productization.",
];

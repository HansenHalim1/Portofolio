export type Project = {
  slug: string;
  title: string;
  metric: string;
  desc: string;
  summary: string;
  demoUrl?: string;
  githubUrl: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "sms-spam-classifier",
    title: "SMS Spam Classifier",
    metric: "F1 ≥ 0.97",
    desc: "Kaggle dataset, TF-IDF + Logistic Regression, FastAPI backend + Streamlit UI (HF Spaces).",
    summary:
      "Streamlit demo backed by FastAPI and TF-IDF artifacts. Hosted UI on Hugging Face Spaces, API on Render, embedded back into this portfolio.",
    demoUrl: "https://hansen-123-sms-spam-classifier.hf.space",
    githubUrl: "https://github.com/HansenHalim1/SMS-Spam-Classifier",
  },
  {
    slug: "demand-forecasting",
    title: "Demand Forecasting",
    metric: "MAPE 21% → 12%",
    desc: "Darts + XGBoost, Airflow, MLflow; Power BI dashboard for business users.",
    summary:
      "Forecasting pipeline with classical models + MLflow tracking. Demo slot reserved for future embed (Tableau/Power BI).",
    githubUrl: "https://github.com/HansenHalim1/retail-forecasting",
  },
  {
    slug: "ticket-triage",
    title: "Ticket Triage",
    metric: "+15pts lift@10%",
    desc: "NLP classifier w/ SHAP; FastAPI endpoint; CI tests & monitoring.",
    summary:
      "Automated ticket prioritization with explainability hooks and observability. Demo iframe placeholder until public UI is ready.",
    githubUrl: "https://github.com/HansenHalim1/ticket-triage",
  },
];

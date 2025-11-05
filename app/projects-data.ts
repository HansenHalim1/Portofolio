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
    desc: "Kaggle (tinu10kumar/sms-spam-dataset + gevabriel/indonesian-sms-spam) + TF-IDF Logistic Regression, FastAPI + Streamlit (HF Spaces).",
    summary:
      "Trained on a blended Kaggle corpus (tinu10kumar/sms-spam-dataset + gevabriel/indonesian-sms-spam) with a tuned TF-IDF + Logistic Regression pipeline. FastAPI serves JSON inference; Streamlit (HF Spaces) handles the interactive demo embedded here.",
    demoUrl: "https://hansen-123-sms-spam-classifier.hf.space",
    githubUrl: "https://github.com/HansenHalim1/SMS-Spam-Classifier",
  },
  {
    slug: "demand-forecasting",
    title: "Demand Forecasting",
    metric: "MAPE ≈ 2.9%",
    desc: "Kaggle (yasserh/walmart-dataset) aggregated weekly sales + Gradient Boosting with retrainable Streamlit UI.",
    summary:
      "Scikit-learn Gradient Boosting with lag/rolling features trained on the Kaggle yasserh/walmart-dataset (aggregated across stores/departments). The Hugging Face Space retrains on the bundled history, surfaces MAE/RMSE/MAPE, and streams 26-week forecasts live.",
    demoUrl: "https://hansen-123-demandforcasting.hf.space",
    githubUrl: "https://github.com/HansenHalim1/demand-forecasting",
  },
  {
    slug: "support-copilot",
    title: "Support Copilot",
    metric: "Gemini 2.5 Flash",
    desc: "Gemini-powered ticket intelligence: intent, sentiment, suggested replies in <1s.",
    summary:
      "FastAPI service that calls Gemini 2.5 Flash with structured prompts to triage support tickets in real time. Returns intent, sentiment, urgency, summary, and a draft reply. Designed for omni-channel feeds with optional knowledge grounding, deployable on Railway’s free tier, plus an embeddable Streamlit UI.",
    demoUrl: "https://hansen-123-ticketcopilot.hf.space",
    githubUrl: "https://github.com/HansenHalim1/support-copilot",
  },
];

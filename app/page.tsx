"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

const SMS_DEMO_URL = "https://hansen-123-sms-spam-classifier.hf.space";
const SMS_DEMO_TITLE = "SMS Spam Classifier — TF-IDF + Logistic Regression";
const SMS_DEMO_DESC =
  "Paste an SMS, tap Predict, and see latency + top contributing tokens. Hosted via Streamlit on Hugging Face Spaces.";
const SMS_HEALTH_URL = "https://sms-spam-classifier-dc80.onrender.com/health";
const FORECAST_DEMO_URL = "https://hansen-123-demandforcasting.hf.space";
const FORECAST_DEMO_TITLE = "Demand Forecasting — Walmart (Kaggle) Dashboard";
const FORECAST_DEMO_DESC =
  "Retrain a Gradient Boosting regressor on Kaggle’s yasserh/walmart-dataset (aggregated weekly sales), inspect validation metrics, and generate rolling forecasts.";
const COPILOT_DEMO_URL = "https://hansen-123-ticketcopilot.hf.space";
const COPILOT_DEMO_TITLE = "Support Copilot — Ticket Intelligence";
const COPILOT_DEMO_DESC =
  "Gemini 2.5 Flash triage with summaries, suggested replies, and recommended actions. Hosted on Hugging Face Spaces.";
const CV_URL = "/cv";
const GITHUB_URL = "https://github.com/HansenHalim1";
const LINKEDIN_URL = "https://www.linkedin.com/in/hansen-halim-2b7484274/";
const EMAIL = "hansenhalim12223@gmail.com";
const KAGGLE_URL = "https://www.kaggle.com/hansenhalim";
import { PROJECTS } from "./projects-data";
import { ProjectDetailView } from "./project-detail";
import { CVView } from "./cv-page";
import { Spinner } from "./spinner";


function PortfolioContent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const queryProject = searchParams.get("project");
  const viewMode = searchParams.get("view");

  const pathMatch = pathname?.match(/^\/projects\/([^/?#]+)/);
  const slugFromPath = pathMatch ? decodeURIComponent(pathMatch[1]) : null;

  const selectedSlug = slugFromPath ?? queryProject;
  const selectedProject = PROJECTS.find((project) => project.slug === selectedSlug);

  React.useEffect(() => {
    const controller = new AbortController();
    fetch(SMS_HEALTH_URL, { signal: controller.signal, cache: "no-store", mode: "no-cors" }).catch(() => {
      // Render free tier may block CORS or be asleep; failures are fine here.
    });
    return () => controller.abort();
  }, []);

  if (pathname === "/cv" || viewMode === "cv") {
    return (
      <main className="min-h-screen bg-neutral-950 text-neutral-50 antialiased">
        <Navbar />
        <CVView />
        <Footer />
      </main>
    );
  }

  if (selectedProject) {
    return (
      <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        <Navbar />
        <ProjectDetailView project={selectedProject} />
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <Navbar />
      <Hero />

      <DemoSection />

      {/* Projects Grid */}
      <Projects />

      {/* About & Contact */}
      <About />
      <Contact />

      <Footer />
    </main>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 ${
        scrolled ? "border-b border-neutral-800" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/#home" className="group inline-flex items-center gap-2" scroll>
          <Logo />
          <span className="text-sm font-semibold tracking-wide text-neutral-200 group-hover:text-white">
            Hansen Halim
          </span>
        </Link>
        <div className="flex items-center gap-2 text-sm text-neutral-300">
          <Link href="/#demo" className="nav-link" scroll>
            Demo
          </Link>
          <Link href="/#projects" className="nav-link" scroll>
            Projects
          </Link>
          <Link href="/#about" className="nav-link" scroll>
            About
          </Link>
          <Link href="/#contact" className="nav-link" scroll>
            Contact
          </Link>
          <Link
            href={CV_URL}
            className="ml-2 rounded-xl border border-neutral-800 px-3 py-1.5 font-medium text-neutral-200 transition hover:border-neutral-700 hover:bg-neutral-900"
          >
            CV
          </Link>
        </div>
      </nav>
      <style jsx>{`
        .nav-link {
          padding: 0.25rem 0.5rem;
          border-radius: 0.5rem;
        }
        .nav-link:hover {
          background: rgba(255, 255, 255, 0.04);
          color: #fff;
        }
      `}</style>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate mx-auto max-w-6xl px-4 pb-8 pt-16">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-xs text-neutral-300">
        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
        Available for AI/Data Science Internship
      </div>
      <h1 className="text-balance text-4xl font-semibold leading-tight text-neutral-50 sm:text-5xl">
        I build usable AI demos: fast inference APIs, Streamlit/HF Spaces, and polished product surfaces.
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-300">
        Latest: an SMS spam detector trained on a blended Kaggle corpus
        (tinu10kumar/sms-spam-dataset + gevabriel/indonesian-sms-spam) with TF-IDF + Logistic Regression, keeping p95
        latency under 1.5s and artifacts around 1 MB—plus a Walmart demand forecasting dashboard built on the
        yasserh/walmart-dataset that retrains live and holds MAPE around 3%.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href="#demo"
          className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
        >
          Try the live demo
        </a>
        <a
          href="#projects"
          className="rounded-xl border border-neutral-800 px-4 py-2 text-sm text-neutral-200 transition hover:border-neutral-700 hover:bg-neutral-900"
        >
          See projects
        </a>
      </div>
      <GradientBackdrop />
    </section>
  );
}

type DemoConfig = {
  title: string;
  description: string;
  href: string;
  iframeTitle: string;
};

function DemoSection() {
  const demos: DemoConfig[] = [
    {
      title: SMS_DEMO_TITLE,
      description: SMS_DEMO_DESC,
      href: SMS_DEMO_URL,
      iframeTitle: "SMS Spam Classifier Demo",
    },
    {
      title: FORECAST_DEMO_TITLE,
      description: FORECAST_DEMO_DESC,
      href: FORECAST_DEMO_URL,
      iframeTitle: "Demand Forecasting Demo",
    },
    {
      title: COPILOT_DEMO_TITLE,
      description: COPILOT_DEMO_DESC,
      href: COPILOT_DEMO_URL,
      iframeTitle: "Support Copilot Demo",
    },
  ];

  return (
    <section id="demo" className="mx-auto max-w-6xl px-4 py-16">
      <header className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Live demos</h2>
          <p className="mt-1 text-sm text-neutral-400">
            Hosted on Hugging Face Spaces. Cold starts take a few seconds; the overlays fade once the iframe loads.
          </p>
        </div>
      </header>

      <div className="space-y-14">
        {demos.map((demo) => (
          <DemoEmbed key={demo.iframeTitle} config={demo} />
        ))}
      </div>
    </section>
  );
}

function DemoEmbed({ config }: { config: DemoConfig }) {
  const [isIframeVisible, setIsIframeVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setIsIframeVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <article className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-neutral-50">{config.title}</h3>
          <p className="mt-1 text-neutral-400">{config.description}</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={config.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-neutral-800 px-4 py-2 text-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-neutral-700 hover:bg-neutral-900"
          >
            Open in new tab ↗
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 shadow-lg">
        {isLoading && (
          <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center bg-neutral-950/60">
            <div className="flex flex-col items-center gap-3 text-center">
              <Spinner />
              <p className="text-sm text-neutral-300">Warming up the demo…</p>
              <p className="max-w-md text-xs text-neutral-400">
                Free tiers may cold-start. If it takes too long, use the “Open in new tab” link.
              </p>
            </div>
          </div>
        )}

        {isIframeVisible ? (
          <iframe
            src={config.href}
            className="h-[720px] w-full"
            style={{ border: 0 }}
            onLoad={() => setIsLoading(false)}
            allow="clipboard-write; microphone; camera"
            title={config.iframeTitle}
          />
        ) : (
          <div className="h-[720px] w-full" />
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight">Highlighted projects</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            scroll={false}
            className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 transition hover:-translate-y-1 hover:border-neutral-700 hover:bg-neutral-900"
          >
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-medium text-neutral-100 group-hover:text-white">{project.title}</h3>
              <span className="rounded-full border border-neutral-800 px-2 py-0.5 text-xs text-neutral-300">
                {project.metric}
              </span>
            </div>
            <p className="text-sm text-neutral-400">{project.desc}</p>
            <p className="mt-3 text-xs uppercase tracking-wide text-neutral-500">View details ↗</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight">About me</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 md:col-span-3">
          <h3 className="mb-1 text-lg font-medium">What I do</h3>
          <p className="text-neutral-300">
            I’m a 3rd-year Data Science student focused on building production-ish ML: data → model → API → UI. I like
            projects that have a clear business outcome and are demo-ready for stakeholders.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm text-neutral-400">
            <li>LLM/RAG (LangChain/LlamaIndex), vector DBs, prompt eval</li>
            <li>Forecasting & anomaly detection with solid backtesting</li>
            <li>APIs & orchestration (FastAPI, Railway, n8n) with auth & logging</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 md:col-span-2">
          <h3 className="mb-1 text-lg font-medium">Stack</h3>
          <p className="text-neutral-300">
            Python, SQL, scikit-learn, PyTorch/TensorFlow, Darts/Prophet, FastAPI, Docker, MLflow. Cloud & hosting: Vercel
            (frontend), Hugging Face, Railway, Render, GCP/AWS basics.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pb-20 pt-2">
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="text-neutral-300">
          I’m open to internship opportunities. Reach me via email or connect on LinkedIn.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-xl border border-neutral-800 px-4 py-2 text-neutral-200 transition hover:border-neutral-700 hover:bg-neutral-900"
          >
            Email
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-neutral-800 px-4 py-2 text-neutral-200 transition hover:border-neutral-700 hover:bg-neutral-900"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-neutral-800 px-4 py-2 text-neutral-200 transition hover:border-neutral-700 hover:bg-neutral-900"
          >
            GitHub
          </a>
          <a
            href={KAGGLE_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-neutral-800 px-4 py-2 text-neutral-200 transition hover:border-neutral-700 hover:bg-neutral-900"
          >
            Kaggle
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-900/60 bg-neutral-950/80 py-6 text-center text-xs text-neutral-500">
      <div className="mx-auto max-w-6xl px-4">
        Built with Next.js + Tailwind. Demo hosted on Hugging Face Spaces. © {new Date().getFullYear()} Hansen Halim
      </div>
    </footer>
  );
}

function GradientBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-[280px] bg-[radial-gradient(80%_60%_at_50%_0%,rgba(59,130,246,0.25),rgba(0,0,0,0))]"
    />
  );
}

function Logo() {
  return null;
}

function PageFallback() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased flex items-center justify-center">
      <Spinner />
    </main>
  );
}

export default function PortfolioSite() {
  return (
    <React.Suspense fallback={<PageFallback />}>
      <PortfolioContent />
    </React.Suspense>
  );
}

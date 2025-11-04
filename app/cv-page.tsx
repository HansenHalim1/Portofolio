"use client";

import Link from "next/link";

import { CV_CONTACT, CV_EDUCATION, CV_EXTRAS, CV_PROJECTS, CV_SKILLS, CV_SUMMARY } from "./cv-data";

export function CVView() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16">
      <header className="flex flex-col gap-1 border-b border-neutral-800 pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Hansen Halim</h1>
          <p className="mt-1 text-sm text-neutral-400">{CV_CONTACT.location}</p>
          <p className="text-sm text-neutral-400">{CV_CONTACT.phone}</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-neutral-400">
          <a href={`mailto:${CV_CONTACT.email}`} className="hover:text-white">
            {CV_CONTACT.email}
          </a>
          <span className="hidden text-neutral-700 md:inline">•</span>
          <a href={CV_CONTACT.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <span className="hidden text-neutral-700 md:inline">•</span>
          <a href={CV_CONTACT.github} target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub
          </a>
          <span className="hidden text-neutral-700 md:inline">•</span>
          <a href={CV_CONTACT.kaggle} target="_blank" rel="noreferrer" className="hover:text-white">
            Kaggle
          </a>
        </div>
      </header>

      <section className="mt-8">
        <h2 className="text-lg font-semibold uppercase tracking-wide text-neutral-300">Summary</h2>
        <p className="mt-3 text-neutral-200">{CV_SUMMARY}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold uppercase tracking-wide text-neutral-300">Education</h2>
        <div className="mt-3 space-y-4">
          {CV_EDUCATION.map((item) => (
            <div key={item.school} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <p className="font-medium text-neutral-100">{item.school}</p>
                  {item.program && <p className="text-sm text-neutral-300">{item.program}</p>}
                </div>
                <p className="text-sm text-neutral-400">{item.years}</p>
              </div>
              {item.details && <p className="mt-2 text-sm text-neutral-400">{item.details}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold uppercase tracking-wide text-neutral-300">Selected Projects</h2>
        <div className="mt-3 space-y-4">
          {CV_PROJECTS.map((project) => (
            <div key={project.title} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-medium text-neutral-100">{project.title}</p>
                  <p className="text-sm text-neutral-400">{project.timeframe}</p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-neutral-300 underline decoration-neutral-600 underline-offset-4 hover:text-white"
                  >
                    View repository
                  </a>
                )}
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-neutral-300">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold uppercase tracking-wide text-neutral-300">Technical Skills</h2>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {CV_SKILLS.map((group) => (
            <div key={group.label} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-neutral-400">{group.label}</p>
              <p className="mt-2 text-sm text-neutral-200">{group.items}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold uppercase tracking-wide text-neutral-300">Additional</h2>
        <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-neutral-300">
          {CV_EXTRAS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <footer className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-900 pt-5 text-sm text-neutral-500">
        <Link href="/" className="inline-flex items-center gap-2 hover:text-white">
          ← Back to portfolio
        </Link>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${CV_CONTACT.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 px-3 py-1.5 text-neutral-200 transition hover:border-neutral-700 hover:bg-neutral-900"
            >
              Email
            </a>
            <a
              href={CV_CONTACT.kaggle}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 px-3 py-1.5 text-neutral-200 transition hover:border-neutral-700 hover:bg-neutral-900"
            >
              Kaggle Profile
            </a>
          </div>
        </footer>
    </section>
  );
}

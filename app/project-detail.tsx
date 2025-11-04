"use client";

import React from "react";
import { useRouter } from "next/navigation";

import type { Project } from "./projects-data";
import { Spinner } from "./spinner";

type Props = {
  project: Project;
};

export function ProjectDetailView({ project }: Props) {
  const router = useRouter();
  const [isIframeVisible, setIsIframeVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setIsIframeVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <button
        onClick={() => router.push("/", { scroll: false })}
        className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 px-4 py-2 text-sm text-neutral-200 transition hover:border-neutral-700 hover:bg-neutral-900"
      >
        ← Back to portfolio
      </button>

      <header className="mt-10 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-50">{project.title}</h1>
          <span className="rounded-full border border-neutral-800 px-3 py-1 text-xs uppercase text-neutral-300">
            {project.metric}
          </span>
        </div>
        <p className="text-sm uppercase tracking-wide text-neutral-500">{project.desc}</p>
        <p className="max-w-3xl text-neutral-300">{project.summary}</p>
        <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-300">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 px-3 py-1.5 transition hover:border-neutral-700 hover:bg-neutral-900"
          >
            View GitHub ↗
          </a>
          <button
            type="button"
            onClick={() => router.push("/#contact")}
            className="inline-flex items-center gap-2 rounded-xl border border-transparent bg-white/10 px-3 py-1.5 text-white transition hover:bg-white/15"
          >
            Discuss this project
          </button>
        </div>
      </header>

      {project.demoUrl ? (
        <div className="mt-10">
          <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 shadow-lg">
            {isLoading && (
              <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center bg-neutral-950/60">
                <div className="flex flex-col items-center gap-3 text-center">
                  <Spinner />
                  <p className="text-sm text-neutral-300">Loading project demo…</p>
                </div>
              </div>
            )}

            {isIframeVisible ? (
              <iframe
                src={project.demoUrl}
                className="h-[720px] w-full"
                style={{ border: 0 }}
                onLoad={() => setIsLoading(false)}
                allow="clipboard-write; microphone; camera"
                title={`${project.title} demo`}
              />
            ) : (
              <div className="h-[720px] w-full" />
            )}
          </div>
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-neutral-800 bg-neutral-900/30 p-10 text-center text-neutral-300">
          Interactive demo coming soon. Explore the repository or reach out for a walkthrough.
        </div>
      )}
    </section>
  );
}

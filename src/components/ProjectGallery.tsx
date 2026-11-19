"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Project } from "@/content/projects";

type Props = {
  projects: Project[];
  enableFilter?: boolean;
};

export function ProjectGallery({ projects, enableFilter = true }: Props) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects],
  );
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<Project | null>(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {enableFilter ? (
        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {categories.map((category) => {
            const selected = category === active;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selected}
                className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                  selected
                    ? "border-navy bg-navy text-white"
                    : "border-line bg-surface text-navy hover:border-navy/30"
                }`}
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
      ) : null}

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <li key={project.id}>
            <button
              type="button"
              className="surface-card group w-full overflow-hidden text-left"
              onClick={() => setLightbox(project)}
              aria-label={`View ${project.title}`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="space-y-1 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {project.category}
                  {project.location ? ` · ${project.location}` : ""}
                </p>
                <h3 className="text-lg text-navy-deep">{project.title}</h3>
                <p className="text-sm text-muted">{project.description}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {lightbox ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close image viewer"
            onClick={() => setLightbox(null)}
          />
          <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-card bg-surface shadow-soft animate-fade-in">
            <div className="relative aspect-[16/10]">
              <Image
                src={lightbox.image}
                alt={lightbox.imageAlt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="flex items-start justify-between gap-4 p-4">
              <div>
                <h3 className="text-xl text-navy-deep">{lightbox.title}</h3>
                <p className="mt-1 text-sm text-muted">{lightbox.description}</p>
              </div>
              <button type="button" className="btn-secondary px-3 py-2" onClick={() => setLightbox(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

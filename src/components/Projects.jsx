import { ExternalLink, Github } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "@/data/site";

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={Math.min(index, 4) * 0.05} className="h-full">
      <article className="card card-hover group relative h-full overflow-hidden p-6">
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${project.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />

        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-white">{project.name}</h3>
              {project.org && (
                <p className="mt-0.5 font-mono text-xs text-accent">{project.org}</p>
              )}
            </div>
            <div className="flex shrink-0 items-center gap-1">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} source code`}
                  className="rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-white"
                >
                  <Github size={16} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} live demo`}
                  className="rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-accent"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{project.blurb}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">02 — Selected work</p>
          <h2 className="heading">Products I&apos;ve led and built</h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            A selection across fintech, healthcare, marketplaces and delivery — from
            multi-app platforms to AI and blockchain products.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>

        <Reveal>
          <h3 className="mb-6 mt-16 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
            More work
          </h3>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

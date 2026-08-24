import Reveal from "./Reveal";
import { experience } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">03 — Experience</p>
          <h2 className="heading">Where I&apos;ve worked</h2>
        </Reveal>

        <ol className="mt-12 space-y-2">
          {experience.map((job, i) => (
            <Reveal key={`${job.org}-${job.period}`} delay={Math.min(i, 5) * 0.04}>
              <li className="group relative grid gap-4 rounded-2xl border border-transparent p-6 transition-colors duration-300 hover:border-white/[0.07] hover:bg-white/[0.02] sm:grid-cols-[9rem_1fr] sm:gap-8">
                <div className="sm:pt-1">
                  <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
                    {job.period}
                  </p>
                  {job.current && (
                    <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/[0.07] px-2.5 py-0.5 text-[10px] font-medium text-accent">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Current
                    </span>
                  )}
                  {job.entrepreneurship && (
                    <span className="mt-2 inline-block rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] font-medium text-slate-400">
                      Founder
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    {job.role}
                    <span className="text-slate-500"> · </span>
                    <span className="text-accent">{job.org}</span>
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {job.points.map((p) => (
                      <li
                        key={p}
                        className="relative pl-5 text-sm leading-relaxed text-slate-400 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-accent/50"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

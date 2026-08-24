import Reveal from "./Reveal";
import { skills } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">05 — Toolkit</p>
          <h2 className="heading">Technologies I work with</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={Math.min(i, 4) * 0.05} className="h-full">
              <div className="card card-hover h-full p-6">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-slate-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

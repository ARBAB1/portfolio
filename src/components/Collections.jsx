import { ArrowUpRight, Github } from "lucide-react";
import Reveal from "./Reveal";
import { collections, profile } from "@/data/site";

function RepoRow({ item }) {
  return (
    <li className="group/row">
      <a
        href={item.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.03]"
      >
        <Github
          size={15}
          className="mt-0.5 shrink-0 text-slate-600 transition-colors group-hover/row:text-accent"
        />

        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-sm font-medium text-slate-200 transition-colors group-hover/row:text-white">
              {item.name}
            </span>
            <span className="font-mono text-[10px] text-slate-600">{item.tech}</span>
          </span>
          <span className="mt-0.5 block text-xs leading-relaxed text-slate-500">
            {item.desc}
          </span>
        </span>

        {item.live && (
          <span
            role="presentation"
            className="mt-0.5 shrink-0 rounded-md border border-accent/20 bg-accent/[0.07] px-2 py-0.5 font-mono text-[10px] text-accent"
          >
            live
          </span>
        )}
      </a>
    </li>
  );
}

export default function Collections() {
  const total = collections.reduce((n, g) => n + g.items.length, 0);

  return (
    <section id="open-source" className="section">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">03 — Open source</p>
          <h2 className="heading">Everything else on GitHub</h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            {total} public repositories, grouped by what they are — platforms, mobile
            apps, backend services, brand sites and small tools.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-12 lg:grid-cols-2">
          {collections.map((group, i) => (
            <Reveal key={group.title} delay={Math.min(i, 4) * 0.05}>
              <div>
                <div className="mb-1 flex items-baseline justify-between gap-4 border-b border-white/[0.07] pb-3">
                  <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                    {group.title}
                  </h3>
                  <span className="font-mono text-[10px] text-slate-600">
                    {group.items.length}
                  </span>
                </div>
                <p className="mb-3 mt-3 text-xs leading-relaxed text-slate-500">
                  {group.blurb}
                </p>
                <ul className="-mx-3">
                  {group.items.map((item) => (
                    <RepoRow key={item.name} item={item} />
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-12 inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-accent/30 hover:text-white"
          >
            <Github size={16} />
            Browse all repositories
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile, stats } from "@/data/site";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="container-page relative">
        <motion.p
          custom={0}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.07] px-4 py-1.5 font-mono text-xs text-accent"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.availability}
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fade}
          className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-4 bg-gradient-to-r from-accent via-teal-300 to-sky-400 bg-clip-text text-xl font-medium text-transparent sm:text-2xl"
        >
          {profile.role}
        </motion.p>

        <motion.p
          custom={3}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-accent-soft"
          >
            View my work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-accent/30 hover:text-white"
          >
            <Mail size={16} />
            Hire me
          </a>
          <div className="flex items-center gap-1">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-3 text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-3 text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        <motion.p
          custom={5}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-6 inline-flex items-center gap-2 text-sm text-slate-500"
        >
          <MapPin size={14} />
          {profile.location}
        </motion.p>

        <motion.dl
          custom={6}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.05] sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-950/80 px-5 py-6">
              <dt className="text-2xl font-semibold text-white sm:text-3xl">{s.value}</dt>
              <dd className="mt-1 text-xs leading-snug text-slate-500">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

import { Award, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import { certifications, education, profile } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">01 — About</p>
          <h2 className="heading">Building software, and the teams that ship it</h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delay={0.05}>
            <div className="space-y-5 text-base leading-relaxed text-slate-400">
              <p>
                I&apos;m a technical leader based in {profile.location}, currently serving as
                Head of Development at SkyHighDesigns and CTO at Hypertechverse. Over the past
                five years I&apos;ve moved from hands-on full-stack development into leading
                cross-functional teams — while staying close enough to the code to make
                architecture decisions I can defend.
              </p>
              <p>
                My work spans regulated and high-stakes domains: a mobile banking app for
                Al-Rajhi Bank Malaysia with biometric and multi-factor authentication, a
                HIPAA-compliant telehealth platform, blockchain marketplaces, and AI products
                built on the OpenAI GPT and DALL·E APIs.
              </p>
              <p>
                What I care about is delivery that holds up: measurable outcomes, systems that
                scale past launch day, and teams that get faster over time rather than slower.
                Recent engagements have cut task completion time by 30%, lifted team
                collaboration by 40%, and reduced processing time on automated workflows by 50%.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="space-y-4">
              <div className="card p-6">
                <div className="mb-4 flex items-center gap-2 text-accent">
                  <GraduationCap size={18} />
                  <h3 className="font-mono text-xs uppercase tracking-[0.15em]">Education</h3>
                </div>
                <p className="font-medium text-white">{education.degree}</p>
                <p className="mt-1 text-sm text-slate-400">{education.school}</p>
                <p className="mt-0.5 text-sm text-slate-500">
                  {education.location} · {education.period}
                </p>
              </div>

              <div className="card p-6">
                <div className="mb-4 flex items-center gap-2 text-accent">
                  <Award size={18} />
                  <h3 className="font-mono text-xs uppercase tracking-[0.15em]">Certifications</h3>
                </div>
                <ul className="space-y-3">
                  {certifications.map((c) => (
                    <li key={c.name}>
                      <p className="font-medium text-white">{c.name}</p>
                      <p className="text-sm text-slate-500">{c.issuer}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

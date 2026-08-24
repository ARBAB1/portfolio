import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/data/site";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    Icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "syed-arbab-ali-shah",
    href: profile.links.linkedin,
    Icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "ARBAB1",
    href: profile.links.github,
    Icon: Github,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <Reveal>
          <div className="card relative overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]"
            />

            <div className="relative">
              <p className="eyebrow justify-center after:hidden">06 — Contact</p>
              <h2 className="heading mx-auto max-w-2xl">
                Have a product to build, or a team to lead?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-400">
                I&apos;m {profile.availability.toLowerCase()}. Tell me what you&apos;re
                building and I&apos;ll tell you honestly whether I&apos;m the right person
                for it.
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-accent-soft"
              >
                Start a conversation
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <ul className="mx-auto mt-12 grid max-w-3xl gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.05] sm:grid-cols-2">
                {channels.map(({ label, value, href, Icon, external }) => (
                  <li key={label} className="bg-ink-950/80">
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex items-center gap-3 px-5 py-4 text-left transition hover:bg-white/[0.03]"
                    >
                      <Icon size={18} className="shrink-0 text-accent" />
                      <span className="min-w-0">
                        <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-500">
                          {label}
                        </span>
                        <span className="block truncate text-sm text-slate-300">{value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

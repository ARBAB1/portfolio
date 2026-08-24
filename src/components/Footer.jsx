import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

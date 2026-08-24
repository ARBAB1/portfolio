import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const title = `${profile.name} — ${profile.role}`;
const description = profile.intro;

export const metadata = {
  metadataBase: new URL("https://syedarbabalishah.vercel.app"),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Syed Arbab Ali Shah",
    "Full Stack Engineer",
    "React Native Developer",
    "Next.js Developer",
    "CTO",
    "Head of Development",
    "Karachi",
    "Pakistan",
    "Mobile App Developer",
  ],
  authors: [{ name: profile.name, url: profile.links.linkedin }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title,
    description,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#07090d",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    telephone: profile.phoneHref,
    url: profile.links.linkedin,
    sameAs: [profile.links.github, profile.links.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "PK",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-ink-950"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

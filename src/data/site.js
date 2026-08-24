// ---------------------------------------------------------------------------
// Single source of truth for all site content. Edit here, not in components.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Syed Arbab Ali Shah",
  shortName: "Arbab",
  role: "Technical Leader & Full-Stack Engineer",
  tagline: "I lead teams that ship enterprise-grade web and mobile products.",
  intro:
    "Technical leader with 5+ years designing, building and deploying enterprise mobile and web applications. I lead cross-functional teams end to end — architecture, delivery and everything between — across fintech, healthcare, e-commerce and marketplace products. Expert in React Native, React, Next.js, Node.js and cloud infrastructure.",
  location: "Karachi, Pakistan",
  availability: "Open to leadership roles, remote work and consulting",
  email: "syedarbabalishah@gmail.com",
  phone: "+92 333 227 2568",
  phoneHref: "+923332272568",
  links: {
    github: "https://github.com/ARBAB1",
    linkedin: "https://www.linkedin.com/in/syed-arbab-ali-shah-4a569a116/",
  },
};

export const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "30%", label: "Faster task completion delivered" },
  { value: "40%", label: "Team collaboration improvement" },
  { value: "9", label: "Companies led or served" },
];

export const skills = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "ECMAScript 6", "Python", "Dart"],
  },
  {
    title: "Frontend & Mobile",
    items: ["React.js", "React Native", "Next.js", "Flutter", "Redux", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Apollo GraphQL", "RESTful APIs", "WebSockets", "Apache Kafka"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS EC2", "AWS S3", "AWS Lambda", "Docker", "CI/CD Pipelines", "Load Balancing"],
  },
  {
    title: "Payments & Auth",
    items: ["Stripe", "OAuth 2.0", "Multi-Factor Auth", "SSO", "Google Authentication", "RevenueCat"],
  },
  {
    title: "AI & Web3",
    items: ["OpenAI API", "DALL·E", "Web3.js", "Ethereum", "Smart Contracts", "NFT"],
  },
  {
    title: "Ways of working",
    items: ["Git", "JIRA", "Agile", "Scrum", "Code review", "Technical leadership"],
  },
];

export const projects = [
  {
    name: "Timely Delivered",
    org: "SkyHighDesigns",
    blurb:
      "End-to-end food delivery platform spanning four mobile apps — consumer, restaurant, marketplace and rider — plus website, admin panel and backend.",
    stack: ["React Native", "Node.js", "Admin Panel", "Multi-app"],
    accent: "from-amber-400/25 to-orange-500/5",
    featured: true,
  },
  {
    name: "Join Heirs Production",
    org: "SkyHighDesigns",
    blurb:
      "Subscription-based mental health platform with a patient mobile app, therapist panel, admin panel and backend services.",
    stack: ["React Native", "Subscriptions", "Node.js"],
    accent: "from-emerald-400/25 to-teal-500/5",
    featured: true,
  },
  {
    name: "Clayton Real Estate",
    org: "Hypertechverse",
    blurb:
      "Real estate platform with separate tenant, landlord and broker mobile apps, an admin panel and backend — plus a web management dashboard with KPI reporting and data export.",
    stack: ["Flutter", "Next.js", "TypeScript", "Chart.js"],
    live: "https://clayton-real-estate.vercel.app",
    repo: "https://github.com/ARBAB1/claytonRealEstate",
    accent: "from-sky-400/25 to-blue-500/5",
    featured: true,
  },
  {
    name: "Aptitood HRM",
    org: "Hypertechverse",
    blurb:
      "AI-integrated HR management system with dedicated web portals for candidates and for hiring companies.",
    stack: ["AI Integration", "Next.js", "Node.js"],
    accent: "from-violet-400/25 to-purple-500/5",
  },
  {
    name: "CrewLink World",
    org: "Logomish LLC",
    blurb:
      "Aviation crew social network with posting, real-time chat, group discussions, media editing and in-app purchases, backed by an operational admin portal.",
    stack: ["React Native", "WebSockets", "Next.js", "TypeScript"],
    live: "https://crewlink-portal.vercel.app",
    repo: "https://github.com/ARBAB1/Crewlink-Portal",
    accent: "from-cyan-400/25 to-teal-500/5",
    featured: true,
  },
  {
    name: "Al-Rajhi Bank Malaysia",
    org: "Smart Star Software Services",
    blurb:
      "Secure mobile banking application with OAuth, multi-factor and biometric authentication, and real-time transactions — improving customer engagement by 40%.",
    stack: ["React Native", "OAuth 2.0", "MFA", "Biometrics"],
    accent: "from-indigo-400/25 to-blue-600/5",
    featured: true,
  },
  {
    name: "Bartinder",
    org: "Logomish LLC",
    blurb:
      "Social booking app for bars with real-time chat, Stripe payments and geolocation-based recommendations, shipped to Android and iOS.",
    stack: ["React Native", "Stripe", "Firebase", "Geolocation"],
    repo: "https://github.com/ARBAB1/Bartender-App-Frontend",
    accent: "from-rose-400/25 to-red-500/5",
  },
  {
    name: "HIPAA Telehealth Platform",
    org: "Welab Technologies",
    blurb:
      "HIPAA-compliant telehealth system with real-time chat, appointment scheduling, patient verification, plus doctor, lab and admin portals. Cut appointment cancellations by 30%.",
    stack: ["React Native", "Stripe", "Google APIs", "HIPAA"],
    accent: "from-teal-400/25 to-green-500/5",
  },
  {
    name: "Fintechify Project Suite",
    org: "Fintechify Oman",
    blurb:
      "Project management tool with drag-and-drop Kanban boards, real-time WebSocket updates, role-based access control and audit logs. Reduced task completion time by 30%.",
    stack: ["Next.js", "Redux", "PostgreSQL", "WebSockets"],
    live: "https://trello-project-management-tool-front-end.vercel.app",
    repo: "https://github.com/ARBAB1/trello-updated-project",
    accent: "from-blue-400/25 to-indigo-500/5",
  },
  {
    name: "Trust Vibes",
    org: "Epaging",
    blurb:
      "Blockchain NFT marketplace with minting, bidding and MetaMask integration — lifted NFT minting activity by 40%.",
    stack: ["Web3.js", "Ethereum", "MetaMask", "MERN"],
    accent: "from-fuchsia-400/25 to-pink-500/5",
  },
  {
    name: "AI Career Recommendation System",
    org: "Logomish LLC",
    blurb:
      "OpenAI GPT-powered system generating personalised MCQ assessments and mapping users to recommended career paths.",
    stack: ["OpenAI API", "React", "Node.js"],
    accent: "from-lime-400/25 to-emerald-500/5",
  },
  {
    name: "Fleet Management System",
    org: "Everent's Solutions",
    blurb:
      "Real-time fleet tracking and management platform with GraphQL data synchronisation, improving operational efficiency by 30%.",
    stack: ["React", "GraphQL", "React Native"],
    accent: "from-orange-400/25 to-amber-500/5",
  },
];

export const experience = [
  {
    role: "Head of Development",
    org: "SkyHighDesigns",
    period: "Aug 2025 — Present",
    current: true,
    points: [
      "Lead development operations and full-cycle product development across mobile and web.",
      "Architect scalable multi-platform solutions: consumer, restaurant, marketplace and rider apps with admin panels.",
      "Delivered Timely Delivered, a food delivery platform spanning four mobile apps, website, admin panel and backend.",
      "Built Join Heirs Production, a subscription-based mental health platform with patient app and therapist portal.",
    ],
  },
  {
    role: "Chief Technology Officer",
    org: "Hypertechverse",
    period: "Jul 2025 — Present",
    current: true,
    points: [
      "Provide strategic technology leadership and own architecture decisions across multiple enterprise applications.",
      "Drive AI-first solutions and modern stack adoption for scalable product development.",
      "Shipped Clayton Real Estate with tenant, landlord and broker apps plus admin panel and backend.",
      "Built Aptitood HRM, an AI-integrated HR system, and Gepanda, an AI chatbot web app with hotel recommendations.",
    ],
  },
  {
    role: "Development Head",
    org: "Fintechify — Oman",
    period: "Jan 2024 — Mar 2025",
    points: [
      "Led creation of a project management tool with drag-and-drop Kanban boards and real-time WebSocket updates.",
      "Implemented role-based access control and audit logging for operational transparency.",
      "Reduced task completion time by 30% and improved team collaboration by 40% through Agile practices.",
    ],
  },
  {
    role: "Senior Development Manager",
    org: "Logomish LLC — USA",
    period: "Jan 2023 — Mar 2025",
    points: [
      "Led mobile application design and delivery with real-time chat, Stripe payments and geolocation tracking.",
      "Built Bartinder (social bar booking) and CrewLink World (aviation crew social network with in-app purchases).",
      "Created AI products on the OpenAI GPT and DALL·E APIs — career recommendations and image generation.",
    ],
  },
  {
    role: "Senior Development Manager",
    org: "Smart Star Software Services — UAE",
    period: "Jan 2022 — Mar 2025",
    points: [
      "Led development of a secure mobile banking app for Al-Rajhi Bank Malaysia with OAuth, MFA and biometrics.",
      "Improved customer engagement by 40% via a React Native app with real-time transactions.",
      "Built automated procurement and inventory management, cutting processing time by 50%.",
      "Integrated Apache Kafka for real-time processing and Apollo GraphQL across microservices; deployed on AWS with CI/CD.",
    ],
  },
  {
    role: "Senior Mobile Application Developer",
    org: "Welab Technologies — Canada (Hybrid)",
    period: "Dec 2022 — Dec 2023",
    points: [
      "Built a HIPAA-compliant telehealth application with real-time chat, scheduling and patient verification.",
      "Developed doctor and lab portals for test scheduling, practitioner tracking and sample processing.",
      "Reduced appointment cancellations by 30% and improved end-to-end workflow efficiency.",
    ],
  },
  {
    role: "Team Lead — MERN Stack",
    org: "Techsmith Private Limited",
    period: "Jun 2022 — Oct 2022",
    points: [
      "Led the team building FoodPort, a multi-restaurant delivery platform with Google APIs and Stripe.",
      "Built Validify, a Web3 cryptocurrency marketplace using CoinGecko APIs and MetaMask verification.",
      "Enforced quality through Agile workflows, code review and optimised CI/CD pipelines.",
    ],
  },
  {
    role: "Full Stack Developer",
    org: "Epaging Private Limited",
    period: "Dec 2021 — May 2022",
    points: [
      "Built and deployed scalable MERN stack applications.",
      "Developed Trust Vibes, a blockchain NFT marketplace with minting, bidding and MetaMask integration.",
      "Created an e-commerce platform with Stripe, reducing cart abandonment by 25%.",
    ],
  },
  {
    role: "Engineering Manager",
    org: "Everent's Solutions",
    period: "May 2020 — Nov 2021",
    points: [
      "Led custom web and mobile development in React.js, React Native and WordPress.",
      "Built a Fleet Management System improving efficiency by 30% via real-time GraphQL synchronisation.",
      "Achieved a 25% increase in team productivity through leadership and consistent on-time delivery.",
    ],
  },
  {
    role: "Founder & Technical Lead",
    org: "Spectrum Engineering Solutions",
    period: "2018 — 2020",
    entrepreneurship: true,
    points: [
      "Founded a software startup focused on AI, mobile and web development with custom automation solutions.",
      "Built and deployed client projects integrating AI models, automation frameworks and cloud infrastructure.",
      "Led business strategy, client acquisition and technical direction using Agile delivery.",
    ],
  },
];

export const education = {
  degree: "B.E. Computer Systems Engineering",
  school: "Hamdard University",
  location: "Karachi, Pakistan",
  period: "2013 — 2018",
};

export const certifications = [
  { name: "Blockchain Certification", issuer: "IBM (Alison)" },
  { name: "Linux Certification", issuer: "Cisco Networking Academy" },
];

// ---------------------------------------------------------------------------
// Open-source repositories, grouped. Rendered as a compact index below the
// featured project cards so breadth is visible without crowding the flagships.
// ---------------------------------------------------------------------------

export const collections = [
  {
    title: "Platforms & dashboards",
    blurb: "Multi-module business systems with authentication, reporting and admin tooling.",
    items: [
      {
        name: "CrewLink Portal",
        desc: "Airline crew management — regions, subscribers, reporting",
        repo: "https://github.com/ARBAB1/Crewlink-Portal",
        live: "https://crewlink-portal.vercel.app",
        tech: "Next.js · TypeScript",
      },
      {
        name: "Restaurant Management System",
        desc: "HR, payroll, attendance, inventory and orders",
        repo: "https://github.com/ARBAB1/Resturant-management-system-Frontend",
        live: "https://resturant-management-system-frontend.vercel.app",
        tech: "Next.js · TypeScript",
      },
      {
        name: "Clayton Real Estate",
        desc: "Company and property management with KPI reporting",
        repo: "https://github.com/ARBAB1/claytonRealEstate",
        live: "https://clayton-real-estate.vercel.app",
        tech: "Next.js · TypeScript",
      },
      {
        name: "Project Management Suite",
        desc: "Kanban boards, workspaces, activity feeds, invitations",
        repo: "https://github.com/ARBAB1/trello-updated-project",
        live: "https://trello-project-management-tool-front-end.vercel.app",
        tech: "Next.js · Redux Toolkit",
      },
      {
        name: "WOF Marketplace",
        desc: "Multi-vendor commerce with customer, seller and admin views",
        repo: "https://github.com/ARBAB1/wof-frontend",
        tech: "React · Stripe · PayPal",
      },
      {
        name: "Launch Pad",
        desc: "Agency project and sales system with per-person workloads",
        repo: "https://github.com/ARBAB1/launch-pad",
        live: "https://launch-pad-one-coral.vercel.app",
        tech: "JavaScript · Firebase",
      },
      {
        name: "School Management System",
        desc: "Academic administration portal with email notifications",
        repo: "https://github.com/ARBAB1/sms",
        tech: "Next.js · Ant Design",
      },
      {
        name: "Document Approval",
        desc: "Document approval workflow backed by Firebase",
        repo: "https://github.com/ARBAB1/Doc-Approval-Website",
        tech: "Next.js · Firebase",
      },
    ],
  },
  {
    title: "Mobile applications",
    blurb: "Cross-platform apps shipped to Android and iOS.",
    items: [
      {
        name: "Clayton Mobile",
        desc: "Role-based rental estate app for owners and tenants",
        repo: "https://github.com/ARBAB1/clayton_rental_estate_flutter_mobile_app",
        tech: "Flutter · Dart",
      },
      {
        name: "Bartinder",
        desc: "Social bar booking with push notifications and geolocation",
        repo: "https://github.com/ARBAB1/Bartender-App-Frontend",
        tech: "React Native · Firebase",
      },
      {
        name: "Wallet App",
        desc: "Digital wallet with OTP auth and transaction tracking",
        repo: "https://github.com/ARBAB1/Wallet-App",
        tech: "React Native · Redux",
      },
      {
        name: "Blood Donation",
        desc: "Connects blood donors with recipients",
        repo: "https://github.com/ARBAB1/blood_donation_react_native_application",
        tech: "React Native",
      },
    ],
  },
  {
    title: "Backends & APIs",
    blurb: "Node.js services with JWT authentication and relational storage.",
    items: [
      {
        name: "Clayton Estate API",
        desc: "JWT auth, MySQL, Express — powers the estate platform",
        repo: "https://github.com/ARBAB1/clayton_rental_estate_backend",
        tech: "Node.js · Express · MySQL",
      },
      {
        name: "Restaurant Inventory API",
        desc: "REST API with file uploads backing the restaurant system",
        repo: "https://github.com/ARBAB1/resturant-inventory-project",
        tech: "Node.js · Express · MySQL",
      },
      {
        name: "Internet Speed API",
        desc: "Speedtest wrapper with geo-IP lookup",
        repo: "https://github.com/ARBAB1/internet-speed-backend",
        tech: "Node.js · Express",
      },
    ],
  },
  {
    title: "Marketing & brand sites",
    blurb: "Animation-led corporate sites, including bilingual RTL builds.",
    items: [
      {
        name: "Fintechify",
        desc: "Corporate fintech site with maps and animated statistics",
        repo: "https://github.com/ARBAB1/fintechify-english-website",
        tech: "Next.js · Bootstrap",
      },
      {
        name: "Fintechify (Arabic)",
        desc: "Full RTL Arabic build of the Fintechify site",
        repo: "https://github.com/ARBAB1/fintechify-arabic-version-website",
        tech: "Next.js · RTL",
      },
      {
        name: "Loading Logo",
        desc: "Creative studio site with Framer Motion transitions",
        repo: "https://github.com/ARBAB1/loadinglogo_website",
        live: "https://loadinglogo-website.vercel.app",
        tech: "Next.js · Framer Motion",
      },
      {
        name: "Ronasit",
        desc: "Agency site with GSAP and Locomotive smooth scrolling",
        repo: "https://github.com/ARBAB1/Ronasit",
        tech: "Next.js · GSAP",
      },
      {
        name: "Evodesign",
        desc: "Design agency site with parallax and video backgrounds",
        repo: "https://github.com/ARBAB1/evodesign",
        tech: "Next.js · styled-components",
      },
      {
        name: "Smart Star",
        desc: "Corporate site with forms, reCAPTCHA and animated stats",
        repo: "https://github.com/ARBAB1/smartstar-website",
        tech: "Next.js · Formik",
      },
      {
        name: "NFL Foundation",
        desc: "Foundation marketing site",
        repo: "https://github.com/ARBAB1/NFL-website",
        tech: "Next.js · Bootstrap",
      },
    ],
  },
  {
    title: "Tools & extensions",
    blurb: "Small utilities and browser extensions built to solve daily friction.",
    items: [
      {
        name: "USA State Time",
        desc: "Chrome extension showing US state timezones at a glance",
        repo: "https://github.com/ARBAB1/USA-State-Time-Extension",
        tech: "Chrome Extension",
      },
      {
        name: "Currency Exchange Rates",
        desc: "Chrome extension for live currency conversion",
        repo: "https://github.com/ARBAB1/Currency-Exchange-Rates-Chrome-Extension",
        tech: "Chrome Extension",
      },
      {
        name: "Internet Speed Test",
        desc: "Download, upload and latency measurement UI",
        repo: "https://github.com/ARBAB1/internet-speed-frontend",
        tech: "React · TypeScript",
      },
      {
        name: "Responsive Landing Page",
        desc: "Hand-coded responsive page, no framework",
        repo: "https://github.com/ARBAB1/Single-responsive-web-page-assignment",
        tech: "HTML · CSS",
      },
    ],
  },
];

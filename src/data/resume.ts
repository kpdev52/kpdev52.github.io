/* Single source of truth for every piece of content on the site.
   Edit here, never in the components. */

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badges: string[];
  stack: string[];
  link?: { label: string; href: string };
  image?: string;
  imageAlt?: string;
  frameLabel?: string;
};

export type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  logo?: string;
  points: string[];
};

export const profile = {
  name: "Keyur Pumbhadiya",
  initials: "KP",
  role: "Software Engineer",
  location: "Surat, India",
  email: "keyurpumbhadiya65@gmail.com",
  phone: "+91 9586870368",
  phoneHref: "tel:+919586870368",
  whatsapp:
    "https://wa.me/919586870368?text=Hi%20Keyur%2C%20I%20came%20across%20your%20portfolio",
  linkedin: "https://www.linkedin.com/in/keyur-pumbhadiya/",
  github: "https://github.com/kpdev52",
  resume: "assets/Keyur_Pumbhadiya_Resume.pdf",
  tagline: "Angular front, .NET and Node back.",
  /* Hero headline: each line is plain text plus the gradient-highlighted phrase. */
  headline: [
    { lead: "I build systems that", accent: "stay up" },
    { lead: "and agents that", accent: "get things done." },
  ],
  lede:
    "4+ years building enterprise web applications in Angular and TypeScript, backed by REST APIs in ASP.NET Core and Node.js. Currently delivering a healthcare SaaS platform end to end — from the Angular monorepo down to the MongoDB aggregation pipelines — and going deeper into distributed systems and agentic AI.",
  statement:
    "Owning a feature means owning it everywhere: the component, the endpoint, the query plan behind it, and the production bug three weeks later. That is the part of the job I actually care about.",
};

export const eyebrow = [
  { label: "Keyur Pumbhadiya", caption: "Surat, India" },
  { label: "Software Engineer", caption: "Angular · TypeScript · .NET · Node.js" },
  { label: "Distributed systems", caption: "Real-time services, WebSockets, API design" },
  { label: "AI learner", caption: "Agentic AI · RAG · Vector DBs", gradient: true },
];

export const pillars = [
  {
    id: "frontend",
    title: "Frontend architecture",
    body: "Angular monorepos built on shared library architecture — reusable component and feature libraries consumed across the platform, so a fix lands once and every screen inherits it. RxJS for state and streams, and UI tuned until interaction stays smooth under real data volumes.",
    chips: ["Angular", "TypeScript", "RxJS", "Monorepo", "Shared libraries", "SCSS", "Bootstrap"],
  },
  {
    id: "backend",
    title: "APIs & authentication",
    body: "REST APIs in ASP.NET Core Web API and Node/Express with request validation, consistent response contracts and real error handling. JWT authentication wired to role-based access control that is enforced on the API, not just hidden in the UI.",
    chips: ["ASP.NET Core", "Node.js", "Express", "LINQ", "JWT", "RBAC", "Swagger"],
  },
  {
    id: "data",
    title: "Data & performance",
    body: "SQL Server stored procedures and MongoDB schema design with Mongoose — indexing and aggregation pipelines for reporting-heavy screens. Most of my performance wins came from fixing the query and cutting redundant API calls, not from adding cache.",
    chips: ["SQL Server", "Stored procedures", "MongoDB", "Mongoose", "Aggregation", "Indexing"],
  },
  {
    id: "distributed",
    title: "Distributed systems",
    body: "Services that have to agree with each other while data keeps moving. WebSocket channels pushing live state to clients, APIs split by responsibility behind consistent contracts, and the unglamorous part — tracing a defect from the UI through the API into the data layer until the whole path is verified.",
    chips: ["WebSockets", "Real-time sync", "REST contracts", "Caching", "Production debugging"],
  },
  {
    id: "cloud",
    title: "Cloud & deployment",
    body: "Getting the build onto a server and keeping it reachable. Node and Angular applications deployed on EC2 behind Nginx as a reverse proxy with TLS, static assets and uploads served from S3, and IAM users, roles and policies scoped to least privilege instead of one all-powerful key.",
    chips: ["AWS", "EC2", "S3", "IAM", "Nginx", "Reverse proxy", "TLS"],
  },
  {
    id: "ai",
    title: "Agentic AI",
    body: "The area I am actively going deeper into: the engineering behind agentic systems rather than demos. RAG pipelines that ground model output in real application data through a vector database, tool and prompt design that keeps an agent inside its lane, and a human approval step in front of anything that writes.",
    chips: ["Agentic AI", "RAG", "Vector DBs", "Claude", "Prompt design", "LLM integration"],
  },
];

export const projects: Project[] = [
  {
    id: "bookstore",
    title: "Online Bookstore",
    tagline: "An end-to-end store on ASP.NET Core Web API with an Angular front end.",
    description:
      "Browsing, search and order management over an ASP.NET Core Web API (.NET 6) backend. JWT-based auth issues signed tokens on login and validates them through authentication middleware to protect endpoints; routes are secured by user role, with an Angular HTTP interceptor handling token storage and attachment on the client. The API is structured around built-in dependency injection — services and repositories registered so controllers stay thin and testable — with LINQ queries shaping data out of SQL Server and every endpoint documented and tested in Swagger.",
    badges: ["End to end", "Personal project"],
    stack: [".NET 6", "C#", "LINQ", "SQL Server", "Angular", "JWT", "Swagger"],
    frameLabel: "bookstore · localhost",
    image: "assets/bookstore.svg",
    imageAlt:
      "Online Bookstore interface: catalogue grid with search and category filters, and a cart drawer showing a JWT-authenticated session",
  },
  {
    id: "realtime-spa",
    title: "Real-time gaming platform SPAs",
    tagline: "Live data at speed — WebSocket-driven Angular single-page applications.",
    description:
      "Dynamic single-page applications for casino-based platforms, built in Angular and TypeScript at KeyPress IT Solution. Implemented WebSocket-based real-time communication so live data flowed to the UI continuously rather than on refresh, and improved responsiveness by optimising components and cutting unnecessary API calls. Proprietary product — described here rather than linked.",
    badges: ["Proprietary", "Real-time"],
    stack: ["Angular", "TypeScript", "WebSockets", "RxJS", "JavaScript"],
    frameLabel: "live data stream",
  },
];

export const jobs: Job[] = [
  {
    company: "Lifemaan",
    role: "Software Engineer · Hospital Management System (SaaS)",
    period: "Aug 2025 — Present",
    location: "Surat, India",
    logo: "assets/logo-lifemaan.png",
    points: [
      "Build a healthcare SaaS Hospital Management System end to end across an Angular front end and a Node.js/Express REST API, having moved from front end into end-to-end ownership.",
      "Designed and implemented REST APIs in Node and Express covering request validation, authentication, error handling and consistent response contracts.",
      "Modelled and maintained MongoDB collections with Mongoose — schema design, indexing and aggregation pipelines for reporting-heavy screens.",
      "Built a role-based permission module with token-based authentication, enforcing permission-driven access across both the UI and the API.",
      "Designed an advanced printing module with real-time preview, so print output matches on-screen rendering exactly.",
      "Work in an Angular monorepo on shared library architecture, developing reusable component and feature libraries consumed across the platform.",
      "Improved performance across the stack by optimising database queries and indexes and reducing unnecessary client API calls.",
      "Debug production issues across the stack, tracing defects from UI through API and data layers to verified fixes.",
    ],
  },
  {
    company: "KeyPress IT Solution",
    role: "Angular Developer",
    period: "Sep 2023 — Aug 2025",
    location: "Surat, India",
    points: [
      "Developed and maintained dynamic single-page applications for casino-based platforms using Angular, JavaScript and TypeScript.",
      "Implemented WebSocket-based real-time communication for live data updates and improved interactivity.",
      "Improved application performance by optimising components and reducing unnecessary API calls.",
      "Moved into backend work — learning ASP.NET Core Web API and writing SQL Server stored procedures to support application data needs.",
      "Collaborated with cross-functional teams on scalable, maintainable solutions and improved development standards.",
    ],
  },
  {
    company: "Actoscript",
    role: "Junior Software Developer",
    period: "May 2022 — Apr 2023",
    location: "Surat, India",
    points: [
      "Developed responsive web applications using HTML, CSS, Bootstrap and JavaScript.",
      "Translated UI/UX designs into clean, maintainable front-end code.",
      "Improved usability and layout consistency across devices and screen sizes.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "JAIN (Deemed-to-be University)",
    place: "Bengaluru, India",
    period: "2023 — 2025",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Veer Narmad South Gujarat University",
    place: "Surat, India",
    period: "2020 — 2023",
  },
];

export const skillGroups = [
  {
    id: "languages",
    title: "Languages",
    items: ["C#", "TypeScript", "JavaScript", "SQL", "C++", "C"],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: [
      "Angular",
      "RxJS",
      "Angular Libraries",
      "Monorepo architecture",
      "HTML",
      "CSS",
      "SCSS",
      "Bootstrap",
      "NgBootstrap",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: [
      "ASP.NET Core Web API (.NET 6)",
      "LINQ",
      "Dependency injection",
      "Middleware",
      "REST API design",
      "Swagger / OpenAPI",
      "Node.js",
      "Express.js",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    items: ["SQL Server", "SSMS", "Stored procedures", "MongoDB", "Mongoose"],
  },
  {
    id: "concepts",
    title: "Concepts",
    items: [
      "OOP",
      "JWT authentication",
      "Role-based access control",
      "WebSockets",
      "Unit testing",
      "E2E testing",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & deployment",
    items: [
      "AWS EC2",
      "Amazon S3",
      "AWS IAM",
      "Nginx",
      "Reverse proxy",
      "TLS / HTTPS",
      "Linux server setup",
    ],
  },
  {
    id: "ai",
    title: "AI engineering",
    items: [
      "Agentic AI",
      "RAG",
      "Vector databases",
      "Claude",
      "Prompt design",
      "LLM API integration",
    ],
  },
  {
    id: "tools",
    title: "Developer tools",
    items: [
      "Git",
      "GitLab",
      "Visual Studio",
      "VS Code",
      "SSMS",
      "Postman",
      "Swagger",
      "Playwright",
    ],
  },
];

export const marquee = [
  "Angular",
  "TypeScript",
  "C#",
  "ASP.NET Core",
  "Node.js",
  "Express",
  "RxJS",
  "MongoDB",
  "SQL Server",
  "Mongoose",
  "LINQ",
  "JWT",
  "WebSockets",
  "Swagger",
  "AWS",
  "EC2",
  "S3",
  "IAM",
  "Nginx",
  "Agentic AI",
  "RAG",
  "Vector DBs",
  "SCSS",
  "Playwright",
  "Git",
];

export const navLinks = [
  { id: "what", label: "What I do" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

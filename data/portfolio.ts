export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  techStack: string[];
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    infrastructure: string;
  };
  keyFeatures: string[];
  challenges: { challenge: string; solution: string }[];
  liveUrl: string;
  githubUrl: string;
  category: string[];
  stats: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface TechCategory {
  name: string;
  icon: string;
  items: { name: string; level: number }[];
}

export const projects: Project[] = [
  {
    id: "saas-dashboard",
    title: "Nexus Analytics",
    tagline: "Real-time SaaS analytics platform processing 50M+ events daily",
    problem:
      "Enterprise clients needed a unified analytics dashboard to monitor user behavior, revenue metrics, and system health across multiple products. Existing solutions were fragmented, slow, and couldn't handle real-time data at scale.",
    solution:
      "Built a high-performance analytics platform with real-time streaming, custom metric pipelines, and interactive visualizations that reduced report generation time from hours to seconds.",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "ClickHouse",
      "Tailwind CSS",
      "Docker",
      "Kubernetes",
    ],
    architecture: {
      frontend:
        "Next.js 14 App Router with Server Components, React Query for data fetching, Recharts for visualizations, and Tailwind for styling.",
      backend:
        "Microservices architecture with Node.js, Express, and Fastify. Event-driven with Apache Kafka for real-time data ingestion.",
      database:
        "PostgreSQL for transactional data, ClickHouse for OLAP analytics, Redis for caching and session management.",
      infrastructure:
        "Docker containers orchestrated with Kubernetes on AWS EKS. CI/CD via GitHub Actions. Monitoring with Prometheus and Grafana.",
    },
    keyFeatures: [
      "Real-time event streaming with sub-second latency",
      "Custom SQL query builder for ad-hoc analysis",
      "Role-based access control with granular permissions",
      "Automated report scheduling and PDF export",
      "Multi-tenant architecture with data isolation",
    ],
    challenges: [
      {
        challenge:
          "Querying billions of rows caused 30+ second response times",
        solution:
          "Implemented ClickHouse with materialized views and partitioned tables. Added Redis caching layer with cache invalidation strategies.",
      },
      {
        challenge: "Real-time updates without overwhelming the client",
        solution:
          "Built a WebSocket gateway with connection pooling and message batching. Implemented debounced updates for high-frequency metrics.",
      },
      {
        challenge: "Multi-tenant data isolation at scale",
        solution:
          "Designed row-level security policies in PostgreSQL and tenant-aware query builders to prevent cross-tenant data leaks.",
      },
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: ["Full Stack", "SaaS", "Data"],
    stats: [
      { label: "Daily Events", value: "50M+" },
      { label: "Query Latency", value: "<200ms" },
      { label: "Uptime", value: "99.99%" },
      { label: "Active Users", value: "12K+" },
    ],
  },
  {
    id: "ecommerce-platform",
    title: "Meridian Commerce",
    tagline: "Headless e-commerce platform with AI-powered recommendations",
    problem:
      "A mid-size retailer needed to migrate from a monolithic legacy platform to a modern headless architecture. The existing system couldn't handle peak traffic during sales events and lacked personalization capabilities.",
    solution:
      "Architected and built a headless e-commerce platform with a custom CMS, AI-driven product recommendations, and elastic scaling that handled 10x traffic spikes without degradation.",
    techStack: [
      "React 18",
      "Node.js",
      "GraphQL",
      "MongoDB",
      "Elasticsearch",
      "TensorFlow.js",
      "AWS Lambda",
      "Stripe",
    ],
    architecture: {
      frontend:
        "React 18 with concurrent features, custom design system, and GraphQL client with persisted queries for optimal performance.",
      backend:
        "Node.js microservices with Apollo Federation for GraphQL schema stitching. Serverless functions for image processing and inventory sync.",
      database:
        "MongoDB for product catalog (flexible schema), PostgreSQL for orders/transactions, Elasticsearch for search and filtering.",
      infrastructure:
        "AWS infrastructure with CloudFront CDN, S3 for media, Lambda for serverless compute, and Auto Scaling Groups for compute nodes.",
    },
    keyFeatures: [
      "AI-powered product recommendations with real-time learning",
      "Headless CMS with drag-and-drop page builder",
      "Multi-currency and multi-language support",
      "Advanced inventory management with low-stock alerts",
      "One-click checkout with Stripe integration",
    ],
    challenges: [
      {
        challenge: "Search relevance across 500K+ products",
        solution:
          "Built a custom Elasticsearch pipeline with synonym expansion, fuzzy matching, and ML-based ranking that improved search CTR by 40%.",
      },
      {
        challenge: "Cart abandonment rate of 72%",
        solution:
          "Implemented persistent carts, one-click checkout, and real-time inventory locking. Reduced abandonment to 48%.",
      },
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: ["Full Stack", "E-commerce", "AI"],
    stats: [
      { label: "Products", value: "500K+" },
      { label: "Peak RPS", value: "25K" },
      { label: "Search CTR", value: "+40%" },
      { label: "Conversion", value: "+28%" },
    ],
  },
  {
    id: "collaborative-editor",
    title: "SyncWrite",
    tagline: "Real-time collaborative document editor with conflict-free replication",
    problem:
      "Teams needed a lightweight, self-hosted alternative to Google Docs with offline support, end-to-end encryption, and full data ownership. Existing open-source solutions were complex to deploy and lacked mobile support.",
    solution:
      "Built a CRDT-based collaborative editor with offline-first architecture, E2E encryption, and a deployment system that spins up in under 5 minutes.",
    techStack: [
      "TypeScript",
      "Yjs",
      "WebRTC",
      "SQLite",
      "Tauri",
      "Rust",
      "Vite",
      "TipTap",
    ],
    architecture: {
      frontend:
        "Vite + React with TipTap editor framework. Yjs for CRDT state management. WebRTC for P2P sync when possible.",
      backend:
        "Lightweight signaling server with WebSocket fallback. Rust-based sync server for high-throughput operations.",
      database:
        "SQLite with WAL mode for local-first storage. Automatic cloud backup with client-side encryption.",
      infrastructure:
        "Desktop app via Tauri (Rust). Self-hosted Docker deployment. Progressive Web App for mobile.",
    },
    keyFeatures: [
      "Offline-first with automatic conflict resolution",
      "End-to-end encryption for all documents",
      "Real-time cursors and presence indicators",
      "Version history with diff visualization",
      "Desktop, web, and mobile support",
    ],
    challenges: [
      {
        challenge: "Conflict resolution in offline scenarios",
        solution:
          "Implemented Yjs CRDT with custom awareness protocol. Handles concurrent edits gracefully without data loss.",
      },
      {
        challenge: "Large document performance (100K+ words)",
        solution:
          "Built virtualized rendering with incremental sync. Documents load in <1s regardless of size.",
      },
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: ["Frontend", "Systems", "Open Source"],
    stats: [
      { label: "GitHub Stars", value: "3.2K" },
      { label: "Active Users", value: "8K+" },
      { label: "Sync Latency", value: "<50ms" },
      { label: "Deploy Time", value: "<5min" },
    ],
  },
  {
    id: "devops-platform",
    title: "PipelineForge",
    tagline: "Self-hosted CI/CD platform with infrastructure-as-code deployment",
    problem:
      "Small development teams struggled with complex CI/CD setup, environment drift, and lack of visibility into deployment pipelines. Cloud CI solutions became prohibitively expensive at scale.",
    solution:
      "Created an open-source CI/CD platform with visual pipeline builder, infrastructure-as-code generation, and cost-optimized runner orchestration.",
    techStack: [
      "Go",
      "React",
      "PostgreSQL",
      "Docker",
      "Terraform",
      "gRPC",
      "Prometheus",
      "NATS",
    ],
    architecture: {
      frontend:
        "React with D3.js for pipeline visualization. Real-time logs via Server-Sent Events. Monaco Editor for YAML editing.",
      backend:
        "Go microservices with gRPC for internal communication. NATS for event streaming. Custom container runtime for isolated builds.",
      database:
        "PostgreSQL for metadata and pipeline definitions. S3-compatible storage for build artifacts and logs.",
      infrastructure:
        "Self-hosted with Docker Compose or Kubernetes. Terraform modules for cloud provisioning. Runner auto-scaling based on queue depth.",
    },
    keyFeatures: [
      "Visual drag-and-drop pipeline builder",
      "Infrastructure-as-code generation (Terraform, Pulumi)",
      "Matrix builds with parallel execution",
      "Cost tracking and runner optimization",
      "GitHub/GitLab/Bitbucket integration",
    ],
    challenges: [
      {
        challenge: "Build isolation without VM overhead",
        solution:
          "Built a custom container runtime using Linux namespaces and cgroups. Achieves VM-level isolation with container-level performance.",
      },
      {
        challenge: "Runner cost optimization for sporadic workloads",
        solution:
          "Implemented predictive auto-scaling with spot instance integration. Reduced CI costs by 65% compared to GitHub Actions.",
      },
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: ["Backend", "DevOps", "Open Source"],
    stats: [
      { label: "GitHub Stars", value: "5.1K" },
      { label: "Builds / Day", value: "120K+" },
      { label: "Cost Savings", value: "65%" },
      { label: "Contributors", value: "87" },
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Vercel",
    role: "Senior Full Stack Engineer",
    period: "2022 — Present",
    description:
      "Leading the development of analytics and observability features for the Vercel platform. Architecting real-time data pipelines and building developer-facing APIs.",
    achievements: [
      "Reduced API latency by 60% through query optimization and edge caching",
      "Led migration of monolithic analytics service to microservices",
      "Mentored 4 junior engineers and established code review standards",
      "Shipped 30+ features with 99.9% uptime commitment",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Kafka", "ClickHouse"],
  },
  {
    id: "exp-2",
    company: "Stripe",
    role: "Full Stack Developer",
    period: "2020 — 2022",
    description:
      "Built payment infrastructure tools and merchant dashboards. Focused on performance optimization and developer experience for the Stripe Dashboard.",
    achievements: [
      "Rebuilt checkout flow reducing conversion time by 35%",
      "Implemented real-time fraud detection dashboard",
      "Created internal design system used by 15+ teams",
      "Optimized database queries reducing load by 45%",
    ],
    tech: ["React", "Ruby", "PostgreSQL", "Elasticsearch", "GraphQL"],
  },
  {
    id: "exp-3",
    company: "Shopify",
    role: "Software Engineer",
    period: "2018 — 2020",
    description:
      "Worked on the Shopify App Store and developer platform. Built APIs and tools that power the ecosystem of 8,000+ third-party apps.",
    achievements: [
      "Developed GraphQL API serving 2M+ daily requests",
      "Built app review automation reducing review time by 50%",
      "Improved search relevance increasing app installs by 22%",
    ],
    tech: ["Ruby on Rails", "React", "MySQL", "Redis", "GraphQL"],
  },
  {
    id: "exp-4",
    company: "Freelance",
    role: "Full Stack Consultant",
    period: "2016 — 2018",
    description:
      "Consulted for startups and agencies on web application architecture, performance optimization, and technical strategy.",
    achievements: [
      "Delivered 20+ projects across fintech, healthtech, and e-commerce",
      "Reduced infrastructure costs by average of 40% for clients",
      "Established long-term partnerships with 5 recurring clients",
    ],
    tech: ["Node.js", "React", "Python", "AWS", "Docker"],
  },
];

export const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    icon: "Layout",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vue.js", level: 80 },
      { name: "WebGL / Three.js", level: 70 },
    ],
  },
  {
    name: "Backend",
    icon: "Server",
    items: [
      { name: "Node.js / Express", level: 95 },
      { name: "Go", level: 85 },
      { name: "Python / FastAPI", level: 80 },
      { name: "GraphQL", level: 90 },
      { name: "gRPC", level: 75 },
    ],
  },
  {
    name: "Databases",
    icon: "Database",
    items: [
      { name: "PostgreSQL", level: 95 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 90 },
      { name: "ClickHouse", level: 80 },
      { name: "Elasticsearch", level: 85 },
    ],
  },
  {
    name: "DevOps & Cloud",
    icon: "Cloud",
    items: [
      { name: "Docker / Kubernetes", level: 90 },
      { name: "AWS / GCP", level: 90 },
      { name: "Terraform", level: 85 },
      { name: "CI/CD (GitHub Actions)", level: 90 },
      { name: "Prometheus / Grafana", level: 80 },
    ],
  },
];

export const githubActivity = [
  { day: "Mon", commits: 12, prs: 3, reviews: 5 },
  { day: "Tue", commits: 18, prs: 2, reviews: 8 },
  { day: "Wed", commits: 8, prs: 4, reviews: 3 },
  { day: "Thu", commits: 22, prs: 1, reviews: 6 },
  { day: "Fri", commits: 15, prs: 3, reviews: 4 },
  { day: "Sat", commits: 5, prs: 0, reviews: 2 },
  { day: "Sun", commits: 3, prs: 1, reviews: 1 },
];

export const githubRepos = [
  { name: "nexus-analytics", stars: 1240, language: "TypeScript", desc: "Real-time analytics platform" },
  { name: "pipeline-forge", stars: 5100, language: "Go", desc: "Self-hosted CI/CD platform" },
  { name: "sync-write", stars: 3200, language: "TypeScript", desc: "CRDT collaborative editor" },
  { name: "meridian-commerce", stars: 890, language: "TypeScript", desc: "Headless e-commerce" },
  { name: "rust-raft", stars: 2100, language: "Rust", desc: "Raft consensus implementation" },
  { name: "edge-cache", stars: 1560, language: "Go", desc: "Distributed edge caching layer" },
];

export const allTechFilters = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "SaaS",
  "E-commerce",
  "AI",
  "DevOps",
  "Data",
  "Systems",
  "Open Source",
];

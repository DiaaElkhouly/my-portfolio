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
  liveUrl: string | null;
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
    id: "erp-ams",
    title: "IMS Manufacturing ERP",
    tagline:
      "Integrated manufacturing system for inventory, production, purchasing, and sales",
    problem:
      "Manufacturing operations need one reliable workflow for stock, production planning, material requirements, sales, and purchasing, with access limited by each employee's role.",
    solution:
      "Built an integrated ERP with database-backed workflows for inventory, warehouse, production, BOM, MRP, sales, purchasing, reporting, and role-based access control.",
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
      "Tailwind CSS",
      "TanStack Query",
      "Zod",
    ],
    architecture: {
      frontend:
        "Next.js 15 App Router with React 19, reusable dashboard components, TanStack Query, and Tailwind CSS.",
      backend:
        "Next.js REST route handlers with credentials-based NextAuth and a shared RBAC permission matrix enforced in middleware, APIs, and navigation.",
      database:
        "PostgreSQL through Prisma, with a seeded manufacturing dataset and persistent records for operational workflows.",
      infrastructure:
        "Deployed on Vercel, with environment-based PostgreSQL configuration and database migration/seed scripts.",
    },
    keyFeatures: [
      "Role-based access for administrators and operational teams",
      "Inventory and warehouse management with stock visibility",
      "Production orders, bills of materials, and material requirements planning",
      "Sales orders and purchasing workflows with status transitions",
      "Dashboard KPIs, inventory valuation, and order-status reports",
    ],
    challenges: [
      {
        challenge: "Keeping access rules consistent across the application",
        solution:
          "The same role-to-module permission matrix is checked by middleware, API handlers, and filtered sidebar navigation.",
      },
      {
        challenge:
          "Keeping stock aligned with production and purchasing activity",
        solution:
          "Workflow transitions update inventory when production orders are completed and purchase orders are received.",
      },
    ],
    liveUrl: "https://erp-ams.vercel.app/",
    githubUrl: "https://github.com/DiaaElkhouly/erp-ams",
    category: ["Full Stack", "ERP", "SaaS"],
    stats: [
      { label: "Core Areas", value: "ERP" },
      { label: "Access", value: "Role-based" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Demo", value: "Live" },
    ],
  },
  {
    id: "pharmacy-store",
    title: "Dr. Mohamed Awad Pharmacy",
    tagline:
      "Arabic online pharmacy and personal-care storefront with a live catalog",
    problem:
      "Customers need a clear way to discover pharmacy, medical, and personal-care products, compare prices and availability, and place orders online.",
    solution:
      "Built an Arabic storefront with categorized product browsing, price and availability states, a shopping cart, checkout, and a separate admin entry point.",
    techStack: ["Next.js 16", "React 19", "JavaScript", "Tailwind CSS 4"],
    architecture: {
      frontend:
        "Next.js and React storefront with Arabic product browsing, category navigation, product cards, cart, and checkout pages.",
      backend:
        "Next.js application with storefront and dashboard routes. The public repository README does not document the API design.",
      database:
        "The repository contains a models layer, but its public documentation does not specify the database engine.",
      infrastructure: "Live deployment hosted on Vercel.",
    },
    keyFeatures: [
      "Arabic storefront for pharmacy, medical, and personal-care products",
      "Eight product categories with a live 22-item catalog",
      "Product pricing, discounts, and stock-availability labels",
      "Shopping cart and checkout routes",
      "Separate admin dashboard entry point",
    ],
    challenges: [
      {
        challenge: "Making a varied product catalog easy to browse",
        solution:
          "Grouped products into clear categories and presented prices, discounts, and availability directly in the catalog.",
      },
      {
        challenge: "Supporting the full shopping journey in Arabic",
        solution:
          "Connected product browsing to dedicated cart and checkout routes in the deployed storefront.",
      },
    ],
    liveUrl: "https://dr-mohamedawad-pharmacy.vercel.app/",
    githubUrl: "https://github.com/DiaaElkhouly/dr-mohamedawad-pharmacy",
    category: ["E-commerce", "Next.js", "Healthcare"],
    stats: [
      { label: "Products", value: "22" },
      { label: "Categories", value: "8" },
      { label: "Language", value: "Arabic" },
      { label: "Demo", value: "Live" },
    ],
  },
  {
    id: "ve-artz",
    title: "Ve Artz Artist Portfolio",
    tagline:
      "An online portfolio for artist Omar Salah and his featured video work",
    problem:
      "An artist needs a focused online presence to introduce their work and make featured videos and social profiles easy to discover.",
    solution:
      "Built a Next.js portfolio that presents Omar Salah's creative work, recently updated video content, and social links in one place.",
    techStack: ["Next.js", "JavaScript", "CSS"],
    architecture: {
      frontend:
        "Next.js application organized into app, components, data, and public asset directories.",
      backend: "No backend service is documented in the public repository.",
      database:
        "No external database is documented; the repository includes a data directory for portfolio content.",
      infrastructure:
        "The project source and assets are available on GitHub. No active public demo URL could be confirmed.",
    },
    keyFeatures: [
      "Artist-focused portfolio presentation",
      "Featured video content",
      "Artist imagery and social profile links",
      "Next.js application structure with reusable components",
    ],
    challenges: [
      {
        challenge: "Making video work the focus of an artist portfolio",
        solution:
          "Organized the experience around featured creative content and updated the portfolio with additional videos.",
      },
      {
        challenge: "Connecting the portfolio to the artist's identity",
        solution:
          "Updated the artist imagery and social profile details to represent Omar Salah.",
      },
    ],
    liveUrl: null,
    githubUrl: "https://github.com/DiaaElkhouly/ve-artz",
    category: ["Frontend", "Brand"],
    stats: [
      { label: "Project Type", value: "Portfolio" },
      { label: "Framework", value: "Next.js" },
      { label: "Language", value: "JavaScript" },
      { label: "Source", value: "Public" },
    ],
  },
  {
    id: "cadenza",
    title: "Cadenza",
    tagline: "Premium fragrance and skincare brand experience",
    problem:
      "A product brand needs a polished online presence that introduces its identity while making fragrance, deodorant, and skincare collections easy to explore.",
    solution:
      "Created a multi-page brand site with product collections, product details, an about page, and a team section.",
    techStack: [
      "React 19",
      "Vite 7",
      "React Router 7",
      "Material UI",
      "Framer Motion",
    ],
    architecture: {
      frontend:
        "React single-page application built with Vite, React Router, Material UI, and Framer Motion.",
      backend:
        "No backend service is documented in the public project; the live experience is a client-side brand website.",
      database:
        "No external database is documented; the site presents product and brand content.",
      infrastructure: "Built with Vite and deployed to GitHub Pages.",
    },
    keyFeatures: [
      "Dedicated fragrance, deodorant, and skincare collections",
      "Product detail views for featured items",
      "About and team pages for brand storytelling",
      "Contact details and social links",
    ],
    challenges: [
      {
        challenge:
          "Presenting different product lines under one premium identity",
        solution:
          "Used a consistent brand voice and grouped products into distinct collections for quick browsing.",
      },
      {
        challenge: "Helping visitors move from discovery to product details",
        solution:
          "Added collection entry points and product detail links, alongside dedicated brand and team pages.",
      },
    ],
    liveUrl: "https://diaaelkhouly.github.io/cadenza/",
    githubUrl: "https://github.com/DiaaElkhouly/cadenza",
    category: ["Frontend", "Brand", "E-commerce"],
    stats: [
      { label: "Collections", value: "3" },
      { label: "Framework", value: "React" },
      { label: "Routing", value: "React Router" },
      { label: "Demo", value: "Live" },
    ],
  },
  {
    id: "nefer",
    title: "NEFER",
    tagline: "Beauty brand storefront inspired by ancient Egyptian identity",
    problem:
      "A beauty brand needs to connect its product collections with a distinctive story and make the catalog and brand information easy to navigate.",
    solution:
      "Built a branded product experience around NEFER's identity, with separate product collections, brand information, team details, and contact links.",
    techStack: [
      "React 19",
      "Vite 7",
      "React Router 7",
      "Material UI",
      "Framer Motion",
    ],
    architecture: {
      frontend:
        "React single-page application built with Vite, React Router, Material UI, and Framer Motion.",
      backend:
        "No backend service is documented in the public project; the live experience is a client-side brand website.",
      database:
        "No external database is documented; the site presents product and brand content.",
      infrastructure: "Built with Vite and deployed to GitHub Pages.",
    },
    keyFeatures: [
      "Body splash, body lotion, and lip-care collections",
      "Product-focused home page with collection navigation",
      "About and team pages for brand storytelling",
      "Contact and social links for customer discovery",
    ],
    challenges: [
      {
        challenge:
          "Giving the brand a recognizable identity beyond a product grid",
        solution:
          "Anchored the site in NEFER's ancient Egyptian-inspired story and carried the identity through its product and brand pages.",
      },
      {
        challenge: "Making several beauty categories discoverable",
        solution:
          "Separated body splash, lotion, and lip-care products into direct collection entry points.",
      },
    ],
    liveUrl: "https://diaaelkhouly.github.io/NEFER/",
    githubUrl: "https://github.com/DiaaElkhouly/NEFER",
    category: ["Frontend", "Brand", "E-commerce"],
    stats: [
      { label: "Collections", value: "3" },
      { label: "Framework", value: "React" },
      { label: "Routing", value: "React Router" },
      { label: "Demo", value: "Live" },
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: "freelance-web-developer",
    company: "Freelance",
    role: "Freelance Web Developer",
    period: "Independent work",
    description:
      "Designing, building, and publishing web experiences for businesses and product brands.",
    achievements: [
      "Built and deployed an Arabic pharmacy storefront with product categories, cart, checkout, and an admin dashboard entry point.",
      "Developed and published Cadenza and NEFER product-brand websites with dedicated collections and brand pages.",
      "Delivered responsive React and Next.js experiences, including live deployments on Vercel and GitHub Pages.",
    ],
    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "Vite",
      "Material UI",
      "Tailwind CSS",
    ],
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
  {
    name: "nexus-analytics",
    stars: 1240,
    language: "TypeScript",
    desc: "Real-time analytics platform",
  },
  {
    name: "pipeline-forge",
    stars: 5100,
    language: "Go",
    desc: "Self-hosted CI/CD platform",
  },
  {
    name: "sync-write",
    stars: 3200,
    language: "TypeScript",
    desc: "CRDT collaborative editor",
  },
  {
    name: "meridian-commerce",
    stars: 890,
    language: "TypeScript",
    desc: "Headless e-commerce",
  },
  {
    name: "rust-raft",
    stars: 2100,
    language: "Rust",
    desc: "Raft consensus implementation",
  },
  {
    name: "edge-cache",
    stars: 1560,
    language: "Go",
    desc: "Distributed edge caching layer",
  },
];

export const allTechFilters = [
  "All",
  "Full Stack",
  "ERP",
  "E-commerce",
  "Healthcare",
  "Frontend",
  "Brand",
];

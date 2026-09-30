"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

type Category = "all" | "frontend" | "backend" | "database" | "tools";

interface Tech {
  name: string;
  category: Category;
  color: string;
  icon: string;
}

const technologies: Tech[] = [
  { name: "React", category: "frontend", color: "#61DAFB", icon: "⚛" },
  { name: "Next.js", category: "frontend", color: "#717785", icon: "▲" },
  { name: "TypeScript", category: "frontend", color: "#3178C6", icon: "TS" },
  { name: "JavaScript", category: "frontend", color: "#F7DF1E", icon: "JS" },
  { name: "Tailwind CSS", category: "frontend", color: "#06B6D4", icon: "🎨" },
  { name: "HTML5", category: "frontend", color: "#E34F26", icon: "🌐" },
  { name: "CSS3", category: "frontend", color: "#1572B6", icon: "🎭" },
  { name: "Node.js", category: "backend", color: "#339933", icon: "🟢" },
  { name: "Laravel", category: "backend", color: "#FF2D20", icon: "L" },
  { name: "GraphQL", category: "backend", color: "#E10098", icon: "◈" },
  { name: "REST APIs", category: "backend", color: "#FF6C37", icon: "🔗" },
  { name: "PostgreSQL", category: "database", color: "#4169E1", icon: "🐘" },
  { name: "Prisma", category: "database", color: "#2D3748", icon: "◆" },
  { name: "MongoDB", category: "database", color: "#47A248", icon: "🍃" },
  { name: "MySQL", category: "database", color: "#4479A1", icon: "🐬" },
  { name: "AWS", category: "tools", color: "#FF9900", icon: "☁" },
  { name: "Git", category: "tools", color: "#F05032", icon: "🔀" },
  { name: "CI/CD", category: "tools", color: "#FC6D26", icon: "🔄" },
  { name: "Linux", category: "tools", color: "#FCC624", icon: "🐧" },
  { name: "Figma", category: "tools", color: "#F24E1E", icon: "🎯" },
];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Databases" },
  { key: "tools", label: "Tools & DevOps" },
];

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered =
    activeCategory === "all"
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <section id="tech" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Tech Stack"
          title="Tools & technologies"
          description="The stack I reach for when building products end to end."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-10 flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              aria-pressed={activeCategory === cat.key}
              className={`rounded-lg border px-4 py-2 text-sm font-mono transition-colors ${
                activeCategory === cat.key
                  ? "border-accent-cyan/30 bg-accent-cyan/10 font-medium text-accent-cyan"
                  : "border-border text-text-secondary hover:border-border-hover hover:text-text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <motion.ul
          layout
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {filtered.map((tech, i) => (
            <motion.li
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: i * 0.03 }}
              className="group relative rounded-xl border border-border bg-bg-card p-4 text-center transition-colors hover:border-accent-cyan/20"
              title={tech.name}
            >
              <div className="mb-2 text-2xl" aria-hidden="true">
                {tech.icon}
              </div>
              <div className="text-sm font-medium text-text-primary">
                {tech.name}
              </div>
              <span
                aria-hidden
                className="absolute right-2 top-2 h-2 w-2 rounded-full opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                style={{ backgroundColor: tech.color }}
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code2,
  ChevronDown,
  ChevronUp,
  Filter,
  Cpu,
  Database,
  Layout,
  Wrench,
  AlertTriangle,
  CheckCircle2,
  Star,
  Server,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { projects, allTechFilters } from "../data/portfolio";
import type { Project } from "../data/portfolio";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden hover:border-[var(--color-accent-cyan)]/20 transition-colors"
    >
      {/* Header */}
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)]">
                {project.title}
              </h3>
              <div className="flex gap-1.5">
                {project.category.slice(0, 2).map((cat) => (
                  <span
                    key={cat}
                    className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-full bg-[var(--color-accent-cyan)]/10 text-[var(--color-accent-cyan)] border border-[var(--color-accent-cyan)]/20"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base">
              {project.tagline}
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href={project.githubUrl}
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent-cyan)]/50 hover:text-[var(--color-accent-cyan)] transition-colors"
            >
              <Code2 className="w-3.5 h-3.5" />
              GitHub
            </a>
            <a
              href={project.liveUrl}
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono rounded-lg bg-[var(--color-accent-cyan)]/10 text-[var(--color-accent-cyan)] border border-[var(--color-accent-cyan)]/20 hover:bg-[var(--color-accent-cyan)]/20 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {project.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-3 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)]"
            >
              <div className="text-lg font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-[var(--color-accent-rose)]/5 border border-[var(--color-accent-rose)]/10">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-[var(--color-accent-rose)]" />
              <span className="text-xs font-mono font-medium text-[var(--color-accent-rose)] uppercase tracking-wider">
                Problem
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-accent-emerald)]/5 border border-[var(--color-accent-emerald)]/10">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-emerald)]" />
              <span className="text-xs font-mono font-medium text-[var(--color-accent-emerald)] uppercase tracking-wider">
                Solution
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expand/Collapse */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm font-mono text-[var(--color-accent-cyan)] hover:opacity-80 transition-opacity"
        >
          {expanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Hide case study details
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              View case study details
            </>
          )}
        </button>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-8 border-t border-[var(--color-border)] pt-6 space-y-8">
              {/* Architecture */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold mb-4">
                  <Cpu className="w-4 h-4 text-[var(--color-accent-purple)]" />
                  Architecture Overview
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                    <div className="flex items-center gap-2 mb-2">
                      <Layout className="w-3.5 h-3.5 text-[var(--color-accent-cyan)]" />
                      <span className="text-xs font-mono font-medium text-[var(--color-accent-cyan)]">
                        Frontend
                      </span>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {project.architecture.frontend}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                    <div className="flex items-center gap-2 mb-2">
                      <Server className="w-3.5 h-3.5 text-[var(--color-accent-purple)]" />
                      <span className="text-xs font-mono font-medium text-[var(--color-accent-purple)]">
                        Backend
                      </span>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {project.architecture.backend}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="w-3.5 h-3.5 text-[var(--color-accent-emerald)]" />
                      <span className="text-xs font-mono font-medium text-[var(--color-accent-emerald)]">
                        Database
                      </span>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {project.architecture.database}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                    <div className="flex items-center gap-2 mb-2">
                      <Wrench className="w-3.5 h-3.5 text-[var(--color-accent-rose)]" />
                      <span className="text-xs font-mono font-medium text-[var(--color-accent-rose)]">
                        Infrastructure
                      </span>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {project.architecture.infrastructure}
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-sm font-semibold mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.keyFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-emerald)] mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Solutions */}
              <div>
                <h4 className="text-sm font-semibold mb-3">
                  Challenges & Solutions
                </h4>
                <div className="space-y-3">
                  {project.challenges.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)]"
                    >
                      <div className="flex items-start gap-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-[var(--color-accent-rose)] mt-0.5 shrink-0" />
                        <span className="text-sm font-medium text-[var(--color-text-primary)]">
                          {item.challenge}
                        </span>
                      </div>
                      <div className="flex items-start gap-2 ml-6">
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-emerald)] mt-0.5 shrink-0" />
                        <span className="text-sm text-[var(--color-text-secondary)]">
                          {item.solution}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-accent-blue)]/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          label="Projects"
          title="Case studies"
          description="Deep dives into real-world projects — from architecture decisions to production challenges."
        />

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide"
        >
          <Filter className="w-4 h-4 text-[var(--color-text-muted)] shrink-0" />
          {allTechFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg whitespace-nowrap transition-colors ${
                activeFilter === filter
                  ? "bg-[var(--color-accent-cyan)]/10 text-[var(--color-accent-cyan)] border border-[var(--color-accent-cyan)]/30"
                  : "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub Repos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-5 h-5 text-[var(--color-accent-cyan)]" />
            <h3 className="text-lg font-semibold">Open Source Contributions</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: "nexus-analytics",
                stars: 1240,
                lang: "TypeScript",
                desc: "Real-time analytics platform",
              },
              {
                name: "pipeline-forge",
                stars: 5100,
                lang: "Go",
                desc: "Self-hosted CI/CD platform",
              },
              {
                name: "sync-write",
                stars: 3200,
                lang: "TypeScript",
                desc: "CRDT collaborative editor",
              },
              {
                name: "meridian-commerce",
                stars: 890,
                lang: "TypeScript",
                desc: "Headless e-commerce",
              },
              {
                name: "rust-raft",
                stars: 2100,
                lang: "Rust",
                desc: "Raft consensus implementation",
              },
              {
                name: "edge-cache",
                stars: 1560,
                lang: "Go",
                desc: "Distributed edge caching layer",
              },
            ].map((repo, i) => (
              <motion.a
                key={repo.name}
                href="#"
                onClick={(e) => e.preventDefault()}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-accent-cyan)]/30 hover:bg-[var(--color-bg-hover)] transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm text-[var(--color-accent-cyan)] group-hover:underline">
                    {repo.name}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
                    <Star className="w-3 h-3" />
                    {repo.stars >= 1000
                      ? `${(repo.stars / 1000).toFixed(1)}k`
                      : repo.stars}
                  </div>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] mb-3">
                  {repo.desc}
                </p>
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor:
                        repo.lang === "TypeScript"
                          ? "#3178c6"
                          : repo.lang === "Go"
                            ? "#00add8"
                            : repo.lang === "Rust"
                              ? "#dea584"
                              : "#a0a0b0",
                    }}
                  />
                  <span className="text-[10px] font-mono text-[var(--color-text-muted)]">
                    {repo.lang}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

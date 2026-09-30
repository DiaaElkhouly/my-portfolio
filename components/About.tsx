import { motion } from "framer-motion";
import { Terminal, Zap, Shield, Layers } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { TerminalCard } from "./TerminalCard";

const highlights = [
  {
    icon: Zap,
    title: "Thoughtful Interfaces",
    description:
      "I build clear, responsive interfaces that make products and their core workflows easy to understand.",
  },
  {
    icon: Layers,
    title: "Product-Focused",
    description:
      "From e-commerce storefronts to business tools, I focus on the needs of the people using the product.",
  },
  {
    icon: Shield,
    title: "Reliable Delivery",
    description:
      "I take projects from implementation through deployment, with attention to responsive layouts and maintainable code.",
  },
  {
    icon: Terminal,
    title: "Modern Web Stack",
    description:
      "I build web experiences with React, Next.js, JavaScript, and TypeScript.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="Engineering with purpose"
          description="I don't just write code — I solve problems, architect systems, and build products that scale."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio + Stats */}
          <div className="space-y-8">
            <TerminalCard title="~/about.md" delay={0}>
              <div className="code-block text-[var(--color-text-secondary)] space-y-4">
                <p>
                  <span className="text-[var(--color-accent-purple)]">
                    const
                  </span>{" "}
                  <span className="text-[var(--color-accent-cyan)]">
                    developer
                  </span>{" "}
                  <span className="text-[var(--color-text-primary)]">=</span>{" "}
                  <span className="text-[var(--color-text-primary)]">
                    {"{"}
                  </span>
                </p>
                <p className="pl-4">
                  <span className="text-[var(--color-accent-rose)]">name</span>
                  <span className="text-[var(--color-text-primary)]">
                    :
                  </span>{" "}
                  <span className="text-[var(--color-accent-emerald)]">
                    &quot;Diaa Elkhouly&quot;
                  </span>
                  <span className="text-[var(--color-text-primary)]">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-[var(--color-accent-rose)]">role</span>
                  <span className="text-[var(--color-text-primary)]">
                    :
                  </span>{" "}
                  <span className="text-[var(--color-accent-emerald)]">
                    &quot;Freelance Full-Stack Web Developer&quot;
                  </span>
                  <span className="text-[var(--color-text-primary)]">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-[var(--color-accent-rose)]">
                    focus
                  </span>
                  <span className="text-[var(--color-text-primary)]">:</span>{" "}
                  <span className="text-[var(--color-accent-emerald)]">
                    &quot;Web applications and digital experiences&quot;
                  </span>
                  <span className="text-[var(--color-text-primary)]">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-[var(--color-accent-rose)]">focus</span>
                  <span className="text-[var(--color-text-primary)]">
                    :
                  </span>{" "}
                  <span className="text-[var(--color-accent-emerald)]">
                    &quot;React, Next.js, e-commerce&quot;
                  </span>
                </p>
                <p>
                  <span className="text-[var(--color-text-primary)]">
                    {"}"}
                  </span>
                </p>
              </div>
            </TerminalCard>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { value: "React", label: "Core Stack" },
                { value: "Freelance", label: "Work Style" },
                { value: "Egypt", label: "Based In" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]"
                >
                  <div className="text-2xl md:text-3xl font-bold text-[var(--color-accent-cyan)]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)] font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Highlights */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-accent-cyan)]/30 hover:bg-[var(--color-bg-hover)] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-cyan)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent-cyan)]/20 transition-colors">
                  <item.icon className="w-5 h-5 text-[var(--color-accent-cyan)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

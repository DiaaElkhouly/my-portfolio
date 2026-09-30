import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { experiences } from "../data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent-cyan)]/3 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          label="Experience"
          title="Freelance experience"
          description="Selected websites and web applications built and published independently."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-border)] md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[var(--color-accent-cyan)] border-4 border-[var(--color-bg-primary)] md:-translate-x-1.5 mt-1.5 z-10" />

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}
              >
                <div
                  className={`p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-accent-cyan)]/20 transition-colors ${
                    i % 2 === 0 ? "md:text-left" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="w-4 h-4 text-[var(--color-accent-cyan)]" />
                    <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                      {exp.company}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-mono text-[var(--color-text-muted)]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                      >
                        <span className="w-1 h-1 rounded-full bg-[var(--color-accent-cyan)] mt-2 shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

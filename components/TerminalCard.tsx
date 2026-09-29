import { ReactNode } from "react";
import { motion } from "framer-motion";

interface TerminalCardProps {
  children: ReactNode;
  title?: string;
  className?: string;
  delay?: number;
}

export function TerminalCard({
  children,
  title,
  className = "",
  delay = 0,
}: TerminalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden ${className}`}
    >
      {title && (
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[var(--color-accent-rose)]" />
            <div className="w-3 h-3 rounded-full bg-[#fbbf24]" />
            <div className="w-3 h-3 rounded-full bg-[var(--color-accent-emerald)]" />
          </div>
          <span className="ml-2 text-xs font-mono text-[var(--color-text-muted)]">
            {title}
          </span>
        </div>
      )}
      <div className="p-5">{children}</div>
    </motion.div>
  );
}

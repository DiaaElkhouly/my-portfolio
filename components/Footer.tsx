import Image from "next/image";
import { Heart, Code2 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md overflow-hidden flex items-center justify-center ring-1 ring-[var(--color-border)]">
              <Image
                src="/icon.svg"
                alt="Diaa El Khouly logo"
                width={28}
                height={28}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-mono text-sm text-[var(--color-text-muted)]">
              DiaaElKhouly
            </span>
          </div>

          <div className="flex items-center gap-1 text-xs text-[var(--color-text-muted)] font-mono">
            <span>Built with</span>
            <Code2 className="w-3 h-3 text-[var(--color-accent-cyan)]" />
            <span>Next + Tailwind</span>
            <span className="mx-1">·</span>
            <Heart className="w-3 h-3 text-[var(--color-accent-rose)]" />
            <span>·</span>
            <span>{currentYear}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

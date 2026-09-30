"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle2,
  ArrowUpRight,
  MapPin,
  Clock,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent-purple)]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          label="Contact"
          title="Let's build something great"
          description="Have a project in mind or want to discuss architecture? I'm always open to interesting conversations."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]">
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-4">
                <a
                  href="mailto:alex@example.com"
                  className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-cyan)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent-cyan)]/20 transition-colors">
                    <Mail className="w-4 h-4 text-[var(--color-accent-cyan)]" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[var(--color-text-muted)] mb-0.5">
                      Email
                    </div>
                    <div>diaaelkhouly8@gmail.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-purple)]/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[var(--color-accent-purple)]" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[var(--color-text-muted)] mb-0.5">
                      Location
                    </div>
                    <div>EGYPT</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-emerald)]/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[var(--color-accent-emerald)]" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[var(--color-text-muted)] mb-0.5">
                      Availability
                    </div>
                    <div>Open to full-time & consulting</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]">
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {[
                  {
                    label: "GitHub",
                    url: "https://github.com/DiaaElkhouly",
                    color: "var(--color-accent-cyan)",
                  },
                  {
                    label: "LinkedIn",
                    url: "www.linkedin.com/in/diaa-elkhouly-42abb4339",
                    color: "var(--color-accent-blue)",
                  },
                  {
                    label: "Twitter / X",
                    url: "#",
                    color: "var(--color-accent-purple)",
                  },
                  {
                    label: "Dev.to",
                    url: "#",
                    color: "var(--color-accent-emerald)",
                  },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-[var(--color-bg-hover)] transition-colors group"
                  >
                    <span className="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors">
                      {link.label}
                    </span>
                    <ArrowUpRight
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: link.color }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="p-6 md:p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-[var(--color-accent-emerald)] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Message sent!</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Thanks for reaching out. I&apos;ll get back to you within 24
                    hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-[var(--color-text-muted)] mb-2 uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-primary)] text-sm placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cyan)]/50 focus:ring-1 focus:ring-[var(--color-accent-cyan)]/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[var(--color-text-muted)] mb-2 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-primary)] text-sm placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cyan)]/50 focus:ring-1 focus:ring-[var(--color-accent-cyan)]/20 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[var(--color-text-muted)] mb-2 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-primary)] text-sm placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cyan)]/50 focus:ring-1 focus:ring-[var(--color-accent-cyan)]/20 transition-all resize-none"
                      placeholder="Tell me about your project, timeline, and goals..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-blue)] text-[var(--color-bg-primary)] font-semibold text-sm hover:opacity-90 transition-opacity glow-cyan"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

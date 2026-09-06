"use client";

import { motion } from "framer-motion";
import { site } from "@/data/content";
import { staggerContainer, staggerItem, viewport } from "@/lib/animations";

const contactLinks = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "LinkedIn", value: "in/izza-iqbal-ab443930b", href: site.linkedin },
  { label: "GitHub", value: "Izz-aIqbal", href: site.github },
  { label: "Phone", value: "+92 333 8568444", href: `tel:${site.phone.replace(/\s/g, "")}` },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-espresso text-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div
            variants={staggerItem}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-4 h-px bg-amber" />
            <span className="font-mono text-xs uppercase tracking-widest text-amber">
              Get in touch
            </span>
            <span className="w-4 h-px bg-amber" />
          </motion.div>

          <motion.h2
            variants={staggerItem}
            className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-cream leading-tight mb-6"
          >
            Let&apos;s build something<br />
            <em className="text-amber">worth shipping.</em>
          </motion.h2>

          <motion.p variants={staggerItem} className="max-w-xl mx-auto text-[#C9C2B2] mb-14">
            Open to AI engineering, ML research, and full-stack roles — remote
            or Pakistan-based. Currently finishing my final year of BS AI.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-3 mb-16"
          >
            <motion.a
              href={site.resumeUrl}
              download="Izza_Iqbal_CV.pdf"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-amber text-espresso font-semibold text-sm px-8 py-4 rounded-sm hover:bg-cream transition-colors duration-300"
            >
              Download My Resume
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="max-w-6xl mx-auto px-6 md:px-8 border-t border-cream/10 flex flex-wrap"
      >
        {contactLinks.map((link, i) => (
          <motion.a
            key={link.label}
            variants={staggerItem}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`flex-1 min-w-[220px] py-8 px-5 font-mono text-sm text-[#C9C2B2] transition-colors duration-200 hover:text-cream hover:bg-cream/5 ${
              i < contactLinks.length - 1
                ? "border-r border-b md:border-r border-cream/10 max-md:border-r-0"
                : "border-b border-cream/10"
            }`}
          >
            <small className="block text-amber text-[10px] uppercase tracking-widest mb-2">
              {link.label}
            </small>
            {link.value}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/content";
import { staggerContainer, staggerItem, viewport } from "@/lib/animations";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 bg-sand/50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={staggerItem} className="flex items-center gap-3 mb-5">
            <span className="w-4 h-px bg-amber" />
            <span className="font-mono text-xs uppercase tracking-widest text-amber">
              Testimonials
            </span>
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl md:text-[2.75rem] text-charcoal mb-3"
          >
            What it&apos;s like working with me.
          </motion.h2>
          <motion.p variants={staggerItem} className="font-mono text-xs text-warmgray mb-12">
            Feedback from clients, partners, and teams I&apos;ve worked with.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="relative bg-cream border border-charcoal/10 rounded-sm p-8 card-hover"
            >
              <span className="absolute top-4 right-4 font-mono text-[9px] uppercase tracking-widest text-warmgray border border-charcoal/15 px-2.5 py-1 rounded-full">
                {t.tag}
              </span>
              <p className="font-display italic text-base text-charcoal mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-sand border border-charcoal/10 flex items-center justify-center font-mono text-xs text-amber">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-charcoal">{t.name}</div>
                  <div className="font-mono text-xs text-warmgray">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
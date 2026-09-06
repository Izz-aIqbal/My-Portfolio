"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/content";
import { staggerContainer, staggerItem, viewport } from "@/lib/animations";

const typeLabels: Record<string, string> = {
  internship: "Internship",
  fellowship: "Fellowship",
  simulation: "Simulation",
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 bg-espresso text-cream overflow-hidden">
      <div className="container-beams absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, transparent 49%, #FDFBF7 50%, transparent 51%)", backgroundSize: "80px 100%" }} />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={staggerItem} className="flex items-center gap-3 mb-5">
            <span className="w-4 h-px bg-amber" />
            <span className="font-mono text-xs uppercase tracking-widest text-amber">
              Experience
            </span>
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl md:text-[2.75rem] leading-tight text-cream mb-4"
          >
            Where I&apos;ve been <em className="text-amber">building</em>.
          </motion.h2>
          <motion.p variants={staggerItem} className="max-w-xl text-[#C9C2B2] mb-14">
            A mix of technical training, real client work, and competitive
            fellowships.
          </motion.p>
        </motion.div>

        <div className="space-y-0 relative">
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-cream/10 md:left-[15px]" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-10"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                variants={staggerItem}
                className="relative pl-10 md:pl-20"
              >
                <span className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-amber md:left-[8px]" />

                <div className="group border border-cream/10 rounded-sm p-6 md:p-7 bg-cream/[0.03] hover:bg-cream/[0.06] transition-colors duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-amber mb-2 block">
                        {typeLabels[exp.type]}
                      </span>
                      <h3 className="font-display text-xl text-cream">
                        {exp.role}
                      </h3>
                      <div className="text-sm text-[#C9C2B2]">
                        {exp.company}
                        {exp.location ? ` · ${exp.location}` : ""}
                      </div>
                    </div>
                    <span className="font-mono text-xs text-amber border border-amber/30 rounded-full px-3 py-1 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-[#C9C2B2] mt-4 mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((point) => (
                      <span
                        key={point}
                        className="font-mono text-[11px] text-[#C9C2B2] border border-cream/10 px-3 py-1.5 rounded-full"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
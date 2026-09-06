"use client";

import { motion } from "framer-motion";
import {
  education,
  site,
  skills,
} from "@/data/content";
import { staggerContainer, staggerItem, viewport } from "@/lib/animations";
import AnimatedSection from "@/components/AnimatedSection";

const processSteps = [
  {
    num: "01",
    title: "Research",
    desc: "Data exploration, problem framing, and constraint analysis before any code.",
  },
  {
    num: "02",
    title: "Architecture",
    desc: "Model, system, and interaction design mapped before implementation.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Clean, documented implementation with version control from day one.",
  },
  {
    num: "04",
    title: "Evaluate",
    desc: "Metrics, testing, and validation against real-world requirements.",
  },
  {
    num: "05",
    title: "Ship",
    desc: "Deployment, documentation, and iteration based on feedback.",
  },
];

export default function About() {
  return (
    <AnimatedSection id="about" className="py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-center"
        >
          {/* Photo */}
          <motion.div variants={staggerItem} className="relative">
            <div className="relative rounded-sm overflow-hidden border border-charcoal/10 shadow-[0_30px_60px_rgba(26,26,26,0.14)]">
              <div className="aspect-[3/4] bg-sand">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.jpg"
                  alt={`${site.name} — AI Engineer`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <motion.div
              variants={staggerItem}
              className="absolute -bottom-5 -right-3 md:-right-6 bg-espresso text-cream rounded-sm px-5 py-4 font-mono text-xs shadow-xl"
            >
              <b className="text-amber block font-display text-base mb-0.5">
                {education.lastSgpa} SGPA
              </b>
              Final Year · BS AI
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div variants={staggerItem}>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-4 h-px bg-amber" />
              <span className="font-mono text-xs uppercase tracking-widest text-amber">
                About
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-[2.75rem] leading-tight text-charcoal mb-6">
              Engineering intelligent systems with a designer&apos;s eye.
            </h2>
            <p className="text-warmgray mb-4">
              I&apos;m a final-year Artificial Intelligence student at PAF-IAST
              who builds across the full stack — from CPU-optimized medical
              imaging pipelines and financial forecasting models to modern web
              applications. My work sits at the intersection of machine
              learning, computer vision, and human-centric product design.
            </p>
            <p className="text-warmgray mb-4">
              Before focusing on AI, I spent years designing for real
              businesses — brand kits, marketing collateral, and product
              interfaces. That background means my models are built to be
              understood, and my interfaces are built to be used.
            </p>

            {/* Education card */}
            <div className="mt-8 border border-charcoal/10 rounded-sm bg-sand/60 p-6">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="font-display text-lg text-charcoal mb-1">
                    {education.degree}
                  </div>
                  <div className="text-sm text-warmgray">
                    {education.school}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-xs text-sage">
                    {education.period}
                  </div>
                  <div className="font-mono text-2xl font-bold text-charcoal mt-1">
                    {education.cgpa}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-warmgray">
                    CGPA
                  </div>
                </div>
              </div>
            </div>

            {/* Tool chips */}
            <div className="flex flex-wrap gap-2 mt-6">
              {skills.technical
                .concat(skills.ai)
                .slice(0, 12)
                .map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs border border-charcoal/15 text-warmgray px-3.5 py-1.5 rounded-full hover:border-sage hover:text-sage transition-colors"
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Process steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-20"
        >
          {processSteps.map((step) => (
            <motion.div
              key={step.num}
              variants={staggerItem}
              className="border-t-2 border-charcoal pt-5"
            >
              <span className="font-mono text-xs text-amber mb-3 block">
                {step.num}
              </span>
              <h3 className="text-base font-semibold text-charcoal mb-1.5">
                {step.title}
              </h3>
              <p className="text-xs text-warmgray leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
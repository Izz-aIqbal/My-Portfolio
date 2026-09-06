"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { heroTextLine, staggerContainer, staggerItem } from "@/lib/animations";
import { site, stats } from "@/data/content";
import Scene3D from "@/components/Scene3D";

const headlineLines = [
  { text: "Engineering", accent: false },
  { text: "Intelligent Systems", accent: true },
  { text: "& Human-Centric", accent: false },
  { text: "Web Experiences.", accent: true },
];

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".stat-num").forEach((element) => {
        const original = element.dataset.original ?? element.textContent ?? "";
        element.dataset.original = original;
        const suffix = original.match(/[^0-9.]+$/)?.[0] ?? "";
        const target = parseFloat(original) || 0;
        const obj = { value: 0 };
        gsap.to(obj, {
          value: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
          onUpdate: () => {
            element.textContent = Math.floor(obj.value).toString() + suffix;
          },
        });
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 90% 70% at 30% 0%, rgba(253,251,247,0.35) 0%, rgba(242,239,233,0.6) 60%), #FDFBF7",
      }}
    >
      <Scene3D />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 pt-32 pb-20 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div
            variants={staggerItem}
            className="flex items-center gap-3 mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
            <span className="font-mono text-xs tracking-widest uppercase text-warmgray">
              {site.location} · Open to AI & Software Roles
            </span>
          </motion.div>

          <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] leading-[1.02] tracking-[-0.01em] text-charcoal">
            {headlineLines.map((line, i) => (
              <motion.span
                key={i}
                variants={heroTextLine}
                className={`block ${
                  line.accent ? "italic text-amber" : ""
                }`}
              >
                {line.text}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={staggerItem}
            className="max-w-xl text-lg text-warmgray mt-8"
          >
            Final-year Artificial Intelligence student specializing in Computer
            Vision, Machine Learning, and modern web applications.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-5 mt-10"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-amber text-espresso font-semibold text-sm px-7 py-4 rounded-sm hover:bg-charcoal hover:text-cream transition-colors duration-300"
            >
              View Technical Projects <span aria-hidden>→</span>
            </motion.a>

            <motion.a
              href={site.resumeUrl}
              download="Izza_Iqbal_CV.pdf"
              whileHover={{ y: -2 }}
              className="font-mono text-sm text-warmgray border-b border-warmgray/30 pb-1 hover:text-sage hover:border-sage transition-colors"
            >
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex items-center gap-4 mt-8"
          >
            {[
              {
                label: "GitHub",
                href: site.github,
                icon: (
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.21.7.83.58C20.57 22.29 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                href: site.linkedin,
                icon: (
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                  </svg>
                ),
              },
              {
                label: "Email",
                href: `mailto:${site.email}`,
                icon: (
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                ),
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-charcoal/15 text-warmgray hover:bg-charcoal hover:text-cream hover:border-charcoal transition-all duration-200"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          ref={statsRef}
          className="mt-20 border-t border-charcoal/15 pt-8 flex flex-wrap gap-10 md:gap-14"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem}>
              <div className="font-display text-3xl md:text-4xl text-charcoal stat-num">
                {stat.number}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-warmgray mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-warmgray"
          aria-label="Scroll to about"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">
            Scroll
          </span>
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
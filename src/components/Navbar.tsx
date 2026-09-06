"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks, site } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <a href="#home" className="font-display text-xl font-bold text-charcoal">
          Izza<span className="text-amber">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-warmgray hover:text-sage transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={site.resumeUrl}
            download="Izza_Iqbal_CV.pdf"
            className="hidden sm:inline-flex items-center gap-2 font-mono text-xs border border-charcoal text-charcoal px-4 py-2 rounded-sm hover:bg-charcoal hover:text-cream transition-all duration-200"
          >
            Download CV
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-charcoal mb-1.5 transition-transform ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-charcoal transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-charcoal mt-1.5 transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-charcoal/10 py-4 px-6"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 text-sm text-warmgray hover:text-sage transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.resumeUrl}
              download="Izza_Iqbal_CV.pdf"
              className="py-2 text-sm font-mono text-charcoal border-t border-charcoal/10 pt-3"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

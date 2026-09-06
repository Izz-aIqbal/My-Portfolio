"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { designGallery } from "@/data/content";
import { staggerContainer, staggerItem, viewport } from "@/lib/animations";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  wide?: boolean;
}

const tabs = [
  { id: "uiux", label: "UI/UX Screens" },
  { id: "branding", label: "Branding & Identity" },
  { id: "socialMedia", label: "Social Media & Ads" },
  { id: "print", label: "Print & Collateral" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function GalleryImage({ item }: { item: GalleryItem }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      className={`gcard overflow-hidden rounded-sm border border-charcoal/10 bg-[#fdfcf9] flex items-center justify-center relative ${
        item.wide ? "md:col-span-2" : ""
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="w-full h-full object-contain p-3 transition-transform duration-500 hover:scale-105"
      />
      <div className="gcap">{item.caption}</div>
    </motion.div>
  );
}

export default function DesignShowcase() {
  const [activeTab, setActiveTab] = useState<TabId>("uiux");

  return (
    <section id="design" className="relative py-28">
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
              Design & Creative
            </span>
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl md:text-[2.75rem] text-charcoal mb-4"
          >
            The design side of the &ldquo;T&rdquo;. 
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="max-w-xl text-warmgray mb-10"
          >
            Years of freelance and agency design work — brand identities,
            marketing collateral, and interfaces built for real businesses.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-wrap gap-3 mb-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`filter-tab ${activeTab === tab.id ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className={
            activeTab === "uiux"
              ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 auto-rows-[300px] max-w-4xl"
              : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[240px]"
          }
        >
          <AnimatePresence mode="popLayout">
            {designGallery[activeTab].map((item) => (
              <GalleryImage key={item.src} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
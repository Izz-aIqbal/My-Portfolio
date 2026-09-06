"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/content";
import { staggerContainer, staggerItem, viewport } from "@/lib/animations";

const filters = [
  { id: "all", label: "All" },
  { id: "ai-ml", label: "AI & ML" },
  { id: "fullstack", label: "Full-Stack & Web" },
  { id: "software", label: "Software & Systems" },
];

type FilterId = "all" | "ai-ml" | "fullstack" | "software";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="group relative bg-sand/60 border border-charcoal/10 rounded-sm p-7 hover:border-sage/40 transition-colors duration-300 card-hover"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="font-mono text-[10px] uppercase tracking-widest text-sage bg-sage/10 rounded-full px-3 py-1">
          {project.category === "ai-ml"
            ? "AI & Machine Learning"
            : project.category === "fullstack"
            ? "Full-Stack & Web"
            : "Software & Systems"}
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-warmgray hover:text-charcoal transition-colors"
            aria-label={`View ${project.title} on GitHub`}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.21.7.83.58C20.57 22.29 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
            </svg>
          </a>
        )}
      </div>

      <h3 className="font-display text-xl text-charcoal mb-3 group-hover:text-amber transition-colors duration-300">
        {project.title}
      </h3>

      <p className="text-sm text-warmgray leading-relaxed mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] text-warmgray border border-charcoal/15 px-2.5 py-1 rounded-full group-hover:border-sage/40 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-28 bg-sand/40">
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
              Featured Work
            </span>
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl md:text-[2.75rem] text-charcoal mb-4"
          >
            AI & software projects —<br />
            <em className="text-amber">built, tested, deployed.</em>
          </motion.h2>
          <motion.p variants={staggerItem} className="max-w-xl text-warmgray mb-10">
            From medical imaging pipelines to forecasting engines and
            interactive algorithm visualizers.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-wrap gap-3 mb-10"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as FilterId)}
              className={`filter-tab ${activeFilter === filter.id ? "active" : ""}`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
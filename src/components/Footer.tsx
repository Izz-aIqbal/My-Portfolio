import { site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream border-t border-cream/10 py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-xs text-[#C9C2B2]">
        <span>© 2026 {site.name} — {site.location}</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
          Built with Next.js, Tailwind & Framer Motion
        </span>
      </div>
    </footer>
  );
}
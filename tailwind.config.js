/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FDFBF7",
        sand: "#F2EFE9",
        charcoal: "#1A1A1A",
        warmgray: "#65625C",
        sage: "#5B6E58",
        amber: "#D97706",
        espresso: "#161310",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "spin-slower": "spin 22s linear infinite",
        "spin-slowest": "spin 36s linear infinite",
        "drift": "driftGlow 22s ease-in-out infinite alternate",
      },
      keyframes: {
        driftGlow: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "100%": { transform: "translate(40px,-30px) scale(1.15)" },
        },
      },
    },
  },
  plugins: [],
};

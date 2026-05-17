import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#08080D",
        surface: "#0F0F16",
        surface2: "#111118",
        surface3: "#16161E",
        burg: "#8B0F35",
        burg2: "#A31645",
        burg3: "#C4264E",
        txt: "#F4F4F5",
        txt2: "#C9CAD3",
        txt3: "#606075",
        border: "rgba(255,255,255,0.07)",
        border2: "rgba(255,255,255,0.12)",
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
        condensed: ["Barlow Condensed", "sans-serif"],
        display: ["Bebas Neue", "Barlow Condensed", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "burg-gradient": "linear-gradient(135deg, #8B0F35, #A31645)",
      },
    },
  },
  plugins: [],
};

export default config;

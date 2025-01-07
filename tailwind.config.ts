import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        "secondary-orange": "var(--secondary-orange)",
        "soft-white": "var(--soft-white)",
        "active-link": "var(--active-link)",
      },
      screens: {
        "support-hover": { raw: "(hover: hover) and (pointer: fine)" },
        sm: "390px",
        "2xl": "1512px",
      },
      fontFamily: {
        En: ['"Red Hat Display"', "serif"],
        Ar: ['"IBM Plex Sans Arabic"', "serif"],
      },
      keyframes: {
        progress: {
          "0%": { backgroundSize: "0% 100%" },
          "100%": { backgroundSize: "100% 100%" },
        },
      },
      animation: { progress: "progress 2s ease-in-out infinite " },
    },
  },
  plugins: [],
} satisfies Config;

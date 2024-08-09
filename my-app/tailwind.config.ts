import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /brand-(green|amber|red|grey)-[0-9]{3}/,
    },
  ],
  theme: {
    screens: {
      base: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1390px",
      container: "1440px",
      "2xl": "1546px",
      "3xl": "1690px",
      "4xl": "1920px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "services-bg": "url('/img/servicesBg.png')",
      },
      fontFamily: {
        prata: ["Prata", "sans-serif"],
        popins: ["Poppins", "sans-serif"],
        conquera: ["Conquera", "sans-serif"],
        visuelt: ["VisueltPro", "sans-serif"],
        "visuelt-medium": ["VisueltProMedium", "sans-serif"],
      },
      gridTemplateColumns: {
        '3-auto': 'repeat(3, auto)',
      },
      colors: {
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#000000",
      },
      fontSize: {
        "title-xxl": ["44px", "62px"],
        "title-sm2": ["22px", "28px"],
      },
      zIndex: {
        999: "999",
      },
    },
  },
  plugins: [],
};
export default config;

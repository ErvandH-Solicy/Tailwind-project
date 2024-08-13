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
    extend: {
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

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7B1860",
        background: "#F6F2E8"
      },
    },
  },
  plugins: [],
};
export default config;



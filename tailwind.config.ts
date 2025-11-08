
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00529B',
        'secondary': '#00A3E0',
        'accent': '#FFC107',
        'dark': '#212529',
        'light': '#F8F9FA',
      },
    },
  },
  plugins: [],
};
export default config;

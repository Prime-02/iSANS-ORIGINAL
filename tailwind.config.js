/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      rotate: {
        '15': '15deg',   // Adds a rotate-15 class with 15 degrees rotation
        '130': '130deg',   // Adds a rotate-75 class with 75 degrees rotation
        '135': '135deg', // Adds a rotate-135 class with 135 degrees rotation
      },
    },
  },
  plugins: [],
};

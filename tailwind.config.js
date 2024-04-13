import {nextui} from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "ddxs":"0.4rem",
        'dxs': '0.6rem',
        "dsxs":"0.7rem",
        'xs': '.75rem',     // Example extra small font size
        'sm': '.875rem',    // Example small font size
        'base': '1rem',     // Example base font size
        'lg': '1.125rem',   // Example large font size
        'xl': '1.25rem',    // Example extra large font size
        '2xl': '1.5rem',    // Example double extra large font size
        // Add more custom font sizes as needed
       
      },
      fontFamily: {
        'helvetica-neue': ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        'medium': 500,
      },
    },
  },
  darkMode: "class",

  plugins: [nextui()],
};

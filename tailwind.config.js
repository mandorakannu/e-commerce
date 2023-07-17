/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EFFFFD",
          100: "#B8FFF9",
          200: "#85F4FF",
          300: "#42C2FF",
        },
        secondary: {
          50: "#F8F6F4",
          100: "#E3F4F4",
          200: "#D2E9E9",
          300: "#C4DFDF",
        },
        tertiary: {
          50: "#FAF7F0",
          100: "#CDFCF6",
          200: "#BCCEF8",
          300: "#98A8F8",
        },
      },
    },
    plugins: [],
  },
};

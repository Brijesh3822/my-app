/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#42c3d6",
      white: "#FFFFFF",
      black: "#000000",
      gray700: "#374151",
      red500: "#2e0000",
      gray100: "#777777",

      pink100: "#e29c8a",
      gray200: "#F9F8F8",
      gray400: "#656565",
      orange100: "#A87367",
      gray500: "#7a7774",
    },
    screens: {
      xxsm: "320px",
      xsm: "375px",
      sm: "425px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      mlg: "1280px",
      xl: "1440px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};

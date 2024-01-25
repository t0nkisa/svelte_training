/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,svelte,js,ts}"],
  theme: {
    extend: {
      colors: {
        gin: {
          50: "#f4f9f6",
          100: "#ebf5ee",
          200: "#cde5d4",
          300: "#a6cfb3",
          400: "#77b189",
          500: "#539468",
          600: "#417853",
          700: "#356043",
          800: "#2e4d39",
          900: "#274030",
          950: "#112217",
          DEFAULT: "#ebf5ee"
        },
        black_russian: {
          50: "#e9ecff",
          100: "#d7dcff",
          200: "#b7bfff",
          300: "#8c94ff",
          400: "#655fff",
          500: "#513aff",
          600: "#4819ff",
          700: "#410ef4",
          800: "#340fc4",
          900: "#2e1699",
          950: "#0d0628",
          DEFAULT: "#0d0628"
        },
        kimberly: {
          50: "#f4f5f9",
          100: "#ebedf4",
          200: "#dbdeea",
          300: "#c4c7dd",
          400: "#acaecd",
          500: "#9696be",
          600: "#827fac",
          700: "#726e97",
          800: "#5c597a",
          900: "#4e4c63",
          950: "#2d2c3a",
          DEFAULT: "#726e97"
        },
        golden_grass: {
          50: "#fbf7eb",
          100: "#f5eccc",
          200: "#edd79b",
          300: "#e2bb62",
          400: "#d9a23d",
          500: "#c88a2a",
          600: "#ac6b22",
          700: "#8a4e1e",
          800: "#733f20",
          900: "#633620",
          950: "#391b0f",
          DEFAULT: "#d9a23d"
        }
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
  
}


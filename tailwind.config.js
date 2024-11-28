/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      fontFamily: {
        redHat: ['"Red Hat Text"', "sans-serif"], // Add your Google Font
      },
      colors: {
        Rose: {
          50: "hsl(20, 50%, 98%)",
          100: "hsl(13, 31%, 94%)",
          300: "hsl(14, 25%, 72%)",
          400: "hsl(7, 20%, 60%)",
          500: "hsl(12, 20%, 44%)",
          900: "hsl(14, 65%, 9%)",
        },
        Red: {
          DEFAULT: "hsl(14, 86%, 42%)",
        },
        Green: {
          DEFAULT: "hsl(159, 69%, 38%)",
        },
      },
    },
  },
  plugins: [],
};

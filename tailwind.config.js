/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        ["custom-before"]: "0.3125rem 0.3125rem 0 0.3125rem #252836",
        ["custom-after"]: "0.3125rem -0.3125rem 0 0.3125rem #252836",
        ["food-card"]: "0px 8px 24px 0px #2D303E66",
      },
    },
  },
  plugins: [],
};

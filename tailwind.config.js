/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        ["custom-before"]: "0.3125rem 0.3125rem 0 0.3125rem #252836",
        ["custom-after"]: "0.3125rem -0.3125rem 0 0.3125rem #252836",
      },
    },
  },
  plugins: [],
};

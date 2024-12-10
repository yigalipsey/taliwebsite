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
        background: "var(--background)", // צבע רקע דינמי
        foreground: "var(--foreground)", // צבע טקסט דינמי
      },
      fontFamily: {
        rubik: ['"Rubik"', "sans-serif"], // הוספת פונט Rubik
        secular: ['"Secular One"', "sans-serif"], // הוספת פונט Secular One
      },
    },
  },
  plugins: [],
};

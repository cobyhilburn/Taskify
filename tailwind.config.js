/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      golos: "var(--font-golosText)",
      unbounded: "var(--font-unbounded)",
    },

    extend: {
      colors: {
        primarycolor: "var(--primary-color)",
        secondarycolor: "var(--secondary-color)",
        accentcolor: "var(--accent-color)",
      },
    },
  },
};

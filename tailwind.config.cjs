/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
        monospace: "JetBrains Mono, monospace",
      },
      backgroundColor: {
        primary: "#171620",
        secundary: "#21202e",
      },
      textColor: {
        weak: "#b3b3b3",
      },
    },
  },
  plugins: [],
};

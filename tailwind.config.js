/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary1: "var(--Primary1)",
        Secondary: "var(--Secondary)",
        Secondary2: "var(--Secondary2)",
        Text: "var( --Text)",
        Text1: "var(--Text1)",
        HoverButton: "var(--HoverButton)",
        HoverButton1: "var(--HoverButton1)",
        Button1: "var(--Button1)",
      },
      fontFamily: {
        poppins: "var(--poppins)",
        inter: "var(--inter)",
      },
    },
    container: {
      center: true,
      padding: {
        // DEFAULT: "1rem",
        // sm: "1rem",
        // lg: "4rem",
        // xl: "5rem",
        // "2xl": "6rem",
      },
    },
  },
  plugins: [],
};

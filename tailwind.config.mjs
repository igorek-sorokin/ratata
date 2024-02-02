/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: "#FF0C49",
        primary: "#46A5FF",
        midnight: "#090B26",
        secondary: "#828282",
        success: "#008A0E",
        error: "#8A0000",
      },
      fontFamily: {
        sans: ["Overpass", ...defaultTheme.fontFamily.sans],
        display: ["TT Mussels", ...defaultTheme.fontFamily.mono],
      },
      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
        7: "64px",
        8: "80px",
        9: "128px",
        10: "160px",
      },
      fontSize: {
        small: "12px",
        xm: "16px",
        sm: ["18px", "27px"],
        base: ["20px", "25px"],
        lg: ["22px", "28px"],
        xl: ["36px", "40px"],
        "2xl": ["45px", "50px"],
        "3xl": ["54px", "59px"],
        "4xl": ["66px", "73px"],
      },
      boxShadow: {
        button: "0 20px 80px -10px",
      },
      backgroundPosition: {
        input: "30px center",
      },
    },
  },
  plugins: [],
};

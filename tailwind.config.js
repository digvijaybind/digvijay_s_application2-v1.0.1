module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        deep_orange: { A200: "#ff6c2c" },
        indigo: {
          200: "#96abdd",
          300: "#7378b4",
          A200: "#5961f8",
          A200_b2: "#686cf8b2",
          "200_90": "#96abdd90",
          A200_6c: "#5961f86c",
          "300_66_01": "#7378b466",
          "200_b2": "#96abddb2",
          "300_66": "#7e83bc66",
          "300_00": "#7e83bc00",
        },
        blue: {
          100: "#c8d8ff",
          900: "#1a46b7",
          A200: "#4285f4",
          "100_4c": "#c8d8ff4c",
        },
        red: { 500: "#eb4335" },
        green: { 600: "#239f57", "600_01": "#34a853" },
        blue_gray: {
          500: "#5c6d8e",
          700: "#4b4e70",
          800: "#343d50",
          "500_01": "#5c74a2",
          "700_01": "#484665",
          "800_4c": "#36384a4c",
        },
        black: { 900: "#060419", "900_0c": "#0000000c", "900_19": "#00000019" },
        purple: {
          50: "#f2d8f6",
          "50_6c": "#f2d8f66c",
          "100_19": "#dea4f219",
          "100_b2": "#ebaaf1b2",
        },
        amber: { 500: "#fbbc05" },
        gray: { 900: "#1b1532" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { sfprotext: "SF Pro Text", inter: "Inter" },
      textShadow: { ts: "0px 1px  1px #0000000c" },
      backgroundImage: {
        gradient: "linear-gradient(310deg ,#5961f8,#f2d8f6)",
        gradient1: "radial-gradient(#dea4f219,#00000019)",
        gradient2: "linear-gradient(180deg ,#686cf8b2,#ebaaf1b2)",
        gradient3: "linear-gradient(310.99deg ,#5961f86c,#f2d8f66c)",
      },
      boxShadow: { bs: "0px 1px  1px 0px #0000000c" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
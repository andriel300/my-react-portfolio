/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        black: "#000",
        white: "#fff",
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        orange: "#FF7E00",
        grey: "#ededed",
        roxo: "#7f5af0",
        tertiary: "#2cb67d",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
        rainblue:
          "linear-gradient(68.4deg,  rgba(99,251,215,1) -0.4%, rgba(5,222,250,1) 100.2%)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          // "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
          "linear-gradient(68.4deg,  rgba(99,251,215,1) -0.4%, rgba(5,222,250,1) 100.2%)",
        "gradient-rainblue":
          // "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
          "linear-gradient(68.4deg,  rgba(99,251,215,1) -0.4%, rgba(5,222,250,1) 100.2%)",
        "gradient-blueing": "linear-gradient(90deg, #4481eb 10%, #04befe 90%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

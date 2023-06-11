/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
        "2xl": "1920px", // Add an additional breakpoint for larger screens
      },
      colors: {
        // your light mode styles here
        "black-text": "#010403",
        background: "#fff",
        "primary-button": "#31c495",
        "secondary-button": "#2a0b3c",
        accent: "#2caf86",

        // ... existing colors ...
        "deep-blue": "#010026",

        // Override existing colors for dark mode:
        dark: "#16161a",
        white: "#fff",
        black: "#000",
        roxo: "#7f5af0",

        // Skills set colors
        red: "#DC4492",
        blue: "#2CBCE9",
        orange: "#FF7E00",
        yellow: "#FDCC49",

        grey: "#ededed",
        tertiary: "#2cb67d",

        // Navbar colors
        navbar: "hsla(0, 0%, 100%, 0.1)",
        // DotGroup
        "dark-grey": "#757575",

        // Form text
        "opaque-white": "rgba(255, 255, 255, 0.35)",
        "opaque-black": "rgba(0,0,0,0.35)",
      },

      // Button on footer and line gradient
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(68.4deg,  rgba(99,251,215,1) -0.4%, rgba(5,222,250,1) 100.2%)",
        "gradient-rainblue":
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
    plugins: [],
  },
};

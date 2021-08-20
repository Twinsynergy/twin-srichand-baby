/* eslint-disable global-require */
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px"
    },
    fill: (theme) => ({
      red: theme("colors.red.500"),
      success: theme("colors.success"),
      blue: theme("colors.blue.500")
    }),
    fontFamily: {
      PSLOmyimPro: ["PSLOmyimPro", "serif"],
      PSLOmyimProBold: ["PSLOmyimProBold", "serif"],
      PSLOmyimExtraPro: ["PSLOmyimExtraPro", "serif"],
      nunito: ["nunito", "sans-serif"],
      serif: ["Merriweather", "serif"]
    },
    extend: {
      zIndex: {
        1: "1",
        2: "2"
      },
      colors: {
        black: "#000",
        white: "#fff",
        orange: "#ECA308",
        placeholder: "#B5B5C3",
        primary: "#EA4B6B",
        secondary: "#5F5F5F",
        "product-desc-slide": "#5C3313",
        "old-lace": "#FDF8EF",
        "older-lace": "#F7EEDE",
        ingredients: "#573927",
        "ingredients-secondary": "#8B6C41",
        "srichand-red": "#B32F53",
        "footer-srichand": "#2b4073",
        "footer-srichand-border": "#33477a"
      },
      fontSize: {
        "6.5xl": "4rem",
        "10xl": "10rem",
        "11xl": "12rem",
        "12xl": "14rem"
      }
    }
  },
  variants: {},
  corePlugins: {
    container: false
  },
  plugins: [
    require("@tailwindcss/custom-forms"),
    plugin(({ addComponents }) => {
      addComponents({
        ".container": {
          width: "100%",
          maxWidth: "100%",
          "@screen md": {
            maxWidth: "100%"
          },
          "@screen lg": {
            maxWidth: "1024px"
          },
          "@screen xl": {
            maxWidth: "1280px"
          },
          "@screen 2xl": {
            maxWidth: "1440px"
          }
        },
        ".product-container": {
          width: "100%",
          maxWidth: "100%",
          "@screen md": {
            maxWidth: "100%"
          },
          "@screen lg": {
            maxWidth: "1024px"
          },
          "@screen xl": {
            maxWidth: "1280px"
          },
          "@screen 2xl": {
            maxWidth: "1440px"
          }
        },
        ".container-fluid": {
          width: "100%",
          maxWidth: "1920px",
          margin: "0 auto"
        }
      });
    })
  ]
};

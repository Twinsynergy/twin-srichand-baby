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
        1: "1"
      },
      colors: {
        black: "#000",
        white: "#fff",
        placeholder: "#B5B5C3",
        primary: "#ea6077",
        ingredients: "#573927",
        "ingredients-list": "#896149",
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
        ".container-fluid": {
          width: "100%",
          maxWidth: "1920px",
          margin: "0 auto"
        },
        ".accordion": {
          marginBottom: "15px",
          border: "1px solid #000",
          ".opened": {
            ".accordion__head": {
              span: {
                transformOrigin: "center center"
              }
            }
          },
          "&.disable-click": {
            ".accordion__head": {
              "&:after": {
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                content: "''",
                zIndex: "10"
              }
            }
          },
          ".accordion__head": {
            backgroundColor: "#fff",
            position: "relative",
            cursor: "pointer",
            p: {
              padding: "21px 50px 21px 22px",
              color: "#000",
              marginBottom: "0",
              zIndex: "1",
              position: "relative"
            },
            span: {
              position: "absolute",
              top: "50%",
              right: "17px",
              marginTop: "-12px",
              cursor: "pointer",
              fontSize: "1.5rem",
              transform: "rotate(0deg)",
              transitionProperty: "transform",
              transitionTimingFunction: "ease",
              svg: {
                display: "block"
              }
            }
          },
          ".accordion__body": {
            backgroundColor: "#000",
            display: "none",
            overflow: "hidden",
            transitionProperty: "height",
            transitionTimingFunction: "ease",
            "&_inner": {
              padding: "33px 22px",
              color: "#fff"
            }
          }
        }
      });
    })
  ]
};

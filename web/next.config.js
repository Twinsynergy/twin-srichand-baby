require("dotenv").config();
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withFonts = require("next-fonts");
const tailwindCss = require("tailwindcss");
const path = require("path");

module.exports = withFonts(
  withCSS(
    withSass({
      //   assetPrefix: isProd ? '/srichand-com' : '',
      //   enableSvg: true,
      images: {
        domains: ["localhost:3000", "img2.storyblok.com"]
      },
      // cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[name]__[local]___[hash:base64:5]"
      },
      env: {
        NODE_ENV: process.env.SITE_ENV
      },
      webpack(config) {
        config.resolve.alias.images = path.join(__dirname, "images");
        const rules = [
          {
            test: /\.scss$/,
            use: [
              {
                loader: "postcss-loader",
                options: {
                  ident: "postcss",
                  plugins: [tailwindCss("./tailwind.config.js")]
                }
              },
              { loader: "sass-loader" }
            ]
          },
          {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
              loader: "url-loader",
              options: {
                limit: 100000
              }
            }
          },
          {
            test: /\.(ogg|mp3|wav|mpe?g)$/i,
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]"
            }
          }
        ];
        return {
          ...config,
          module: {
            ...config.module,
            rules: [...config.module.rules, ...rules]
          }
        };
      }
    })
  )
);

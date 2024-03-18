const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/[name].js",
  },
  // PLUGINS
  plugins: [
    // HOMEPAGE
    new HtmlWebpackPlugin({
      template: "src/homepage.handlebars",
      minify: false, // Disable minification for development
      inject: true,
    }),
    // SIGN
    new HtmlWebpackPlugin({
      template: "src/pages/sign/index.handlebars",
      minify: false, // Disable minification for development
      path: path.resolve(__dirname, "public"),
      filename: "pages/sign/index.html",
      inject: false,
    }),
    // HABLAR
    new HtmlWebpackPlugin({
      template: "src/pages/hablar/index.handlebars",
      minify: false, // Disable minification for development
      path: path.resolve(__dirname, "public"),
      filename: "pages/hablar/index.html",
      inject: false,
    }),
    // PROYECTOS
    new HtmlWebpackPlugin({
      template: "src/pages/proyectos/index.handlebars",
      minify: false, // Disable minification for development
      path: path.resolve(__dirname, "public"),
      filename: "pages/proyectos/index.html",
      inject: false,
    }),
    // LIBROS
    new HtmlWebpackPlugin({
      template: "src/pages/libros/index.handlebars",
      minify: false, // Disable minification for development
      path: path.resolve(__dirname, "public"),
      filename: "pages/libros/index.html",
      inject: false,
    }),
    // CURSOS
    new HtmlWebpackPlugin({
      template: "src/pages/cursos/index.handlebars",
      minify: false, // Disable minification for development
      path: path.resolve(__dirname, "public"),
      filename: "pages/cursos/index.html",
      inject: false,
    }),
    // SERVICIOS
    new HtmlWebpackPlugin({
      template: "src/pages/servicios/index.handlebars",
      minify: false, // Disable minification for development
      path: path.resolve(__dirname, "public"),
      filename: "pages/servicios/index.html",
      inject: false,
    }),

    // BLOG
    new HtmlWebpackPlugin({
      template: "src/pages/blog/index.handlebars",
      minify: false, // Disable minification for development
      path: path.resolve(__dirname, "public"),
      filename: "pages/blog/index.html",
      inject: false,
    }),

    // PORTAFOLIO
    new HtmlWebpackPlugin({
      template: "src/pages/portafolio/index.handlebars",
      minify: false, // Disable minification for development
      path: path.resolve(__dirname, "public"),
      filename: "pages/portafolio/index.html",
      inject: false,
    }),
    // CONTACTO
    new HtmlWebpackPlugin({
      template: "src/pages/contacto/index.handlebars",
      minify: false, // Disable minification for development
      path: path.resolve(__dirname, "public"),
      filename: "pages/contacto/index.html",
      inject: false,
    }),
    // COPY THE FILES SO THEY DO NOT GET TOGETHER

    // CSS
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/css", to: "css" }, // Copiar toda la carpeta 'css' dentro de 'src'
      ],
    }),

    // JS
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/js", to: "js" }, // Copiar toda la carpeta 'css' dentro de 'src'
      ],
    }),
  ],

  // RULES
  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      // HANDLEBARS
      {
        test: /\.handlebars/,
        loader: "handlebars-loader",
      },
      {
        test: /(png|jpg|gif|webp)$/, // Select images that start with "i_"
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/img",
            },
          },
        ],
      },
      {
        test: /b_.*.(png|jpg|gif|webp)$/, // Select images that start with "i_"
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/imgbooks",
            },
          },
        ],
      },
    ],
  },
};

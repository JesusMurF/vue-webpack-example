const HTMLWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  entry: join(__dirname, "index.js"),
  output: {
    path: join(__dirname, "build"),
    filename: "app.bundle.js",
  },
  devServer: {
    port: 8080,
    hot: true,
    open: "chrome",
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
          exclude: "/node_modules",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "./assets/fonts/[name].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      showErrors: true,
      cache: true,
      inject: "body",
      title: "Vue with webpack",
      template: join(__dirname, "index.html"),
    }),
  ],
};

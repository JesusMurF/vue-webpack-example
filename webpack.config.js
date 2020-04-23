const { join } = require("path");

module.exports = {
  mode: "development",
  entry: join(__dirname, "index.js"),
  output: {
    path: join(__dirname, "build"),
    filename: "app.bundle.js",
  },
  devServer: {
    port: 1000,
    hot: true,
    open: "Google Chrome",
    historyApiFallback: true,
  },
};

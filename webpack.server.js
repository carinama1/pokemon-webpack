const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  entry: ["react-hot-loader/patch", "./server/server.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.bundle.js",
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "public/static/[name].[ext]?[hash]",
          publicPath: (url) => url.replace(/public/, ""),
        },
      },
    ],
  },
  externals: [nodeExternals()],
};

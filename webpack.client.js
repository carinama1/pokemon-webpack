const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    app: ["react-hot-loader/patch", "./src/index.js"],
  },
  devServer: {
    publicPath: "/public",
  },
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
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: "public/static", to: "static" }],
    }),
  ],
};

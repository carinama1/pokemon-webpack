// const path = require("path");
// const WorkboxPlugin = require("workbox-webpack-plugin");

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "bundle.js",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: "babel-loader",
//       },
//     ],
//   },
//   plugins: [
//     new WorkboxPlugin.GenerateSW({
//       // these options encourage the ServiceWorkers to get in there fast
//       // and not allow any straggling "old" SWs to hang around
//       clientsClaim: true,
//       skipWaiting: true,
//     }),
//   ],
// };

/* eslint-disable @typescript-eslint/naming-convention */
require('../../.pnp.js');
const glob = require("glob");
const path = require("path");
const webpack = require("webpack");

const target = "web";
const distdir = path.join(__dirname, "dist", "web");

module.exports = [
  {
    // bundle used for Karma tests
    target: target,
    entry: glob.sync("./build/**/*.spec.js"),
    output: {
      path: distdir,
      filename: "tests.js",
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
    resolve: {
      fallback: {
        // buffer: false,
        crypto: require.resolve("crypto-browserify"),
        // events: false,
        path: require.resolve("path-browserify"),
        stream: require.resolve("stream-browserify"),
        // string_decoder: false,
      },
    },
  },
];

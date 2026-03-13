const webpack = require("webpack");

module.exports = {
  plugins: [
    // strips "node:" protocol prefix from imports for compatibility with webpack
    new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
      resource.request = resource.request.replace(/^node:/, "");
    }),
  ],
  resolve: {
    // jsroot imports worker_threads, which doesn't exist in the browser
    fallback: {
      worker_threads: false,
    },
  },
};

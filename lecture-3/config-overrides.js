const PreloadWebpackPlugin = require("preload-webpack-plugin");

module.exports = function override(config, env) {
  //do stuff with the webpack config...

  config.plugins.push(
    new PreloadWebpackPlugin({
      rel: "preload",
      as: "font",
      include: "allAssets",
      fileWhitelist: [/(.woff2?)/i],
    })
  );

  return config;
};

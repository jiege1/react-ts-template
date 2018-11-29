
const webpackConfigBase = require('./webpack.config.base');

// const {srcPath, buildPath, htmlPath} = projectRootPaths;

module.exports = {
  ...webpackConfigBase,
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
};
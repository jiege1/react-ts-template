
const projectRootPaths = require('../../paths').projectRootPaths();
const Webpack = require(projectRootPaths.nodeModulesPath + '/webpack');

const webpackCompiler = (webpackConfig) => {
  let compiler;

  console.log('');
  console.error('正在执行 webpack 编译...');

  try {
    compiler = Webpack(webpackConfig);
  } catch (e) {
    console.error('[ERR]: Failed to compile.');
    console.log('');
    console.log('正在执行 webpack 编译出错');
    console.error(e.message || e);
    console.log('');
    process.exit(1);
  }


  compiler.plugin('done', stats => {
    if (stats.hasErrors()) {
      return console.error(
        stats.toString({
          colors: true
        })
      );
    }

    console.log(
      stats.toString({
        colors: true,
        chunks: false,
        assets: true
      })
    );
  });

  compiler.plugin('failed', err => {
    throw err;
  });

  return compiler;
};

module.exports = {
  webpackCompiler,
};

const Webpack = require('webpack');
const chalk = require('chalk');

const webpackCompiler = (webpackConfig) => {
  let compiler;

  console.log('');
  console.error('正在执行 webpack 编译...');

  try {
    compiler = Webpack(webpackConfig);
  } catch (e) {
    console.log(chalk.red('[ERR]: Failed to compile.'));
    console.log('');
    console.log(chalk.red('正在执行 webpack 编译出错'));
    console.log(chalk.red(e.message || e));
    console.log('');
    process.exit();
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
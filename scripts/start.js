process.env.NODE_ENV = 'development';
const Utils = require('./common/utils');
const address = require('address');
const WebpackDevServer = require('webpack-dev-server');
const opn = require('opn');
const chalk = require('chalk');
const compilers = require('./common/compilers');
const { webpackConfigDevJs, webpackDevServerJs } = require('./common/paths');

// 初始端口号
const initPort = 8888;

console.log('----------启动开发模式--------------');
console.log('');
Utils.portTest(initPort)
  .then(res => {
    console.log(`Test can ues port：${res}`);
    const protocol = process.env.HTTPS === 'true' ? 'https:' : 'http:';
    const host = address.ip();
    startServer(protocol, host, res);
  })
  .catch(e => {
    console.log('portTest fail：', e);
    process.exit();
  });

function startServer(protocol, host, port) {
  console.log(protocol, host, port);

  console.log('');
  console.log('正在合并配置文件.... ');
  const webpackDevServerConfig = webpackDevServerJs(host, port);
  const webpackCompiler = compilers.webpackCompiler(webpackConfigDevJs);

  console.log('');
  console.log('正在启动 webpack-dev-server 服务...');
  const server = new WebpackDevServer(webpackCompiler, webpackDevServerConfig);
  const serverUrl = `${protocol}//${webpackDevServerConfig.host}:${port}`;

  console.log('');
  console.log('webpack-dev-server is run success！');
  console.log('Server is running in : ', serverUrl);


  console.log('');
  console.log('while opening the chrome........');
  console.log('');

  opn(serverUrl, { app: Utils.isWin32 ? 'chrome' : 'google chrome' });

  console.log('');
  console.log('浏览器启动成功！！');
  console.log('');
  console.log('');


  console.log('========================');

  server.listen(port, err => {
    if (err) {
      console.log(chalk.red('[ERR]: Failed to webpack dev server'));
      console.error(err.message || err);
      process.exit();
    }
    console.log('');
    console.log('');
    console.log('----------------------------------------------------');
    console.log(`Starting the development server at: ${serverUrl}`);
  });

}
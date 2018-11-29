const net = require('net');
const chalk = require('chalk');

/**
 * 检测端口号是否被占用
 *
 * @param port
 * @returns {Promise<any>}
 */
function portTest(port) {
  const startServer = (startPort) => {
    console.log(chalk.blue(`Test enable port：${startPort}...`));
    return new Promise((resolve, reject) => {
      const server = net.createServer().listen(startPort);
      // 启动成功
      server.on('listening', () => {
        server.close();
        resolve(startPort);
      });
      // 启动失败
      server.on('error', (e) => {
        if (e.code !== 'EADDRINUSE') {
          reject(e);
        }
        // 如果端口被占用，那么 端口号++ 后在测试
        console.log(chalk.red(`Test port：${startPort} has benn used!!！`));
        startServer(startPort + 1).then(res => {
          resolve(res);
        });
      });
    });
  };

  return new Promise((resolve, reject) => {
    startServer(port).then(res => {
      if (res) {
        resolve(res);
      } else {
        reject(res);
      }
    });
  });
}

/**
 * 检测文件是否存在
 * @param path
 * @returns {boolean}
 */
function fsExists(path) {
  try {
    fs.accessSync(path, fs.F_OK);
  } catch (e) {
    return false;
  }
  return true;
}

module.exports = {
  portTest,
  fsExists,
  isWin32: process.platform === 'win32',
};
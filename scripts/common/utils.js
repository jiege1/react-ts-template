const net = require('net');
const chalk = require('chalk');

const portTest = (port) => {

  const startServer = (startPort) => {
    return new Promise((resolve) => {
      const server = net.createServer().listen(startPort);
      // 启动成功
      server.on('listening', () => {
        server.close();
        resolve(startPort);
      });
      // 启动失败
      server.on('error', (e) => {
        if (e.code !== 'EADDRINUSE') {
          resolve(false);
        }
        // 如果端口被占用，那么 端口号++ 后在测试
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
};

module.exports = {
  portTest,
};
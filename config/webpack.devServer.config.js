
module.exports = (host, port) => {
  return {
    compress: true,
    clientLogLevel: 'none',
    contentBase: './',
    watchContentBase: true,
    hot: true,
    publicPath: '/',
    quiet: true,
    // Reportedly, this avoids CPU overload on some systems.
    // https://github.com/facebookincubator/create-react-app/issues/293
    watchOptions: {
      ignored: /node_modules/,
    },
    host,
    port,
    public: host,
    overlay: false,
    disableHostCheck: true, // 允许host绑定
    open: true,
  };
};

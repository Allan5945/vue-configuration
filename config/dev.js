module.exports = {
  historyApiFallback: true,
  noInfo: true,
  overlay: true,
  port: 8099,
  open: true,
  // openPage:"index.html",  // 修改默认打开的页面  ** 会打开未打包的html ！！
  proxy: {   // 代理请求
    '**': {
      target: 'http://127.0.0.1', // 代理请求的地址加端口
      changeOrigin: true,
      secure: false,
      bypass: function (req, res, proxyOptions) {
        var urls = req.url;
        if (urls == '/' || urls.indexOf("html") != -1 || urls.indexOf("png") != -1 || urls.indexOf("jpg") != -1) {
          return "/index.html"
        };
      }
    }
  }
};

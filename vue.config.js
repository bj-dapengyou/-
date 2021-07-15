module.exports = {
    lintOnSave: false, //如果为false，就是取消eslint规则的检查
    devServer: { // 环境配置
      hot:true,
      host: '0.0.0.0',
      port: 8080,
      https: false,
      open: true // 配置自动启动浏览器
      // public: '22.54.113.22:8080',
    },
  }
  
//vue.config.js
const path = require('path')
const isDevelopment = process.env.NODE_ENV == 'development'
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/uni.scss";
        `
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    output: {
      pathinfo: false,
    },
  },
  transpileDependencies: ['uni-simple-router'],
  configureWebpack: (webpackConfig) => {
    webpackConfig.plugins.push(
      new webpack.ProvidePlugin({
        getCoverage: path.resolve(__dirname, "./window-polyfill.js"),
      })
    );
    // webpackConfig.optimization.minimize = false;
  },
}

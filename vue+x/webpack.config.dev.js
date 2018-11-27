const path = require('path')
const baseConfig = require('./webpack.config.js')
const merge = require('webpack-merge')

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),   // 线上可以更换目录
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    compress: true,
    contentBase: path.resolve(__dirname, 'public'),  // webpack服务器的根目录，生成的js会保存在内存中
    hot: true,
    port: 8888,
    host: '127.0.0.1',
    disableHostCheck: true,
    publicPath: '/',   // 即 当访问 / 时， 会自动定位到contentBase
    historyApiFallback: {}
  }
})
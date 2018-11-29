const path = require('path')
const baseConfig = require('./webpack.config.js')
const merge = require('webpack-merge')
const webpack = require('webpack')

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),   // 线上可以更换目录
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()] // 或者使用express+webpack
  // 使用webpack自带的dev-server,   
  // devServer: {
  //   inline: true,
  //   compress: true,
  //   contentBase: path.resolve(__dirname, '/'),  // webpack服务器的根目录，生成的js会保存在内存中
  //   hot: true,
  //   port: 8888,
  //   host: '127.0.0.1',
  //   disableHostCheck: true,
  //   publicPath: '/',   // 即 当访问 / 时， 会自动定位到contentBase
  //   historyApiFallback: {}
  // },
})
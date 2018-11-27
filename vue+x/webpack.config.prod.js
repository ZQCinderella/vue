const path = require('path')
const baseConfig = require('./webpack.config.js')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),   // 线上可以更换目录
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[id].[chunkhash:8].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'public', 'index.html'),
      chunks: ['app', 'vender'],
      inject: true,
      minify: {
        minifyJS : true,    // 压缩html中联在script中的js代码
        removeScriptTypeAttributes: true,
        removeScriptTypeAttributes:true,
        collapseWhitespace:true,
        removeComments : true
      },
    })
  ]
})
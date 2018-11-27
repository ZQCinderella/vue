const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    vender: ['vue', 'vuex'],
    app: path.resolve(__dirname, 'app.js')
  },
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
    historyApiFallback: {
      // rewrites: [
      //   { from : /\//, to: '/public/index.html'}
      // ]
    }
  },
  module: {
    rules: [
      // { test: /\.html$/, use: ['file-loader'] },
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.vue$/, use: ['vue-loader'] },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js', '.json', '.css', '.scss'],
    alias: {
      '@': path.resolve('./')
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vender',
          filename: 'vender.js',
          chunks: 'initial'
        }
      }
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'public', 'index.html'),
      // chunks: ['app', 'vender'],
      // inject: 'body'
    })
  ]
}
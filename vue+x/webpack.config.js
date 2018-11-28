const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    vender: ['vue', 'vuex'],
    app: ['babel-polyfill', path.resolve(__dirname, 'app.js')]
  },
  output: {
    path: path.resolve(__dirname, 'public'),   // 线上可以更换目录
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/'
  },
  module: {
    rules: [
      // { test: /\.html$/, use: ['file-loader'] },    //使用该loader会修改html的内容
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.vue$/, use: ['vue-loader'] },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js', '.json', '.css', '.scss'],
    alias: {
      '@': path.resolve('.')
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
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'public', 'index.html'),
      chunks: ['app', 'vender'],
      // inject: 'body'
    }),
    //webpack4在使用eslint时，会报错Module build failed (from ./node_modules/eslint-loader/index.js):
    // 需要使用该插件，让loader在__dirname下去寻找module
    new webpack.LoaderOptionsPlugin(
      {
        minimize: true,
        debug: false,
        options: {
          context: __dirname
        }
      }
    )
  ]
}
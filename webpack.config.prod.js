const path = require('path')
const baseConfig = require('./webpack.config.js')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// webpack4之后，提取css时如果报错Use Chunks.groupsIterable and filter by instanceof Entrypoint instead
// 则需要安装npm install extract-text-webpack-plugin@next 最近发行的版本
const extractCSS = new ExtractTextPlugin({
  filename: '[name].[chunkhash:8].css',
  allChunks: true
})
module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),   // 线上可以更换目录
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[id].[chunkhash:8].js',
    publicPath: './'
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: extractCSS.extract({
          fallback: 'vue-style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              //extract: true,
              sourceMap: true
            }
          },{
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },]
        }), 
      },
      {
        test: /\.(scss|sass)$/,
        use: extractCSS.extract({
          fallback: 'vue-style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              extract: true,
              sourceMap: true
            }
          },{
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              // indentedSyntax: true,
              sourceMap: true
            }
          }]
        })
      },
    ]
  }, 
  plugins: [
    extractCSS,
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'public', 'index.html'),
      chunks: ['app', 'vendor'],
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
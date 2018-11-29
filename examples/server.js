const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

console.log(process.env.NODE_ENV)
const webpackConfig = process.env.NODE_ENV === 'development' ?
  require('./webpack.config.dev.js') : 
  require('./webpack.config.prod.js')

const app = express();

const compiler = webpack(webpackConfig)

if (process.env.NODE_ENV === 'development') {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: '/dist/',
    stats: {
      colors: true,
      chunks: false
    }
  }))
  
  app.use(webpackHotMiddleware(compiler))
}
app.use(express.static(__dirname))

const port = process.env.PORT || 8088
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})
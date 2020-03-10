/**
 * File name: webpack.dev.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-03-10 16:13:51
 */
process.env.NODE_ENV = 'development'
const merge = require('webpack-merge')
const package = require('./package.json')
const common = require('./webpack.common.js')
const paths = require('./config/paths')

module.exports = merge(common, {
  // https://webpack.js.org/configuration/mode/#usage
  mode: 'development',

  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'eval-source-map',

  devServer: {
    publicPath: paths.publicPath,
    contentBase: paths.appPublic,
    host: '127.0.0.1',
    port: process.env.PORT || 8080,
    hot: true,
    quiet: true,
    inline: true,
    compress: true,
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/
    },
    proxy: {
      '^/api/**': {
        target: process.env.PROXY || package.proxy || 'http://localhost:3000/api'
      }
    },
    historyApiFallback: true
  }
})

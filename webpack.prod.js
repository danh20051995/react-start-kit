/**
 * File name: webpack.prod.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-03-10 16:13:59
 */
process.env.NODE_ENV = 'production'
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production'
})

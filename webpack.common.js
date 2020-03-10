/**
 * File name: webpack.common.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-03-10 14:02:30
 */

const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

const paths = require('./config/paths')
const getClientEnvironment = require('./config/env')

const publicUrl = ''
const env = getClientEnvironment(publicUrl)

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.scss$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
        ],
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      }
    ]
  },
  resolve: {
    alias: {
      '_store': path.resolve(__dirname, 'src/store'),
      '_routes': path.resolve(__dirname, 'src/routes'),
      '_layouts': path.resolve(__dirname, 'src/layouts'),
      '_modules': path.resolve(__dirname, 'src/modules'),
      '_utils': path.resolve(__dirname, 'src/utils'),
      '_styles': path.resolve(__dirname, 'src/styles')
    }
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebPackPlugin({
      inject: true,
      template: paths.appHtml
    }),
    new webpack.DefinePlugin(env.stringified),
    // Generate a manifest file which contains a mapping of all asset filenames
    // to their corresponding output file so that tools can pick it up without
    // having to parse `index.html`.
    new ManifestPlugin()
  ]
}

/**
 * File name: webpack.common.js
 * Created by Visual studio code
 * User: Danh Le / danh.le@dinovative.com
 * Date: 2020-03-10 14:02:30
 */

const path = require('path')
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')

const paths = require('../config/paths')
const getClientEnvironment = require('../config/env')

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
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          configFile: path.join(__dirname, '../.eslintrc')
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
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
        enforce: 'pre',
        loader: 'import-glob-loader'
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
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: './font/[hash].[ext]',
              mimetype: 'application/font-woff'
            }
          }
        ]
      },
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.scss$/,
          /\.json$/
          // /\.bmp$/,
          // /\.gif$/,
          // /\.jpe?g$/,
          // /\.png$/,
        ],
        test: /\.(pdf|png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      _api: path.resolve(__dirname, '../src/api'),
      _util: path.resolve(__dirname, '../src/util'),
      _i18n: path.resolve(__dirname, '../src/i18n'),
      _hooks: path.resolve(__dirname, '../src/hooks'),
      _style: path.resolve(__dirname, '../src/style'),
      _store: path.resolve(__dirname, '../src/store'),
      _route: path.resolve(__dirname, '../src/route'),
      _layout: path.resolve(__dirname, '../src/layout'),
      _module: path.resolve(__dirname, '../src/module'),
      _static: path.resolve(__dirname, '../public/static'),
      _constants: path.resolve(__dirname, '../src/constants'),
      _components: path.resolve(__dirname, '../src/components')
    }
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebPackPlugin({
      inject: true,
      template: paths.appHtml
    }),
    new InterpolateHtmlPlugin(env.raw),
    new webpack.DefinePlugin(env.stringified),
    // Generate a manifest file which contains a mapping of all asset filenames
    // to their corresponding output file so that tools can pick it up without
    // having to parse `index.html`.
    new ManifestPlugin()
  ]
}

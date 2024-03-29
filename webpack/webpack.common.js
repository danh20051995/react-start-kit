const path = require('path')
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')

const paths = require('../config/paths')
const PACKAGE = require(paths.appPackageJson)
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
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        enforce: 'pre',
        loader: 'webpack-glob-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
              minimize: true,
              importLoaders: 1
            }
          },
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'compressed',
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          { loader: 'webpack-glob-loader' },
          {
            loader: 'eslint-loader',
            options: {
              configFile: path.join(__dirname, '../.eslintrc')
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
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
      '@/static': path.resolve(__dirname, '../public/static'),
      '@': path.resolve(__dirname, '../src')
    }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin(env.stringified),
    new HtmlWebPackPlugin({
      inject: true,
      template: paths.appHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
        sortAttributes: true,
        sortClassName: true
      }
    }),
    new InterpolateHtmlPlugin(env.raw),
    // Generate a manifest file which contains a mapping of all asset filenames
    // to their corresponding output file so that tools can pick it up without
    // having to parse `index.html`.
    new ManifestPlugin({
      generate: () => {
        const manifest = require(paths.appManifest)
        manifest.name = PACKAGE.name
        manifest.short_name = PACKAGE.name
        return manifest
      }
    })
  ]
}

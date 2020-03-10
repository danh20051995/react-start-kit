/**
 * File name: webpack.prod.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-03-10 16:13:59
 */
process.env.NODE_ENV = 'production'

const path = require('path')
const isWsl = require('is-wsl')
const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const safePostCssParser = require('postcss-safe-parser')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const paths = require('./config/paths')
const common = require('./webpack.common.js')

const firstRequire = {
  plugins: [
    new CleanWebpackPlugin()
  ]
}

module.exports = merge(firstRequire, common, {
  mode: 'production',
  bail: true,

  devtool: 'source-map',

  entry: [
    require.resolve('./config/polyfills'),
    paths.appIndexJs
  ],

  // https://webpack.js.org/configuration/output/#template-strings
  output: {
    // Next line is not used in dev but WebpackDevServer crashes without it:
    path: paths.appBuild,
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    // This does not produce a real file. It's just the virtual path that is
    // served by WebpackDevServer in development. This is the JS bundle
    // containing code from all our entry points, and the Webpack runtime.
    filename: 'static/js/[name].[hash].js',
    // There are also additional JS chunk files if you use code splitting.
    chunkFilename: 'static/js/[name].[hash].js',
    // This is the URL that app is served from. We use "/" in development.
    publicPath: '/',
    // Point sourcemap entries to original disk location
    devtoolModuleFilenameTemplate: info => path
      .relative(paths.appSrc, info.absoluteResourcePath)
      .replace(/\\/g, '/'),
  },

  // https://webpack.js.org/configuration/optimization
  optimization: {
    nodeEnv: 'production',
    splitChunks: {
      chunks: 'all',
      name: false,
    },
    // minimizer: [
    //   // This is only used in production mode
    //   new TerserPlugin({
    //     terserOptions: {
    //       parse: {
    //         // We want terser to parse ecma 8 code. However, we don't want it
    //         // to apply any minification steps that turns valid ecma 5 code
    //         // into invalid ecma 5 code. This is why the 'compress' and 'output'
    //         // sections only apply transformations that are ecma 5 safe
    //         // https://github.com/facebook/create-react-app/pull/4234
    //         ecma: 8,
    //       },
    //       compress: {
    //         ecma: 5,
    //         warnings: false,
    //         // Disabled because of an issue with Uglify breaking seemingly valid code:
    //         // https://github.com/facebook/create-react-app/issues/2376
    //         // Pending further investigation:
    //         // https://github.com/mishoo/UglifyJS2/issues/2011
    //         comparisons: false,
    //         // Disabled because of an issue with Terser breaking valid code:
    //         // https://github.com/facebook/create-react-app/issues/5250
    //         // Pending further investigation:
    //         // https://github.com/terser-js/terser/issues/120
    //         inline: 2,
    //       },
    //       mangle: {
    //         safari10: true,
    //       },
    //       // Added for profiling in devtools
    //       keep_classnames: true,
    //       keep_fnames: true,
    //       output: {
    //         ecma: 5,
    //         comments: false,
    //         // Turned on because emoji and regex is not minified properly using default
    //         // https://github.com/facebook/create-react-app/issues/2488
    //         ascii_only: true,
    //       },
    //     },
    //     // Use multi-process parallel running to improve the build speed
    //     // Default number of concurrent runs: os.cpus().length - 1
    //     // Disabled on WSL (Windows Subsystem for Linux) due to an issue with Terser
    //     // https://github.com/webpack-contrib/terser-webpack-plugin/issues/21
    //     parallel: !isWsl,
    //     // Enable file caching
    //     cache: true,
    //     sourceMap: true,
    //   }),
    //   // This is only used in production mode
    //   new OptimizeCSSAssetsPlugin({
    //     cssProcessorOptions: {
    //       parser: safePostCssParser,
    //       map: {
    //         // `inline: false` forces the sourcemap to be output into a
    //         // separate file
    //         inline: false,
    //         // `annotation: true` appends the sourceMappingURL to the end of
    //         // the css file, helping the browser find the sourcemap
    //         annotation: true,
    //       },
    //     },
    //   }),
    // ],
  }
})
